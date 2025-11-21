let box = document.querySelector("#box");
let image1 = document.querySelector("#image1");

window.addEventListener("mousemove", (evn) => {
  let x = evn.clientX;
  let y = evn.clientY;

  // Move circle
  box.style.left = x + "px";
  box.style.top = y + "px";

  // Mask position inside image1
  let rect = image1.getBoundingClientRect();
  let percentX = ((x - rect.left) / rect.width) * 100;
  let percentY = ((y - rect.top) / rect.height) * 100;

  image1.style.setProperty("--x", percentX + "%");
  image1.style.setProperty("--y", percentY + "%");
});

// Circle grows when entering image1

image1.addEventListener("mouseenter", () => {
  box.style.width = "200px";
  box.style.height = "200px";
});
image1.addEventListener("mouseleave", () => {
  box.style.width = "50px";
  box.style.height = "50px";
});
