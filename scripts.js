window.onscroll = function () {
  const navbar = document.getElementById("navbar");

  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky"); // Tambahkan kelas sticky saat discroll
  } else {
    navbar.classList.remove("sticky"); // Hapus kelas sticky saat di atas
  }
};
