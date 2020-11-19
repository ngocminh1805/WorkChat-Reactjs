import * as React from "react";
import MenuItem from "../menu/menuItem";
import "./globalMenu.css";

//
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
import meessage from "../../assets/message.png";
import close from "../../assets/close.png";
import logo from "../../assets/logo.png";

class GlobalMenu extends React.PureComponent {
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


  onClose = () => {
      const menu : any = document.getElementById('global-menu-container');
      menu.classList.remove("active");
  }


  render() {
    return (
      <div className="global-menu-container" id = 'global-menu-container'>
        <div className="global-menu-header">
          <div style={{ flex: 1 , display:"flex" , alignItems:"center", justifyContent:"center"}}>
            <img src={logo} className="web-logo" />
          </div>
          <div onClick = {this.onClose}>
            <img src={close} className="close-btn" />
          </div>
        </div>
        <div className="global-menu-body">
          {this.menuLarge.map((item) => (
            <MenuItem icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    );
  }
}

export default GlobalMenu;
