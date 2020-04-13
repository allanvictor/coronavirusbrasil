import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Widget from '../components/Widget';

import api from '../services/api';

export const Box = styled.div`
  justify-items: center;
  justify-content:center;
  display:flex;
`;
export const Widgets = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px){
    .widget:not(:first-child) {
      margin-left: 50px !important;
    }
    flex-direction: row;
  }                         
`;



const Brazil= () => {

  const [confirmed, setConfirmed] = useState();
  const [cases, setCases] = useState();
  const [recovered, setRecovered] = useState();
  const [deaths, setDeaths] = useState();
  
  useEffect(() => {
    
    const fetchData = async () => {
      const response = await api.get('Brazil');
      let { data } = response.data;
      setConfirmed(data.confirmed);
      setCases(data.cases);
      setRecovered(data.recovered);
      setDeaths(data.deaths);
    }

    fetchData();
   
  }, [])

  return (

    <Box>
      <Widgets className="widgets">
        <Widget title="Casos Confirmados" label="Brazil" value={confirmed} />
        <Widget title="Casos Ativos" label="Brazil" value={cases} />
        <Widget title="Recuperados" label="Brazil" value={recovered} />
        <Widget title="Mortes" label="Brazil" value={deaths}  />
      </Widgets>
    </Box>  

  );
}
export default Brazil;