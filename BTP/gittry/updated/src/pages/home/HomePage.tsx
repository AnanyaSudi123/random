import React from 'react';
import PlantFind from "../../components/plantfind"
import "./Home_style-perc.css"
// const css = require('./Home_style.css')


type Props = {};


const HomePage = (props: Props) => {
  return (
    <>
    {/* <div>HomePage</div> */}
    <PlantFind/>
    <img className='center' src={require('./nilgiri_cleanup.png')} style={{ alignSelf: 'center' }}/>

    <div className='itemlist'>
      <ul className='national-parks'>

        <li className='Mukurthi'>
          <a href='https://en.wikipedia.org/wiki/Mukurthi_National_Park' target='_blank'>Mukurthi</a>
        </li>
        <li className='Silent-Valley'>
          <a href='https://en.wikipedia.org/wiki/Silent_Valley_National_Park' target='_blank'>Silent Valley</a>
        </li>
        <li className='Mudumalai'>
          <a href='https://en.wikipedia.org/wiki/Mudumalai_National_Park' target='_blank'>Mudumalai</a>
        </li>
        <li className='Bandipur'>
          <a href="https://en.wikipedia.org/wiki/Bandipur_National_Park" target='_blank'>Bandipur</a>
        </li>
        <li className='Wayanad-2'>
          <a href="https://en.wikipedia.org/wiki/Wayanad_district" target='_blank'>Wayanad 2</a>
        </li>
        <li className='Wayanad-1'>
          <a href="https://en.wikipedia.org/wiki/Wayanad_district" target='_blank'>Wayanad 1</a>
        </li>
        <li className='Nagarhole'>
          <a href="https://en.wikipedia.org/wiki/Nagarhole_National_Park" target='_blank'>Nagarhole</a>
        </li>

      </ul>
    </div>

    </>
    
  );
};

export default HomePage;