import React from "react";
import SearchBar from "./SearchBar";
import Amazon from "../api/Amazon";
import PriceList from "./PriceList";
import "./App.css";

class App extends React.Component {
  state = { prices: [] };
  onTextSubmit = async (term) => {
    const response = await Amazon.get("/search", {
      params: {
        keywords: term,
      },
    });

    this.setState({ prices: response.data });
  };
  render() {
    return (
      <div className="ui container">
        <div class="ui inverted segment">
          <div class="ui inverted secondary menu">
            <a class="active item">Home</a>
            <a class="item">Blog</a>
            <a class="item">Help</a>

            <i class="fab fa-amazon iconamazon"></i>
          </div>
        </div>

        <SearchBar onTextSubmit={this.onTextSubmit} />
        <PriceList prices={this.state.prices} />
      </div>
    );
  }
}

export default App;

/**
 *
 *
 * 
 * <div class="ui inverted menu">
  <a class="item active">
    Home
  </a>
  <a class="item">
    Messages
  </a>
  <a class="item">
    Friends
  </a>
</div>
 *
 * this.setState({ Business: response.data.BusinessName });
 *
 *
 */
