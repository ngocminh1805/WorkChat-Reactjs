import * as React from "react";
import "./boxchatheader.css";
import camera from "../../assets/camera.svg";
import search from "../../assets/search.svg";
import more from "../../assets/more.svg";

interface Props {
  userImage: any;
  userName: string;
  isOnline: boolean;
}

class BoxchatHeader extends React.PureComponent<Props> {
  render() {
    const { userImage, userName, isOnline } = this.props;
    return (
      <div className="boxchatheader-container">
        <div className="boxchatheader-avatar">
          <div
            className="status-light"
            style={{ backgroundColor: isOnline ? "" : "#808999" }}
          ></div>
          <img src={userImage} className="avatar-image" />
        </div>
        <div className="boxchatheader-content">
          <span className="boxchatheader-userName">{userName}</span>
          <span className="boxchatheader-isonline">
            {isOnline ? "Đang online" : "Offlie"}
          </span>
        </div>
        <div className="boxchatheader-toolbar">
          <img src={camera} className="icon" />
          <img src={search} className="icon" />
          <img src={more} className="icon" />
        </div>
      </div>
    );
  }
}

export default BoxchatHeader;
