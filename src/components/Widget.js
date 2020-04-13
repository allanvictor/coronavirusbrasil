import React from 'react';  
import styled from 'styled-components';

import '../assets/css/widget.css';

export const Box = styled.div`
  width: 155px;
  height: 55px;
  margin-top: 30px;
  background-color: #fcfdfd;
  border-radius: 9px;
  padding: 25px;
  padding-right: 30px;
  box-shadow: 0px 31px 35px -26px #080c21;
  display:flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 13pt;
  font-weight: bold;
  text-transform: uppercase;
  padding-top: 5px;
  color: rgba(0,0,0,0.7);
  text-align: center;
`;

export const Value= styled.div`
  font-size: 25pt;
  color: rgba(0,0,0,0.9);
  font-weight: 100;
  text-align: center;
`;

export const Spinner = styled.div`
:not([hidden]) {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
}
::after {
  content: "";
  width: 50px;
  height: 50px;
  border: 2px solid #f3f3f3;
  border-top: 3px solid #f25a41;
  border-radius: 100%;
  will-change: transform;
  animation: spin 1s infinite linear
}
@keyframes spin {
  from {
  transform: rotate(0deg);
  }
  to {
  transform: rotate(360deg);
  }
}
`;

const Widget = (props) => {
  return (
    <Box className="widget">
        <Title>
            { props.title }
        </Title>

        <Value>
            {props.value || <Spinner></Spinner> }
        </Value>
    </Box>
  );
}

export default Widget;