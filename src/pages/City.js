import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import '../assets/css/city.css';

import BrazilMap from '../components/BrazilMap';
import Widget from '../components/Widget';

import api from '../services/api';

export const Title = styled.div`
  text-align:center;
  font-family: 'Zilla Slab', serif;
  color: #fff;
  font-size: 20pt;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
`;
export const Widgets = styled.div`
  animation: zoomIn 1s ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @keyframes zoomIn {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    
    50% {
      opacity: 1;
    }
  }             
`;

const City = () => {

  const [cases, setCases] = useState();
  const [deaths, setDeaths] = useState();
  const [statename, setStateName] = useState();
  const [hidden, setHidden] = useState(true);
  const [flagURL, setFlagURL] = useState("");
  const onClickHandle = uf => {
  
    const fetchData = async () => {
      const response = await api.get('Brazil/uf/'+uf);
      let  data  = response.data;
      setStateName(data.state);
      setCases(data.cases);
      setDeaths(data.deaths);
      setHidden(false);
      setFlagURL(`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`);

    }

    fetchData();
  }

  useEffect(() => {
    const element = Array.from(document.getElementsByClassName('estado'));
    element.forEach((element)=>{
      const uf=element.getElementsByTagName('text')[0].innerHTML;
      element.addEventListener('click',()=>{ onClickHandle(uf)  });
      
    });
  
   
  }, [])

  return (
    
    <div className="city">
      <div className="map">
        <BrazilMap />
      </div>
      <div className="widgets" style={hidden ? { display:'none' } : {}}>
        <Title>
          <div className="ufFlag"><img src={ flagURL } width="30px" alt=""/></div>
          <div className="ufTitle">{ statename }</div>
        </Title>
        <Widgets>
          <Widget title="Casos" label="Brazil" value={ cases } />
          <Widget title="Mortes" label="Brazil" value={ deaths } />
        </Widgets>
      </div>
    </div>
  );
}

export default City;
