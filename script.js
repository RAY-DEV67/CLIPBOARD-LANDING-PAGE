const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showhead");
      entry.target.classList.add("showcontent");
    } else {
      entry.target.classList.remove("showhead");
      entry.target.classList.remove("showcontent");
    }
  });
});

const hiddenHead = document.querySelectorAll(".head");
const hiddenContent = document.querySelectorAll(".content");
const image = document.querySelectorAll(".lazy");

hiddenHead.forEach((all) => {
  observer.observe(all);
});

hiddenContent.forEach((all) => {
  observer.observe(all);
});

let options = {
  threshold: 1,
};

const imgobserver = new IntersectionObserver(imageObserver, options);

function imageObserver(entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      const img = entry.target;
      const img_src = img.dataset.src;
      img.src = img_src;
      imgobserver.unobserve(img)
    }
  });
}

image.forEach((img) => {
  imgobserver.observe(img);
  console.log(img.dataset.src);
});
