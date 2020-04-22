import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import corona from '../assets/images/apple-icon-60x60.png';

export const ConfirmButton = styled.a``;

export const CancelButton = styled.a``;

export const Banner = styled.div`
    width:100%;
    height:15vh;
    background-color:#fff;
    ${props => props.display==="true" ?  "display:flex;" : "display:none;"}
    flex-direction: row;
    position:fixed;
    bottom: 0;
    font-family: 'Roboto Condensed', sans-serif;
    .PwaQuestion{
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
    .PwaQuestion .Question{
        margin-left:10px;
        
    }
    .PwaButtons{
        display:flex;
        flex-direction: row;
        justify-content: flex-end;
        align-content: flex-end;
        align-items: flex-end;
    }
    .PwaButtons a {
        font-weight: bold;
        color: brown;
        text-decoration:none;
        text-align:center;
        width: 60px;
    }
 
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const PwaBanner = () => {
    
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);
    const [display, setDisplay] = useState("true");
  
    useEffect(() => {
      const handler = e => {
        e.preventDefault();
        console.log("we are being triggered :D");
        setSupportsPWA(true);
        setPromptInstall(e);
      };

      window.addEventListener("beforeinstallprompt", handler);
  
      return () => window.removeEventListener("transitionend", handler);
    }, []);
  
    const installPWA = evt => {
      evt.preventDefault();
      if (!promptInstall) {
        return;
      }
      promptInstall.prompt();
    };
    
    if (!supportsPWA) {
      return null;
    }

    const noinstallPWA = evt => {
        evt.preventDefault();
        setDisplay("false");
      };

        
    return (
        <Banner display={display}>                      
            <div className="PwaQuestion">
                 <div className="Logo">
                    <img src={corona} alt="covid" />
                </div>
                <div className="Question">
                    Deseja adicionar a sua tela de apps ?
                </div>
            </div>
            <div className="PwaButtons">
                <a href="#opa" onClick={noinstallPWA} className="btn-pwa">NÃO</a>
                <a href="#tchau" onClick={installPWA} className="btn-pwa">SIM</a>
            </div>
        </Banner>
    );
};

export default PwaBanner;