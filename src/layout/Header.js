import React from "react";

const Header = () => {

  return (
    <header>
      <img src={process.env.PUBLIC_URL + '/AppLogo.png'} alt="AppLogo" />
    </header>
    )
}

export default Header;
