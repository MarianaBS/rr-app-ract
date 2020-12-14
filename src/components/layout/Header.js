import React from 'react';

function Header(){
    return(
        <header style={headerStyle}>
             <h1>Cald<span id="especial">AR</span></h1>
             <h2>Boilers Types</h2>
        </header>
    )
}

const headerStyle={
  backgroundColor: '#582588',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
}
export default Header;
