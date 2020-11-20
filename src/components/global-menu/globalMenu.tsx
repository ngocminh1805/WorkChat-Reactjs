import * as React from "react";
import MenuItem from "../menu/menuItem";
import "./globalMenu.css";

//
import aim from "../../assets/menu-icon/target.svg";
import dashboard from "../../assets/menu-icon/dashboard.svg";
import directory from "../../assets/menu-icon/userprofile.svg";
import folder from "../../assets/menu-icon/folder.svg";
import project from "../../assets/menu-icon/tabs.svg";
import setting from "../../assets/menu-icon/setting.svg";
import todo from "../../assets/menu-icon/tasklist.svg";
import todoComplete from "../../assets/menu-icon/task check.svg";
import todoStar from "../../assets/menu-icon/task review.svg";
import home from "../../assets/menu-icon/home.svg";
import meessage from "../../assets/menu-icon/message.svg";
import close from "../../assets/menu-icon/close.svg";
import logo from "../../assets/logo.svg";

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
    const menu: any = document.getElementById("global-menu-container");
    menu.classList.remove("active");
    const layer: any = document.getElementById("global-menu-full");
    layer.classList.remove("active");
  };

  render() {
    return (
      <div className = "global-menu-full" id = "global-menu-full" >
        <div className="global-menu-container" id="global-menu-container">
          <div className="global-menu-header">
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={logo} className="web-logo" />
            </div>
            <div onClick={this.onClose}>
              <img src={close} className="close-btn" />
            </div>
          </div>
          <div className="global-menu-body">
            {this.menuLarge.map((item) => (
              <MenuItem icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>  
      </div>
    );
  }
}

export default GlobalMenu;
