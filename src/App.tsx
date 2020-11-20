import * as React from "react";
import "./App.css";
import BoxchatHeader from "./components/boxchatheader/boxchatheader";
import ChatlistHeader from "./components/chatlist-header/chatlistHeader";
import ChatList from "./components/chatList/chatList";
import GlobalMenu from "./components/global-menu/globalMenu";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import SearchBar from "./components/searchbar/searchbar";

import image from "./assets/image.jpg";
import BoxchatInputMessage from "./components/boxchatInputMess/boxchatInputMess";

class App extends React.PureComponent {
  render() {
    return (
      <div className="container" style={{ height: window.innerHeight }}>
        <GlobalMenu />
        <Header />
        <div
          className="body-container"
          style={{ height: window.innerHeight - 50 }}
        >
          <div className="body-column-1">
            <Menu />
          </div>
          <div className="body-column-2">
            <ChatlistHeader />
            <SearchBar />
            <ChatList />
          </div>
          <div className="body-column-3">
            <BoxchatHeader
              isOnline={true}
              userImage={image}
              userName="Minh bé tí"
            />
            <div className="boxchat-body">
              {/* <div className = "boxchat-input-message"> */}
                <BoxchatInputMessage />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
