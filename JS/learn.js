
let nav = document.querySelector(".navbar");
let lis = document.querySelectorAll("li");
console.log(lis);

lis.forEach((li) => {
  li.onclick = () => {
    lis.forEach((el) => {
      el.classList.remove("active");
    });
    li.classList.add("active");
  };
});
