import './App.css';
import Header from './components/Header/Header';
import Showmoney from './components/ShowMoney/Showmoney';
import Products from './components/Products/Products';
import Receipt from "./components/Receipt/Receipt"

function App() {
  return (
    <div className="App">
      <Header />
      <Showmoney />
      <Products />
      <Receipt />
    </div>
  );
}

export default App;
