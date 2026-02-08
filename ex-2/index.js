// const clicks = click();
// console.log();

// function da() {

//   if (clicks === 'first') {
//     document.getElementsByClassName("id1").className = "nan";
//   }
// }

// function click() {
//   document.querySelector(".div").addEventListener("click", (e) => {
//     return e.target.textContent
//   });
// }

// da();

const l1 = document.querySelector(".id1");
const l2 = document.querySelector(".id2");
const l3 = document.querySelector(".id3");

function show1() {
  l1.classList.remove("nan");
  l2.classList.add("nan");
  l3.classList.add("nan");
}
function show2() {
  l2.classList.remove("nan");
  l1.classList.add("nan");
  l3.classList.add("nan");
}
function show3() {
  l3.classList.remove("nan");
  l2.classList.add("nan");
  l1.classList.add("nan");
}
