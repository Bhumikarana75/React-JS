import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import { Categories } from './Categories/Categories';
import Card from "./Card/Card";
import Services from "./Services/Services";
import Organic from './Organic/Organic';
import Testimonial from './Testimonial/testimonial';
import News from './News/News'
import Footer from "./Footer/Footer";
import Great from "./Great/Great";
import Popular from './Popular/Popular';

function App() {
  return (
   <>
    <Header/>
    <Banner/>
    <Categories/>
    <Popular/>
    <Card/>
    <Services/>
    <Great/>
    <Organic/> 
    <Testimonial/>
     <News/>
    <Footer/>
   </>
   
  )
}


export default App
