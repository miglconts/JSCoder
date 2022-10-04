let contenedor = document.getElementById("contenedor");

/* fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((item) => {
      let listItem = document.createElement("li");
      listItem.innerHTML = `
      <h2> ID: ${item.id} </h2>
      <h3> User ID: ${item.userId} </h3>
      <h3> Title : ${item.title} </h3>
      <p> ${item.body} </p>
      <hr />
      `;
      contenedor.append(listItem);
    });
  }); */

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Probando 01",
    body: "Estoy practicando en CoderHouse",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

const getResponse = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    data.forEach((item) => {
      let listItem = document.createElement("li");
      listItem.innerHTML = `
      <h2> ID: ${item.id} </h2>
      <h3> User ID: ${item.userId} </h3>
      <h3> Title : ${item.title} </h3>
      <p> ${item.body} </p>
      <hr />
      `;
      contenedor.append(listItem);
    });
  } catch (error) {
    console.log(error);
  }
};

getResponse();
