import './App.css';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import Navbar from './components/NavBar/Navbar';

function App() {
  const nombre = "React";
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="Mi tienda online"/>
    </>

  )
}

export default App
