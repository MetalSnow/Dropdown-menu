export { next, previous };

const container = document.querySelector('.slides');
const pictureFrame = document.querySelector('.picture-frame');
const imgs = document.querySelectorAll('.gaming');

let imgIndex = 0;

const next = () => {
  // Reset ImgIndex if it reach the maximum pictures
  if (imgIndex === 4) {
    imgIndex = -1;
  }

  imgs.forEach((img) => {
    if (img.parentElement === pictureFrame) {
      container.appendChild(img);
    }
  });

  imgIndex += 1;
  pictureFrame.appendChild(imgs[imgIndex]);
  console.log(imgIndex);
};

const previous = () => {
  // Reset ImgIndex if it reach the maximum pictures
  if (imgIndex === 0) {
    imgIndex = 5;
  }

  imgs.forEach((img) => {
    if (img.parentElement === pictureFrame) {
      container.appendChild(img);
    }
  });

  imgIndex -= 1;

  pictureFrame.appendChild(imgs[imgIndex]);
  console.log(imgIndex);
};
