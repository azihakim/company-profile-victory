function toggleNav() {
  const panel = document.getElementById("mobilePanel");
  // Panel bisa jadi inline-block/d-none; atur sesuai kebutuhan Anda
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}

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
