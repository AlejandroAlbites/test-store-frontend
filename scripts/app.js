import { getCategories, getProducts } from "./fetchData.js";
import { categoryChecked, failSearch, setProducts } from "./helpers.js";

const inputSearch = document.getElementById("search");

let nameValue = "";
let categoryId = 0;
let timeout = null;

const initialStateProducts = async () => {
  const { error, data } = await getProducts(nameValue, categoryId);
  if (error === false) {
    setProducts(data.rows);
  }
};

const searchByProduct = async () => {
  clearTimeout(timeout);
  timeout = setTimeout(async () => {
    nameValue = inputSearch.value;
    const { error, data } = await getProducts(nameValue, categoryId);
    failSearch(false);
    if (error === false) {
      if (data.rows.length === 0) {
        failSearch(true);
      }

      setProducts(data.rows);
    }
  }, 1000);
};
inputSearch.addEventListener("keyup", searchByProduct);

export const searchByCategory = async (categoryID) => {
  nameValue = "";

  const { error, data } = await getProducts(nameValue, categoryID);
  if (error === false) {
    failSearch(false);
    categoryChecked(categoryID);
    setProducts(data.rows);
  }
};

const init = async () => {
  await initialStateProducts();
  getCategories();
};

init();
