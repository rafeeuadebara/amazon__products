import "./PriceItem.css";
import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onTextChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onTextSubmit = (event) => {
    event.preventDefault();

    this.props.onTextSubmit(this.state.term);
  };

  render() {
    return (
      <diV className="search-bar  ui fluid action input">
        <input
          value={this.state.term}
          onChange={this.onTextChange}
          type="text"
          placeholder="Know your amazon product price..."
        ></input>
        <div onClick={this.onTextSubmit} class="ui button">
          Search
        </div>
      </diV>
    );
  }
}

export default SearchBar;

/**
 * <div class="ui fluid action input">
  <input type="text" placeholder="Search...">
  <div class="ui button">Search</div>
  </div>
 * 
 * 
 *  <div className="search-bar ui segment">
        <form onSubmit={this.onTextSubmit} className="ui form">
          <div className="field">
            <label>Search hotel around you</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onTextChange}
            />
          </div>
        </form>
      </div>
 * 
 * 
 * 
 * 
 *  <div className="search-bar ui segment">
        <form onSubmit={this.onTextSubmit} className="ui form">
          <div className="field">
            <label>Search hotel around you</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onTextChange}
            />
          </div>
        </form>
      </div>
 * 
 * 
 * 
 * 
 * 
 */
