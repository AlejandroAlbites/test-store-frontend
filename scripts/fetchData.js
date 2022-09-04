import { notification, setCategories, showLoading } from "./helpers.js";

export const getProducts = async (name, category) => {
  let result = { error: false, data: null };
  showLoading(true);
  try {
    const url = `https://bsale-store-backend.herokuapp.com/api/products/?name=${name}&category=${category}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.ok) {
      result.error = true;
      notification(
        true,
        "Ops! ocurrió un problema, por favor intente nuevamente"
      );
      setTimeout(() => {
        notification(false);
      }, 3000);
      return result;
    }

    result.data = data;
  } catch (error) {
    result.error = true;
    alert("Ops! ocurrió un problema, por favor intente nuevamente");
  }
  showLoading(false);
  return result;
};

export const getCategories = async () => {
  try {
    const url = "https://bsale-store-backend.herokuapp.com/api/categories/";

    const response = await fetch(url);
    const data = await response.json();

    if (data.ok) {
      setCategories(data.categories);
    }
  } catch (error) {
    console.log(error);
  }
};
