const endpoints = {
  products: "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
};
const getLocalCartData = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

var productsList = [];
var cartProducts = getLocalCartData();

$(() => {
  storePage();
});

const storePage = () => {
  addHeroCarousel();
  getProducts();
  handleFilters();
  handleBrandFilter();
  updateCartCount();
};

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
      handleCardActions(productCard, product);
      $(".store-products").append(productCard);
    });
  }
};
const productTemplate = (product) => {
  const { name, description, preview, price,id } = product || {};
  const isAlreadyInCart = isProductInCart(product);
  const pathofProduct = location.pathname.replace('store.html','product.html')

  return `
    <div class="store-product">
    <a href=${pathofProduct}?product_id=${id}>
    <div class="store-product-img">
      <img src=${preview} alt=${name} />
    </div>
    </a>
    <div class="store-product-details">
      <p class="store-product-title">${name}</p>
      <p class="store-product-desc">
       ${description}
      </p>
      <div class="store-product-actions">
        <div class="price">Price: <span>${price} ₹</span></div>
        <div class="store-product-atc">
          ${
            isAlreadyInCart
              ? `<button class="go-to-cart-btn">Go to Cart</button>`
              : `<button class="add-to-cart-btn">Add to Cart</button>`
          }
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

const handleCardActions = (productCard, productInfo) => {
  handleAddtoCartBtn(productCard, productInfo);
  handleGotoCartBtn(productCard, productInfo);
};

const handleAddtoCartBtn = (productCard, productInfo) => {
  const addToCart = productCard.find(".add-to-cart-btn");

  addToCart.click(function (e) {
    const isAlreadyInCart = isProductInCart(productInfo);
    if (!isAlreadyInCart) {
      const el = $(this);
      addProductToCart(productInfo);
      updateCartCount();
      updateAddtoCartBtn(el);
    }
  });
};
const handleGotoCartBtn = (productCard, productInfo) => {
  const goToCart = productCard.find(".go-to-cart-btn");
  goToCart.click(function (e) {
    const { id: productId } = productInfo || {};
    const pathofProduct = location.pathname.replace("store.html", `cart.html`);
    location.hash = productId;
    location.pathname = pathofProduct;
  });
};
const updateAddtoCartBtn = (addToCartBtn) => {
  addToCartBtn.removeClass("add-to-cart-btn");
  addToCartBtn.addClass("go-to-cart-btn");
  addToCartBtn.html("Go to Cart");
};

const addProductToCart = (productInfo) => {
  cartProducts.push(productInfo);

  addCartToLocal();
};

const addCartToLocal = () => {
  localStorage.setItem("cart", JSON.stringify(cartProducts));
};
const updateCartCount = () => {
  const cartText = $("#nav-cart-count");
  cartText.html(cartProducts.length);
};
const isProductInCart = (productInfo) => {
  return !!cartProducts.find((i) => i.id === productInfo.id);
};
