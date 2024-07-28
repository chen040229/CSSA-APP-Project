import React,{useState}from 'react';
import "../styles/Home.css";
import Header from './Homecomp/Header.js';
import "../styles/ButtonGrid.css";
import System from './Homecomp/System.js';
import Footer from './Homecomp/Footer.js';


function Home({setSelectedNumber, selectedNumber}) {
  //const [selectedNumber, setselectedtNumber] = useState(null);
  return (

    <div className='Home'>
      <Header/>
      <System setSelectedNumber={setSelectedNumber}/>
      {selectedNumber !== null && (
        <div className="selected-number">
          Selected Number: {selectedNumber}
        </div>
      )}

      <Footer/>
    </div>
  )
}

export default Home