let img = document.getElementById("image");
let height = 10;
let width = 10;
let flag = true;

setInterval(() => {
  if (flag && height <= 100) {
    height += 1;
    width += 1;

    if (height == 100) {
      flag = false;
    }
  } else {
    height -= 1;
    width -= 1;
    if (height == 0) {
      flag = true;
    }
  }
  img.style.height = `${height}%`;
  img.style.width = `${width}%`;
}, 50);
