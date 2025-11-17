let box = document.querySelector("#box");

window.addEventListener("mousemove", (evn) => {
  // console.log(evn.screenX, evn.screenY);
  box.style.top = evn.clientY + "px";
  box.style.left = evn.clientX + "px";
  // box.style.
});
