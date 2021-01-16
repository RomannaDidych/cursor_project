import logo from './logo.svg';
import './App.css';
import Category from './Components/Category.js';
import CategoruPageHeader from './Components/CategoryPageHeader';
import CategoryTableTitle from './Components/CategoryTableTitle';
import AddCategory from './Components/AddCategory';

function App() {
  return (
    <div className="App">
      <CategoruPageHeader />
      <CategoryTableTitle />
      <Category />
      <AddCategory />
    </div>
  );
}

export default App;


/*<header className="App-header">
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
      </header>*/