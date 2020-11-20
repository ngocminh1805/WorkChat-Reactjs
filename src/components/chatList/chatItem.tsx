import * as React from "react";
import "./chatItem.css";
import moment from "moment";

interface Props {
  userImage: any;
  userName: string;
  message: string;
  time: Date;
  isSeen: boolean;
  isOnline: boolean;
  isGroup?: boolean | false;
}

interface State {}

class ChatItem extends React.PureComponent<Props> {
  render() {
    const { userImage, userName, message, time, isSeen, isOnline , isGroup} = this.props;
    return (
      <div
        className="chatitem-container"
        style={{ backgroundColor: isSeen ? "" : "#EEF0F7" }}
      >
        <div className="chatitem-avatar">
          <div
            className="status-light"
            style={{ backgroundColor: isOnline ? "" : "#808999" }}
          ></div>
          <img src={userImage} className="avatar-image" />
        </div>
        <div className="chatitem-content">
          <div className ='chat-userName-ctn'>
            <span className="chat-userName">{userName}</span>
            <div className = "grouptag" style = {{display: isGroup? 'flex':'none'}}>NHÓM</div>
          </div>

          <span
            className="chat-message"
            style={{ fontWeight: isSeen ? "normal" : "bold" }}
          >
            {message}
          </span>
        </div>
        <div className="chatitem-right-ctn">
          <span className="chat-item-time">{moment(time).format("HH:mm")}</span>
          <div
            className="isSeen-icon"
            style={{ display: isSeen ? "none" : "block" }}
          ></div>
        </div>
      </div>
    );
  }
}

export default ChatItem;
