function toggleNav() {
  const panel = document.getElementById("mobilePanel");
  // Panel bisa jadi inline-block/d-none; atur sesuai kebutuhan Anda
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
      navbar.style.boxShadow = "0 4px 14px rgba(0, 0, 0, 0.18)";
      navbar.style.padding = "8px 20px";
    } else {
      navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
      navbar.style.padding = "14px 20px";
    }
  });
});

// Optional: efek overlay tetap saat scroll (jika diperlukan seperti sebelumnya)
window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    navbar.style.boxShadow = "0 4px 14px rgba(0, 0, 0, 0.18)";
    navbar.style.padding = "8px 20px";
  } else {
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
    navbar.style.padding = "14px 20px";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  // Data produk dalam bentuk JSON-like object
  const products = {
    natural_rubber: {
      title: "Natural Rubber",
      image: "image/natural-rubber.png",
      desc: "High-quality natural rubber sourced from premium plantations across Southeast Asia and Africa, meeting international standards for various industrial applications.",
      variants: [
        "Malaysia (SMR20)",
        "Indonesia (SIR20)",
        "Vietnam (SVR3L, SVR10, SVR CV 60)",
        "Africa (TSR20)",
        "Latex",
      ],
    },
    synthetic_rubber: {
      title: "Synthetic Rubber",
      image: "image/synthetic-rubber.png",
      desc: "Synthetic rubber variants suitable for diverse industrial applications.",
      variants: ["SBR 1502"],
    },
    coffee_beans: {
      title: "Coffee Beans",
      image: "image/coffee-bean.png",
      desc: "Robusta and Arabica beans sourced from premium origins with strict quality control.",
      variants: ["Robusta", "Arabica"],
    },
    pepper: {
      title: "Pepper",
      image: "image/pepper.png",
      desc: "Premium pepper with consistent quality for global markets.",
      variants: ["Black Pepper", "Premium Grade"],
    },
  };

  const categoryListBody = document.getElementById("categoryListBody");
  const detailImage = document.getElementById("detailImage");
  const detailTitle = document.getElementById("detailTitle");
  const detailDesc = document.getElementById("detailDesc");
  const variantList = document.getElementById("variantList");
  const quoteBtn = document.getElementById("quoteBtn");

  // Build kategori kiri secara dinamis
  Object.keys(products).forEach((key) => {
    const category = products[key];
    const div = document.createElement("div");
    div.className =
      "category-item" + (key === "natural_rubber" ? " active" : "");
    div.setAttribute("tabindex", "0");
    div.setAttribute("aria-label", category.title);
    div.innerHTML = `
      <div class="category-header d-flex justify-content-between align-items-center">
     <span>${category.title}</span>
     <span class="circle-radio" aria-hidden="true"></span>
      </div>
      <div class="badge-row mt-2">
     ${category.variants
       .map(
         (v) =>
           `<span class="badge small bg-secondary bg-opacity-25 m-1">${v}</span>`
       )
       .join("")}
      </div>
    `;
    categoryListBody.appendChild(div);

    // Event listener untuk kategori
    div.addEventListener("click", function () {
      document
        .querySelectorAll(".category-item")
        .forEach((it) => it.classList.remove("active"));
      this.classList.add("active");
      renderCategory(key);
    });
  });

  function renderCategory(key) {
    const product = products[key];
    detailImage.src = product.image;
    detailImage.alt = product.title;
    detailTitle.textContent = product.title;
    detailDesc.textContent = product.desc;

    variantList.innerHTML = product.variants
      .map((v) => `<li>${v}</li>`)
      .join("");
  }

  // Inisialisasi default
  renderCategory("natural_rubber");

  // Action tombol kutip
  if (quoteBtn) {
    quoteBtn.addEventListener("click", function () {
      alert("Please contact us for a quote."); // Ganti dengan action nyata
    });
  }
});
