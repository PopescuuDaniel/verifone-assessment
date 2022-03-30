import { useEffect, useState } from "react";
import "./App.scss";
import { fetchProducts } from "./utils";
import ProductCard from "./components/ProductCard";
import CheckoutProductCard from "./components/CheckoutProductCard";
import Select from "react-select";

const options = [
  { value: "$", label: "USD" },
  { value: "€", label: "EUR" },
  { value: "£", label: "GBP" },
];

function App() {
  const [total, setTotal] = useState(0);
  const [currency, setCurrency] = useState(options[0]);
  const [products, setProducts] = useState([]);
  const [checkoutProducts, setCheckoutProducts] = useState([]);

  const onCurrencyChange = (selectedOption) => {
    setCurrency(selectedOption);
  };
  useEffect(() => {
    fetchProducts()
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    setTotal(0);
    checkoutProducts.forEach((item) =>
      setTotal((prevState) => prevState + item.price)
    );
  }, [checkoutProducts]);

  const addProductToCart = (id) => {
    // products.forEach((item, index) => {
    //   if (item.id === id) {
    //     setCheckoutProducts((prevState) => [...prevState, item]);
    //     // setProducts((prevState) => prevState.splice(index, 1));
    //     products.splice(index, 1);
    //   }
    // });
    setCheckoutProducts((prevState) => [
      ...prevState,
      ...products.filter((item) => item.id == id),
    ]);
    setProducts(products.filter((item) => item.id !== id));
  };
  const removeItemFromCart = (id) => {
    setProducts((prevState) => [
      ...prevState,
      ...checkoutProducts.filter((item) => item.id == id),
    ]);
    setCheckoutProducts(checkoutProducts.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div>
        <h1>Checkout page</h1>
        <Select
          className="currencySelector"
          value={currency}
          onChange={onCurrencyChange}
          options={options}
        />
      </div>
      <div className="productsContainer">
        <div className="productsList">
          <ul>
            {products.map((item) => {
              // console.log("item", item);
              // console.log("index", index);

              return (
                <li key={item.id}>
                  <ProductCard
                    onClickAddToCart={addProductToCart}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    currency={currency}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="checkout">
          <p>Products in your shopping card</p>
          <div className="tableHeader">
            <div className="product">Product</div>
            <div className="quantity">Quantity</div>
            <div className="value">Value</div>
          </div>
          <div>
            <ul>
              {checkoutProducts.map((item) => {
                return (
                  <li key={item.id}>
                    <CheckoutProductCard
                      onClickRemoveItem={removeItemFromCart}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                      currency={currency}
                    />
                  </li>
                );
              })}
              ;
            </ul>
          </div>
          <div>
            <p>Total:</p>
            <div>
              <p>{currency.value}</p>
              <p>{total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
