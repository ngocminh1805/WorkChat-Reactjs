import * as React from "react";
import "./chatlistHeader.css";
import icon from "../../assets/edit.svg";

class ChatlistHeader extends React.PureComponent {
  render() {
    return (
      <div className="chatlist-header-container">
        <div className = "chatlist-header-container-child">
          <span className="chatlist-header-title">Trò chuyện</span>
        </div>
        <div className = "chatlist-header-container-child-right">
          <img className="chatlist-header-icon" src={icon} />
        </div>
      </div>
    );
  }
}
export default ChatlistHeader;
