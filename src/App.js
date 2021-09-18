import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <h1>Shopping Cart Example</h1>
      <hr></hr>
      <Products></Products>
      <hr></hr>
      <Cart></Cart>
    </div>
  );
}

export default App;
