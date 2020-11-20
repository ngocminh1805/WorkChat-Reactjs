import * as React from "react";
import "./message.css";
import moment from "moment";

interface Props {
  message: string;
  userName: string;
  time: Date;
  userImage?: any;
  isMine: boolean;
}

class Message extends React.PureComponent<Props> {
  render() {
    const { userName, message, userImage, time, isMine } = this.props;
    return (
      <div className="message-master-ctn">
        <img
          className="message-avatar"
          src={userImage}
          style={{ display: isMine ? "none" : "block" }}
        />
        <div
          className="message-cover-ctn"
          style={{
            alignItems: isMine ? "flex-end" : "flex-start",
          }}
        >
          <span className="message-username">{userName}</span>
          <div
            className="message-container"
            style={{
              backgroundColor: isMine ? "#4080FF" : "",
              borderBottomLeftRadius: isMine ? 16 : 0,
              borderBottomRightRadius: isMine ? 0 : 16,
            }}
          >
            <div>
              <span
                className="message-content"
                style={{ color: isMine ? "#fff" : "" }}
              >
                {message}
              </span>
              <span style={{ opacity: 0 }}>..................</span>
              <span
                className="message-time-stamp"
                style={{
                  color: isMine ? "rgba(255,255,255,0.6)" : "",
                }}
              >
                {moment(time).format("h.mm a")}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Message;
