document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("clientes-slider");
  const prevBtn = document.getElementById("clientes-prev");
  const nextBtn = document.getElementById("clientes-next");
  const logoWidth = slider.querySelector(".clientes-logo").offsetWidth + 32; // logo width + margin
  const maxScroll = slider.scrollWidth - slider.offsetWidth;

  prevBtn.addEventListener("click", function () {
    slider.scrollBy({
      left: -logoWidth * 2, // scroll by 2 logos
      behavior: "smooth",
    });
  });

  nextBtn.addEventListener("click", function () {
    slider.scrollBy({
      left: logoWidth * 2,
      behavior: "smooth",
    });
  });
});
