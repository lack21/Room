// lear
// Room Landing Page

window.addEventListener("DOMContentLoaded", () => {
  const leftBtn = document.querySelectorAll(".left-btn");
  const rightBtn = document.querySelectorAll(".right-btn");
  const topSection = document.querySelector(".top-section");
  let width = 0;

  const links = document.querySelector(".links");
  const showLinksBtn = document.querySelector(".show-links-btn");
  const hideLinksBtn = document.querySelector(".hide-links-btn");

  leftBtn.forEach((item) => {
    item.addEventListener("click", () => {
      width += 100;

      if (width === 100) {
        width = 0;
        return;
      }

      topSection.style.transform = `translateX(${width}vw)`;
    });
  });

  rightBtn.forEach((item) => {
    item.addEventListener("click", () => {
      width -= 100;

      if (width === -300) {
        width = -200;
        return;
      }

      topSection.style.transform = `translateX(${width}vw)`;
    });
  });

  showLinksBtn.addEventListener("click", () => {
    links.classList.add("active");
  });

  hideLinksBtn.addEventListener("click", () => {
    links.classList.remove("active");
  });
});
