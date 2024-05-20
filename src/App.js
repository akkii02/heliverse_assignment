import './App.css';
import Navbar from './Components/Navbar/Navbar';
import EndPage from './Components/Pages/Endpage';
// import Footer from './Components/Pages/LastPage';
import Fourthpage from './Components/Pages/Fourthpage';
import Homepage from './Components/Pages/Homepage';
import Secondpage from './Components/Pages/Secondpage';
import Thirdpage from './Components/Pages/Thirdpage';
// import Lastpage from './Components/Pages/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Homepage/>
    <Secondpage/>
    <Thirdpage/>    
    <Fourthpage/>
    <EndPage/>
    </>
  );
}

export default App;
