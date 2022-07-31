const hambugerEvent = () => {
  const hamEl = document.getElementById("hambuger");
  const sideBar = document.getElementsByClassName("side-bar");
  hamEl.addEventListener("click", () => {
    if (hamEl.classList.contains("active")) {
      hamEl.classList.remove("active");
      overlay.setAttribute("style", "display:none;");
      sideBar[0].setAttribute("style", `left:-255px;`);
    } else {
      hamEl.classList.add("active");
      const overlay = document.getElementById("overlay");
      overlay.setAttribute("style", "display:inline-block;");
      sideBar[0].setAttribute("style", "left:0px;");
    }
  });
};
const typeIt = () => {
  new TypeIt(".type-effect").type("Business strategy.").delete().pause(1000).type("Innovation Plan.").delete().pause(1000).type("Creative Idea.").go();
};

const boxShadow = () => {
  const header = document.getElementById("header");
  if (window.scrollY > 0) {
    console.log(header);
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.onload = () => {
  hambugerEvent();
  typeIt();

  //scroll 감지
  window.addEventListener("scroll", boxShadow);
};
