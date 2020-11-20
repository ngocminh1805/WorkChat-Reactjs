import * as React from "react";
import "./searchbar.css";
import search from "../../assets/search.svg";

class SearchBar extends React.PureComponent {
  render() {
    return (
      <div className="searchbar-container">
        <img className="search-icon" src={search} />
        <input
          className="input-search"
          placeholder="Tìm kiếm cuộc trò chuyện"
        />
      </div>
    );
  }
}

export default SearchBar;
