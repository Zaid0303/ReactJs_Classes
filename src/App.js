import logo from './logo.svg';
import Navbarr from './navbar.jsx';
import UncontrolledExample from './header.jsx';
import ProductsComponent from './products.jsx';
import DummyJSONComponent from './dummyJSON.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navbarr></Navbarr>
      <UncontrolledExample></UncontrolledExample>
      <h1 className='my-4'>Products</h1>
      <ProductsComponent></ProductsComponent>

      <h1 className='my-4'>DummyJSON Products</h1>
      <DummyJSONComponent></DummyJSONComponent>

    </div>
  );
}

export default App;
