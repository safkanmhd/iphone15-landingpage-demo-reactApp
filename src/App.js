import './App.css';
import ImageOne from './component/ImageOne';
import ImageTwo from "./component/ImageTwo";
import ImageThree from "./component/ImageThree";
import TextBox from './component/TextBox';
import TextBox1 from './component/TextBox1';
import Imagefour from './component/ImageFour';
import Navbar from './component/Navi';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox1 />
      <ImageThree />
      <Imagefour />
      <Footer />
      
    </div>
  );
}

export default App;
