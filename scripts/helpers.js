import { searchByCategory } from "./app.js";
import {
  cardComponent,
  categoryComponent,
  failSearchComponent,
  loadingComponent,
  notificationComponent,
} from "./components.js";

const cardsContainer = document.getElementById("items");
const carIcon = document.getElementById("car-icon");

export const showLoading = (isLoading) => {
  const loading = document.getElementById("loading");
  loading.innerHTML = loadingComponent(isLoading);
};

export const setProducts = async (products) => {
  cardsContainer.innerHTML = "";
  products &&
    products.map((product) => {
      const html = cardComponent(product);
      cardsContainer.innerHTML += html;
    });
};

const categoriesContainer = document.getElementById("categories");

export const setCategories = async (categories) => {
  categoriesContainer.innerHTML = "";

  categories &&
    categories.map((category) => {
      const html = categoryComponent(category);
      categoriesContainer.innerHTML += html;
    });
};

categoriesContainer.addEventListener("click", (e) => {
  const categorySelected = e.target;
  if (categorySelected.classList.contains("nav-categories__list")) {
    const categoryId = e.target.id;

    searchByCategory(categoryId);
  }
  e.stopPropagation();
});

export const categoryChecked = (categoryId) => {
  const categories = document.querySelectorAll(".nav-categories__list");
  const newCategories = [...categories];

  newCategories.map((category) =>
    category.id === categoryId
      ? (category.style.background = "rgb(222, 93, 0)")
      : (category.style.background = "coral")
  );
};

export const failSearch = (isSearchFail) => {
  const inputSearch = document.getElementById("fail-search");
  inputSearch.innerHTML = failSearchComponent(isSearchFail);
};

cardsContainer.addEventListener("click", (e) => {
  buyProduct(e);
});
const buyProduct = (e) => {
  const btnBuyProduct = e.target;
  if (btnBuyProduct.classList.contains("card__btn-buy")) {
    notification(true, "Se añadió el producto al carrito");
    setTimeout(() => {
      notification(false);
    }, 3000);
  }
  e.stopPropagation();
};
export const notification = (isNotificationActive, text) => {
  const divNotification = document.getElementById("notification");
  divNotification.innerHTML = notificationComponent(isNotificationActive, text);
};

carIcon.addEventListener("click", () => {
  notification(true, "No disponible por el momento");
  setTimeout(() => {
    notification(false);
  }, 3000);
});
