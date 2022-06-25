import { getAllProducts } from "./helpers/fakeData";
import "./App.css";
import Cart from "./components/Cart";
import MainContainer from "./components/layout/MainContainer";
import Theme from "./components/layout/Theme";
import ProductList from "./components/products/ProductList";

function App() {
  const products = getAllProducts();
  return (
    <Theme>
      <MainContainer>
        <div className="md:flex py-4 md:space-x-6">
          <div className="md:basis-2/3">
            {<ProductList products={products} />}
          </div>
          <div className="md:basis-1/3 mt-4 md:mt-0">
            <Cart />
          </div>
        </div>
      </MainContainer>
    </Theme>
  );
}

export default App;
