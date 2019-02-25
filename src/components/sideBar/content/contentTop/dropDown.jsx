import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

class DropDown extends Component {
  getTypes = () => {
    var products = this.props.products;
    var types = [];

    products.forEach((element, i) => {
      types.push(element.type);
    });
    types = [...new Set(types)];
    var options = [];
    types.forEach((e, i) => {
      options.push({ key: i + 1, text: e, value: i + 1 });
    });
    return options;
  };

  render() {
    return (
      <div>
        <Dropdown
          clearable
          options={this.getTypes()}
          selection
          onChange={e => this.props.searchByTypes(e.target.textContent)}
        />
      </div>
    );
  }
}

export default DropDown;
