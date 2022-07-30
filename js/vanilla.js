const hambugerEvent = () => {
  const hamEl = document.getElementById("hambuger");
  const sideBar = document.getElementsByClassName("side-bar");
  //const sideBarWidth = sideBar[0].clientWidth();
  hamEl.addEventListener("click", () => {
    if (hamEl.classList.contains("active")) {
      hamEl.classList.remove("active");
      overlay.setAttribute("style", "display:none;");
      sideBar[0].setAttribute("style", `left:-225px;`);
    } else {
      hamEl.classList.add("active");
      const overlay = document.getElementById("overlay");
      overlay.setAttribute("style", "display:inline-block;");
      sideBar[0].setAttribute("style", "left:0px;");
    }
  });
};

window.onload = () => {
  hambugerEvent();
};
