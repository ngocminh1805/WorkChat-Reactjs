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
  menuLarge = [
    { icon: home, title: "Trang chủ" },
    { icon: dashboard, title: "Dashboard" },
    { icon: aim, title: "Mục tiêu" },
    { icon: todo, title: "Công việc" },
    { icon: todoComplete, title: "Yêu cầu phê duyệt" },
    { icon: project, title: "Dự án" },
    { icon: folder, title: "Drive" },
    { icon: todoStar, title: "Đánh giá" },
    { icon: directory, title: "Trung tâm nhân lực" },
    { icon: meessage, title: "Trò chuyện" },
    { icon: setting, title: "Quản trị" },
  ];

 

 
  render() {
    return (
      <div className="menu-container " id="menu-container">
        <div className="menu-header">
          {/* {this.renderlist()} */}
          <div id="smallMenu">
            {this.menuSmall.map((item) => (
              <MenuItem icon={item.icon} />
            ))}
          </div>
          <div id="largeMenu">
            {this.menuLarge.map((item) => (
              <MenuItem icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
        <div className="menu-footer">
          {/* <MenuItem icon={question} /> */}
        </div>
      </div>
    );
  }
}

export default Menu;
