const fader = document.getElementById("fader");
const continer2 = document.getElementById("continer");

let root1;
let root2;

function d(title, h1, p, imgg, id) {
  const data = {
    userId: title,
    title: h1,
    completed: p,
    img: imgg,
    id,
  };

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
  container.addEventListener("click", () => {
    if (root1.id === "home") return replaceToPostPage(data);
    replaceToHome();
  });
  return container;
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

    return data;
  } catch (error) {
    console.error("Could not fetch data:", error);
  }
}

async function createData() {
  const main = document.createElement("main");
  main.id = "home";
  for (let i = 1; i < 5; i++) {
    const data1 = await fetchDataWrapper(i);
    if (data1)
      main.append(
        d(
          data1.userId,
          data1.title,
          data1.completed,
          `https://picsum.photos/400/400?random=${i}`,
          `id${i}`,
        ),
      );
  }
  return main;
}

async function replaceToHome() {
  const main = await createData();
  root1.replaceWith(main);
  root1 = main;
}

async function replaceToPostPage(data) {
  const postPage = d(
    data.userId,
    data.title,
    data.completed,
    data.img,
    data.id,
  );
  root1.replaceWith(postPage);
  root1 = postPage;
}

function chengeButen() {
  const btns = document.querySelector(".divnav");

  btns.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;

    if (e.target.id === "button2") {
      root1 = continer2.cloneNode(true);
      continer2.replaceWith(createDynamicForm());
    }

    if (e.target.id === "button1" && root1) {
      document.querySelector("form").replaceWith(root1);
    }
  });
}

function createDynamicForm() {
  const h1 = document.querySelector("h1");
  h1.textContent = "Creating a news story";

  const form = document.createElement("form");
  form.method = "POST";

  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.name = "title";
  inputElement.placeholder = "title";

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Submit";

  form.append(inputElement, submitButton);
  return form;
}

// async function replaceToHome() {
//   const main = await createData();
//   root1.replaceWith(main);
//   root1 = main;
// }



const main = await createData();
document.querySelector("body").append(main);
root1 = main;
