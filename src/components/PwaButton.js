import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
export const Button = styled.a`

	background-color:#44c767;
	border-radius:28px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:16px 31px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
    width: 100px;
    height: 15px;
    :hover {
	    background-color:#5cbf2a;
    }
    :active {
	    position:relative;
	    top:1px;
    }
`;

const PwaButton = () => {
    
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);
  
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
  
    const onClick = evt => {
      evt.preventDefault();
      if (!promptInstall) {
        return;
      }
      promptInstall.prompt();
    };
    if (!supportsPWA) {
      return null;
    }
        
    return (
        <Button href="#" className="btn-pwa" onClick={onClick}>Instalar App</Button>
    );
};

export default PwaButton;