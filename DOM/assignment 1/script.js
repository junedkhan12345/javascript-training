let image = document.getElementById("image");
let height = 10;
let width = 10;
let flag = true;
setInterval(() => {
  if (flag && height <= 100) {
    height += 10;
    width += 10;

    if (height == 100) {
      flag = false;
    }
  } else {
    height -= 10;
    width -= 10;
    if (height == 0) {
      flag = true;
    }
  }

  image.style.height = `${height}%`;
  image.style.width = `${width}%`;
}, 1000);
