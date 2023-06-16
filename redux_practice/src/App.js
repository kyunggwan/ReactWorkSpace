import './App.css';
import Header from './components/Header';
import NavContainer from './containers/Nav';
import ArticleContainer from "./containers/Article";

function App() {
  return (
    <div>
      <Header />
      <NavContainer />
      <ArticleContainer />
    </div>
  );
}

export default App;
