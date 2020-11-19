import * as React from 'react';
import "./header.css"
import logo from "../../assets/logo.png"
import menu from "../../assets/menu.png"
import image from "../../assets/image.jpg"


class Header extends React.PureComponent {
  
  onClickMenu = () => {
    // const menu: any = document.getElementById("menu-container");
    // const smallMenu: any = document.getElementById("smallMenu");
    // const LargeMenu: any = document.getElementById("largeMenu");
    // if (menu.classList.value.indexOf("active") < 0) {
    //   menu.classList.add("active");
    //   smallMenu.style.display = "none"
    //   LargeMenu.style.display = "block"
    // }
    //  else {
    //   menu.classList.remove("active");
    //   smallMenu.style.display = "block"
    //   LargeMenu.style.display = "none"
    // }
    const menu : any = document.getElementById('global-menu-container');
    menu.classList.add("active");
  };

  render() {
    return (
      <div className="header-container">
        <img src= {menu} className="icon" onClick={this.onClickMenu} />
        <div className="logo-container">
          <img src={logo} className="web-logo" />
        </div>
        <img src={image} className="user-avatar" />
        <div className="toolbar-container"></div>
      </div>
    );
  }
}

export default Header;
