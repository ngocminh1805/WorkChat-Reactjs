import * as React from "react";
import BoxchatHeader from "../boxchatheader/boxchatheader";
import BoxchatInputMessage from "../boxchatInputMess/boxchatInputMess";
import "./boxchat.css";

import nullimage from "../../assets/null-image.png";

interface Props {
    profile?: boxchatProfile | null
 
}
interface State {}

interface boxchatProfile{
    userName: string;
    userImage: any;
    isOnline: boolean;
}

class BoxChat extends React.PureComponent<Props, State> {
  renderBoxchat = () => {
    if (this.props.profile != null) {
      return (
        <div className="boxchat-container">
          <BoxchatHeader
            isOnline={this.props.profile.isOnline}
            userImage={this.props.profile.userImage}
            userName={this.props.profile.userName}
          />
          <BoxchatInputMessage />
        </div>
      );
    } else {
      return (
        <div className="boxchat-container-null">
          <img src={nullimage} className = 'null-image'/>
        </div>
      );
    }
  };

  render() {
    return this.renderBoxchat();
  }
}

export default BoxChat;
