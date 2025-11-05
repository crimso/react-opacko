import { Counter } from "./components/Counter";
import { Product } from "./components/Product";

function App() {
  return (
    <>
      <h1>Opacko</h1>
      <Product name="Pracka" desc="Pere pradlo" price={12950} />
      <Counter />
    </>
  );
}

export default App;
