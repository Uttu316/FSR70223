const getLocalCartData = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

var cartProducts = getLocalCartData();

$(() => {
  cartPage();
});

const cartPage = () => {
  createCartList(cartProducts);
  updateCartSummary();
  addSuggestedProductsCarousel();
};

const createCartList = (cartData) => {
  if(Array.isArray(cartData)){
    cartData.forEach((prodcut) => {
      const cartitem = $(getTemplateForCartItem(prodcut));
      handleQuantity(cartitem, prodcut);
      $("#cart-list").append(cartitem);
    });
  }
};

const getTemplateForCartItem = (productInfo) => {
  const { name, preview, price, id, quantity } = productInfo || {};
  return `
    <tr id=${id}>
    <th scope="row">${id}</th>
    <td>
      <img
        class="img-thumbnail rounded cart-prodcut-image"
        src=${preview}
      />
    </td>
    <td>${name}</td>
    <td>
      <select class="product-cart-quantity">
        <option ${
          !quantity || quantity === 1 ? "selected" : ""
        } value="1">1</option>
        <option ${quantity === 2 ? "selected" : ""}  value="2">2</option>
        <option ${quantity === 3 ? "selected" : ""}  value="3">3</option>
      </select>
    </td>
    <td>
      <span> ${price}₹ </span>
    </td>
  </tr>
    `;
};

const handleQuantity = (cartitem, prodcut) => {
  cartitem.change(function (e) {
    const { value } = e.target;
    const prodcutId = prodcut.id;
    updateQuantity(value, prodcutId);
  });
};

const updateQuantity = (quantity, productId) => {
  const index = cartProducts.findIndex((i) => i.id == productId);
  if (index !== -1) {
    const updatedProdcutInfo = cartProducts[index];
    updatedProdcutInfo.quantity = Number(quantity);
    addCartToLocal();
    updateCartSummary();
  }
};

const updateCartSummary = () => {
  let totalPrice = 0;

  cartProducts.forEach((i) => {
    const productPrice = i.price * (i.quantity || 1);
    totalPrice += productPrice;
  });
  let discount = calcutateDiscount(totalPrice);
  let grandTotal = totalPrice - discount;

  $("#sub-total").html(`${totalPrice}₹`);
  $("#summary-discount").html(`${discount}₹ (10%)`);
  $("#summary-grand-total").html(`${grandTotal}₹`);
};

const calcutateDiscount = (totalPrice, discount = 10) => {
  return parseInt((discount * totalPrice) / 100);
};

const addSuggestedProductsCarousel = () => {
  $(".suggested-products").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:`<button type="button" id="slider-arrow-left" class="slick-prev ">Previous</button>`,
    nextArrow:`<button type="button" id="slider-arrow-right" class="slick-next">Next</button>`,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
};
const addCartToLocal = () => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
};