const PRODUCT_URL = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";
const getLocalCartData = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};
var cartProducts = getLocalCartData();
$(() => {
  getProductDetails();
  updateCartCount();
});

const getProductDetails = () => {
  const productId = getProductId();
  if (productId) {
    getProductData(productId);
  } else {
    // redirect to store page
    location.pathname = location.pathname.replace("product.html", "store.html");
  }
};

const getProductId = () => {
  const search = location.search;
  const params = new URLSearchParams(search);
  return params.get("product_id");
};

const getProductData = (productId) => {
  const api = `${PRODUCT_URL}/${productId}`;
  $.get(api, (res) => {
    addProductDataToDOM(res);
  }).fail((err) => {
    console.log(err);
  });
};
const addProductDataToDOM = (productData) => {
  const { name, price, brand, description, preview, photos } =
    productData || {};
  document.title = name;
  $("#title").html(name);
  $("#brand").html(brand);
  $("#preview").attr("src", preview);
  $("#description").html(description);
  $("#price").html(price);

  if (Array.isArray(photos)) {
    photos.forEach((photo, index) => {
      const photoEl = $(`
        <div class="product-preview-photo">
            <img src=${photo} alt=${name}/>
        </div>
        `);
        if(index === 0){
            photoEl.addClass("privew-active")
        }
      $(".product-privews").append(photoEl);
      onPhotoClick(photoEl,photo)
    });
  }
};

const onPhotoClick = (photoEl,photo)=>{
    photoEl.click(function(e){
        $("#preview").attr("src", photo);
        const currActive = $('.product-preview-photo.privew-active');
        currActive.removeClass('privew-active');
        $(this).addClass('privew-active')
    })
}

const updateCartCount = () => {
  const cartText = $("#nav-cart-count");
  cartText.html(cartProducts.length);
};