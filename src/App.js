import { Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import MyList from './Pages/MyList';
import AlreadyWatched from './Pages/AlreadyWatched';
import CurrentlyWatching from './Pages/CurrentlyWatching';
import WatchList from './Pages/WatchList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
    <Header/>
      <Routes>
          <Route path= '/' element={<Home/>}/>
          <Route path= '/mylist' element={<MyList/>} />
          <Route path= '/alreadywatched' element={<AlreadyWatched/>}/>
          <Route path= '/currentlywatching' element={<CurrentlyWatching/>}/>
          <Route path= '/watchlist' element={<WatchList/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
