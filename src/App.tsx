import * as React from 'react';
import "./App.css";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";


class App extends React.PureComponent {


  render(){
    return (
      <div className="container" style={{ height: window.innerHeight}}>
        <Header />
        <div className="body-container">
          <div className="body-column-1">
            <Menu/>
          </div>
          <div className="body-column-2"></div>
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
