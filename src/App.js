import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Routes from './routes/Router';



function App() {
  return (
    <div className="App">
     <Header/>
     <Routes/>
     <Footer/>
    </div>
  );
}

export default App;
