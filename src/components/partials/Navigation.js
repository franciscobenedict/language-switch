import React from 'react';
import fbLogo from '../../assets/fb-logo-white-header.svg';

const Navigation = () => {

  return (
    <header className="header">
      <a className="fbLogo" href="http://www.franciscobenedict.com" rel="noopener noreferrer" target="_blank"><img src={fbLogo} alt="" /></a>
      <a className="" href="http://www.react.franciscobenedict.com/" rel="noopener noreferrer">Home</a>
      <a className="" href="https://github.com/franciscobenedict/language-switch" rel="noopener noreferrer" target="_blank">Github</a>
    </header>
  );
}

export default Navigation;
