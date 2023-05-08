import React from 'react';

type Props = {};

const Title2Page = (props: Props) => {
  return (
    <>
    <div > <h1>Topography</h1></div>
     {/* <img src="landcover.png" alt="LandCover" /> */}
     {/* <img alt='landCover' style={{ width: 100 }} src={String(landCover)} /> */}
    <img  src={require('./topo.png')} style={{ alignSelf: 'center' }}/>
    <p> <cite>Global ALOS Topographic Diversity</cite></p>
    </>
  );
};

export default Title2Page;