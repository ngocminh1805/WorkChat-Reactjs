import * as React from "react";
import "./App.css";
import ChatlistHeader from "./components/chatlist-header/chatlistHeader";
import ChatList from "./components/chatList/chatList";
import GlobalMenu from "./components/global-menu/globalMenu";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import SearchBar from "./components/searchbar/searchbar";

class App extends React.PureComponent {
  render() {
    return (
      <div className="container" style={{ height: window.innerHeight }}>
        <GlobalMenu/>
        <Header />
        <div className="body-container"  style={{ height: window.innerHeight-50}} >
          <div className="body-column-1">
            <Menu />
          </div>
          <div className="body-column-2">
            <ChatlistHeader />
            <SearchBar />
            {/* <div style ={{flex:1}}> */}
              <ChatList />
            {/* </div> */}
          </div>
          <div className="body-column-3">
            <div className="boxchat-header"></div>
            <div className="boxchat-body"></div>
            <div className="boxchat-input-message"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
