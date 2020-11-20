import * as React from "react";
import "./menu.css";

// import icon
import meessage from "../../assets/menu-icon/message.svg";
import bell from "../../assets/menu-icon/bell.svg";
import chat from "../../assets/menu-icon/usergroup.svg";
import question from "../../assets/menu-icon/question.svg";
import MenuItem from "./menuItem";

interface Props {}

interface State {}

class Menu extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  menuSmall = [{ icon: meessage }, { icon: chat }, { icon: bell }];

  componentDidMount() {
    const btn = document.getElementsByClassName("menu-item");
    var i: number;
    for (i = 0; i < btn.length; i++) {
      const btn_item: any = btn[i];
      btn[i].addEventListener("click", () => {
        btn_item.classList.toggle("active");
        
      });

    }
  }

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
