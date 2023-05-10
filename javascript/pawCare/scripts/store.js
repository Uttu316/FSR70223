const endpoints = {
  products: "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
};

var productsList = [];
var currentCartCount = 0;
var cartProducts = [];

$(() => {
  addHeroCarousel();
  getProducts();
  handleFilters();
  handleBrandFilter();
});

const addHeroCarousel = () => {
  $(".store-hero").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: true,
  });
};

const getProducts = () => {
  $.get(endpoints.products, (data) => {
    productsList = data;
    createProductList(data);
  }).fail((err) => {
    console.log(err);
  });
};

const createProductList = (products) => {
  if (Array.isArray(products)) {
    products.forEach((product) => {
      const productCard = $(productTemplate(product));
      handleAddToCart(productCard, product);
      $(".store-products").append(productCard);
    });
  }
};
const productTemplate = (product) => {
  const { name, description, preview, price } = product || {};
  return `
    <div class="store-product">
    <div class="store-product-img">
      <img src=${preview} alt=${name} />
    </div>
    <div class="store-product-details">
      <p class="store-product-title">${name}</p>
      <p class="store-product-desc">
       ${description}
      </p>
      <div class="store-product-actions">
        <div class="price">Price: <span>${price} ₹</span></div>
        <div class="store-product-atc">
          <button class="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
    `;
};

const removeList = () => {
  $(".store-products").html("");
};

const handleFilters = () => {
  const categoris = $(".store-categories button");

  categoris.click(function (e) {
    const currFilter = $(e.target);
    const id = currFilter.attr("id");
    makeFilterActive(currFilter);
    removeList();

    if (id === "accesories-filter") {
      const accesoriesList = productsList.filter((i) => i.isAccessory);
      createProductList(accesoriesList);
    } else if (id === "clothing-filter") {
      const clothingList = productsList.filter((i) => !i.isAccessory);
      createProductList(clothingList);
    } else {
      createProductList(productsList);
    }
  });
};

const makeFilterActive = (currFilter) => {
  const currentActive = $(".store-categories button.active-category");
  currentActive.removeClass("active-category");
  currFilter.addClass("active-category");
};

const handleBrandFilter = () => {
  const brandFiltes = $("#brand-filtes");
  brandFiltes.change(function (e) {
    const { value } = e.target;
    removeList();
    if (value === "all") {
      createProductList(productsList);
    } else {
      const brandList = productsList.filter((i) => i.brand === value);
      createProductList(brandList);
    }
  });
};

// filter logic for searching
// const brandList = productsList.filter((i)=>i.name.toLowerCase().includes(value.toLowercase()))

const handleAddToCart = (productCard, productInfo) => {
  const addToCart = productCard.find(".add-to-cart-btn");
  addToCart.click(function (e) {
    const isAlreadyInCart = cartProducts.find((i) => i.id === productInfo.id);
    if (!isAlreadyInCart) {
      cartProducts.push(productInfo);
      const cartText = $("#nav-cart-count");
      cartText.html(++currentCartCount);
    }
  });
};
