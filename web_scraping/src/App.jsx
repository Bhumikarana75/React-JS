import { useEffect, useState } from 'react'
import Headers from './component/header.jsx'
import Slider from './component/Slider.jsx'

function App() {

  const [menu, setMenu] = useState([]);
  const [slider, setSlider] = useState([]);
  // const [card, setCard] = useState([]);

  const getMenu = async () => {
    try {
      const data = await fetch('http://localhost:3001/header')
      const res = await data.json();
      console.log(res);
      setMenu(res)
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  const getSlider = async() => {
    try {
      const data = await fetch('http://localhost:3001/slider');
      const res = await data.json();
      setSlider(res);
      
    } catch (error) {
      console.log(error);
      return false;      
    }
  }

  // const getCard = async () => {
  //   try {
  //     const data = await fetch('http://localhost:3001/card')
  //     const res = await data.json();
  //     console.log(res);
      
  //   } catch (error) {
  //     console.log(error);
  //     return false;      
  //   }
  // }

  useEffect(() => {
    getMenu();
    getSlider();
    // getCard();
  }, [])

  return (
    <>
      <Headers menuList = {menu} />
      <Slider sliderList={slider}/>
      
    </>
  )
}

export default App
