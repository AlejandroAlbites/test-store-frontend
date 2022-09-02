const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();
const btnSearch = document.getElementById("btn-search");

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});
btnSearch.addEventListener("click", async () => {
  const inputName = document.getElementById("search").value;
  console.log(inputName);
  await fetchData(inputName);
});

const fetchData = async (name = "") => {
  try {
    const res = await fetch(
      `http://localhost:8000/api/products/?name=${name}&category=`
    );
    const { rows } = await res.json();
    console.log(rows);
    showCards(rows);
  } catch (error) {
    console.log(error);
  }
};

const showCards = (rows) => {
  rows.map((product) => {
    templateCard.querySelector("h3").textContent = product.name;
    templateCard.querySelector("h2").textContent = product.Category.name;
    templateCard.querySelector("p").textContent = `$ ${product.price}`;
    if (product.url_image) {
      templateCard.querySelector("img").setAttribute("src", product.url_image);
    }
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
};
