const categories = [
  {
    id: "groceries",
    label: "Groceries",
  },
  {
    id: "clothings",
    label: "Clothings",
  },
  {
    id: "accessories",
    label: "Accessories",
  },
  {
    id: "jwellery",
    label: "Jwellery",
  },
];
const products = [
  {
    name: "Apple",
    category: "groceries",
  },
  {
    name: "H&M",
    category: "clothings",
  },
  {
    name: "Gold Necklace",
    category: "jwellery",
  },
];

const [selectedCategories, setSelectedCategories] = useState([]);
const [filteredProducts, setFilterProducts] = useState(products);

useEffect(() => {
  if (selectedCategories.length) {
    // if any category is selected, check for selected products
    const newProducts = products.filter((i) =>
      selectedCategories.includes(i.category)
    );
    setFilterProducts(newProducts);
  } else {
    // nothing selected, reset  the cards
    setFilterProducts(products);
  }
}, [selectedCategories]);

const onClickButton = (id) => {
  const newCategories = [...selectedCategories];

  if (newCategories.includes(id)) {
    // alredy present, remove it from selected array
    newCategories = newCategories.filter((i) => i !== id);
  } else {
    //add selected category
    newCategories.push(id);
  }
  setSelectedCategories(newCategories);
};
