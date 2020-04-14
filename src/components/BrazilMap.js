import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MapImage } from '../assets/images/brazil_map.svg'

export const Box = styled.div`
    display:flex;
    justify-content:center;
`
export const Map = styled(MapImage)`

path {
    fill: #fff
}
  
text {
    fill: #000;
    font: 12px Arial-BoldMT, sans-serif;
    cursor: pointer
}
  
a {
    text-decoration: none
}
  
a:hover {
    cursor: pointer;
    text-decoration: none;
}
  
a:hover path {
    fill: green !important
}
  
.circle {
    fill: #66ccff
}
  
a:hover .circle {
    fill:green !important;
    cursor: pointer
  }
path {
    stroke : brown;
}

`;

const BrazilMap = () => {
  return (
    <Box className="Map">
        <Map />       
    </Box>

  );
}
export default  BrazilMap;