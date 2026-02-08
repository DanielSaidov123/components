const main = document.getElementById("main");

function d(title, h1, p) {
  const continer = document.createElement("div");
  continer.classList = 'continer'
   const img = document.createElement("img");
  img.src="https://fastly.picsum.photos/id/29/400/400.jpg?hmac=JmRg5v6v6WI2S_QaQoVHTErlKvqRoDGMzzPtVN3EWc4" ;
  img.classList = 'img'
  continer.append(img);
  const divtitle = document.createElement("div");
  divtitle.textContent = title;
  continer.append(divtitle);
  const divh1 = document.createElement("h1");
  divh1.textContent = h1;
  continer.append(divh1);
  const divp = document.createElement("p");
  divp.textContent = p;
  continer.append(divp);
  main.append(continer);
}

async function fetchDataWrapper() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
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
  const data1 = await fetchDataWrapper();
  const data2 = await fetchDataWrapper();

  if (data1) d(data1.userId, data1.title, data1.completed);
  if (data2) d(data2.userId, data2.title, data2.completed);
}

createData();
