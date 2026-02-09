const main = document.getElementById("main");
let originalMain = null;
const arr = [];
let root;
function d(title, h1, p, imgg, id) {
  const container = document.createElement("div");
  container.classList = "continer";
  container.id = id;
  const img = document.createElement("img");
  img.src = imgg;
  img.classList = "img";
  container.append(img);
  const divtitle = document.createElement("div");
  divtitle.textContent = title;
  divtitle.classList = "divtitle";
  container.append(divtitle);
  const divh1 = document.createElement("h1");
  divh1.textContent = h1;
  divh1.classList = "divh1";
  container.append(divh1);
  const divp = document.createElement("p");
  divp.textContent = p;
  divp.classList = "p";
  container.append(divp);
  root = container;
  arr.push(container);
  main.append(root);
  attachOpenBehavior(container);
}

async function fetchDataWrapper(num) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${num}`,
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Could not fetch data:", error);
  }
}

async function createData() {
  for (let i = 1; i < 5; i++) {
    const data1 = await fetchDataWrapper(i);
    if (data1)
      d(
        data1.userId,
        data1.title,
        data1.completed,
        `https://picsum.photos/400/400?random=${i}`,
        `id${i}`,
      );
  }
}
function attachOpenBehavior(container) {
  container.addEventListener("click", () => {
    if (!originalMain) {
      originalMain = main.cloneNode(true);

      const bigPost = container.cloneNode(true);
      bigPost.classList.add("big");
    
      main.replaceWith(bigPost);

      bigPost.addEventListener("click", () => {
        bigPost.replaceWith(originalMain);
        originalMain = null;
      });
    }
  });
}
createData();
