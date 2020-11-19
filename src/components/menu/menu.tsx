import * as React from 'react';
import "./menu.css";

// import icon
import meessage from "../../assets/message.png";
import bell from "../../assets/bell-light.png";
import chat from "../../assets/Line.png";
import question from "../../assets/question-circle-light.png";
import MenuItem from "./menuItem";

// import menu icon
import aim from "../../assets/menu-icon/aim.png";
import dashboard from "../../assets/menu-icon/dashboard.png";
import directory from "../../assets/menu-icon/directory.png";
import folder from "../../assets/menu-icon/folder.png";
import project from "../../assets/menu-icon/project.png";
import setting from "../../assets/menu-icon/setting.png";
import todo from "../../assets/menu-icon/todo.png";
import todoComplete from "../../assets/menu-icon/todo-complete.png";
import todoStar from "../../assets/menu-icon/todo-star.png";
import home from "../../assets/menu-icon/home.png";

interface Props{

}

interface State{

}

class Menu extends React.PureComponent<Props,State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  menuSmall = [{ icon: meessage }, { icon: chat }, { icon: bell }];

  render() {
    return (
      <div className="menu-container " id="menu-container">
        <div className="menu-header">
          <div id="smallMenu">
            {this.menuSmall.map((item) => (
              <MenuItem icon={item.icon} />
            ))}
          </div>
        </div>
        <div className="menu-footer">
          <MenuItem icon={question} />
        </div>
      </div>
    );
  }
}

export default Menu;
