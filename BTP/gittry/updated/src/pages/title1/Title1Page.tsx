// import React, { Component } from "react";
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './title1.css';
// import './expo_bar.png';
// import './exponential.png';
// require('./landcover.png')
// require('./exponential.png')


type Props = {};
// const landCover = require('landcover.png')


const Title1Page = (props: Props) => {
  const [year, setYear] = React.useState('2019');
  const [image, setImage] = React.useState('./cropped/lc19.jpeg');
  interface YearToImg {
    name: string
    image: string
    
  }
  const initialProducts: YearToImg[] =
    [{
      name: '2015',
      image: './cropped/lc15.png',
      
    },
    {
      name: '2016',
      image: './cropped/lc16.png',
      
    },
    {
      name: '2017',
      image: './cropped/lc17.png',
      
    },
    {
      name: '2018',
      image: './cropped/lc18.png',
      
    },
    {
      name: '2019',
      image: './cropped/lc19.jpeg',
      
    },
    
    ]

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
    initialProducts.map(element=>{
      console.log(element.name+' '+element.image);
      
      if(element.name==event.target.value){
        
        setImage(element.image);
      }
    })
    
    // console.log(image);
  };

  return (
    <>
      {/* <div >Land Cover</div> */}
      <Box sx={{ minWidth: 120 }} style={{marginLeft:'34%'}}>
        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
          <InputLabel id="demo-simple-select-label">Select Year </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={year}
            label="Select Year"
            onChange={handleChange}
          >
            <MenuItem value={2015}>2015</MenuItem>
            <MenuItem value={2016}>2016</MenuItem>
            <MenuItem value={2017}>2017</MenuItem>
            <MenuItem value={2018}>2018</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
            {/* <MenuItem value={2020}>2020</MenuItem> */}
          </Select>
        </FormControl>
      </Box>
      {/* {console.log(year)} */}
      {console.log(image)}
      {year!==''?
      <div>
      <TransformWrapper
        initialScale={1}
        
        limitToBounds={true}
      >
      
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          
          <React.Fragment>
            <div className="tools" style={{marginLeft:'22%', marginTop:'3%'}}>
              <button className="button_class" style={{marginLeft:'12%'}} onClick={() => zoomIn()}>Zoom In</button>
              <button className="button_class"  onClick={() => zoomOut()}>Zoom Out</button>
              <button className="button_class"  onClick={() => resetTransform()}>Reset</button>
            </div>
            {/* marginleft 30 or 25 height:'55%*/}
            <div style={{width:'50%',border:'10px solid #233044', marginLeft:'20%', padding:'1.5%'}}>
            <TransformComponent>
              
              <img src={require( `${image}`)} alt="test" style={{ alignSelf: 'center', width:'100%'}} />

            </TransformComponent>
            </div>
          </React.Fragment>
        )}
      </TransformWrapper>
      <p> <cite>Images extracted from Landsat/landcover, Google Earth Engine</cite></p>
      </div>
      :
      <div></div>
      }
    </>
  );
};

export default Title1Page;