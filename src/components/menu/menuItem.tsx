import * as React from "react";
import "./menuItem.css";

interface Props {
  icon: any;
  title?: string;
}

class MenuItem extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  onClickItem = () => {
    console.log('Click menu item ',this.props.title);
    
  }

  render() {
    const { icon, title } = this.props;
    return (
      <div className="menu-item">
        <img src={icon} className="menu-icon" />
        <span className="menu-item-title">{title}</span>
      </div>
    );
  }
}

export default MenuItem;
