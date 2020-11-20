import * as React from "react";
import BoxchatHeader from "../boxchatheader/boxchatheader";
import BoxchatInputMessage from "../boxchatInputMess/boxchatInputMess";
import "./boxchat.css";

import nullimage from "../../assets/null-image.svg";
import Message from "../message/message";
import ListMessage from "../message/listmessage";

interface Props {
  profile?: boxchatProfile | null;
}
interface State {
  initWidth: number;
  width: number;
}

interface boxchatProfile {
  userName: string;
  userImage: any;
  isOnline: boolean;
}

class BoxChat extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      initWidth: (window.innerWidth - 80) * 0.8,
      width: (window.innerWidth - 80) * 0.8,
    };
  }

  initSize = 250;

  updateWidth = () => {
    this.setState({ width: (window.innerWidth - 80) * 0.8 });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  renderBoxchat = () => {
    if (this.props.profile != null) {
      return (
        <div className="boxchat-container">
          <BoxchatHeader
            isOnline={this.props.profile.isOnline}
            userImage={this.props.profile.userImage}
            userName={this.props.profile.userName}
          />
          {/* <Message
            userName={this.props.profile.userName}
            userImage={this.props.profile.userImage}
            message="The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as
            opposed to"
            time = {new Date()}
            isMine = {false}
          />
          <Message
            userName={this.props.profile.userName}
            message="The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as
            opposed to"
            time = {new Date()}
            isMine = {true}
          /> */}
          <ListMessage/>
          <BoxchatInputMessage />
        </div>
      );
    } else {
      return (
        <div className="boxchat-container-null">
          <img
            src={nullimage}
            className="null-image"
            style={{
              width: (this.initSize * this.state.width) / this.state.initWidth,
              height: (this.initSize * this.state.width) / this.state.initWidth,
            }}
          />
        </div>
      );
    }
  };

  render() {
    return this.renderBoxchat();
  }
}

export default BoxChat;
