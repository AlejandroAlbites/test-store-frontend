export const cardComponent = (product) => {
  const { name, price, url_image, Category, discount } = product;

  const img =
    url_image ||
    "https://www.idermo.com/media/zoo/images/NO_DISPONIBLE_9a5c67258a4b3e42975ee73854698066.jpg";

  return `
    <article>
    <div class="card">

    <span class=${
      discount > 0 ? "card__discount" : "card__discount-none"
    } >% ${discount} DSCTO</span>
      <img
        src="${img}"
        alt="${name}"
        class="card__img"
      />
      <div class="card__body">
        <h2 class="card__category">${Category.name}</h2>
        <h3 class="card__title">${name}</h3>
        <div class="card__footer">
          <p class="card__price">$ ${price}</p>
          <button class="card__btn-buy">Comprar</button>
        </div>
      </div>
    </div>
  </article>
      `;
};

export const loadingComponent = (isLoading) => {
  return `
  <div class=${isLoading && "loading"}>
      <div></div>
    </div>
      `;
};

export const categoryComponent = (categories) => {
  return `
  <li class= "nav-categories__list" 
  id="${categories.id}">  ${categories.name}</li>
  <span>|</span>

        `;
};

export const failSearchComponent = (isSearchFail) => {
  return `
  <div class=${
    isSearchFail ? "fail-search__text" : "fail-search__text-disable"
  }>
  <h2>No se encontró un producto con ese nombre, ingrese un producto válido.</h2>
  <p>Puede revisar todo nuestro catálogo en la sección "TODOS", o intente buscar por categoría.</p>
  </div>

        `;
};

export const notificationComponent = (isNotificationActive) => {
  console.log(isNotificationActive);
  return `
    <div class=${
      isNotificationActive ? "notification" : "notification-disable"
    }>
    <h2 class="notification__title">Se añadió el producto al carrito</h2>
    <div class="notification__load"></div>
  </div>
  
          `;
};
