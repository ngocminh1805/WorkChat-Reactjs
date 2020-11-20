import * as React from 'react';
import "./header.css"
import logo from "../../assets/logo.svg"
import menu from "../../assets/menu.svg"
import image from "../../assets/image.jpg"


class Header extends React.PureComponent {
  
  onClickMenu = () => {
    const menu : any = document.getElementById('global-menu-container');
    const layer: any = document.getElementById("global-menu-full")

    menu.classList.add("active");
    layer.classList.add("active")
  };

  render() {
    return (
      <div className="header-container">
        <img src= {menu} className="menu-btn-icon" onClick={this.onClickMenu} />
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
