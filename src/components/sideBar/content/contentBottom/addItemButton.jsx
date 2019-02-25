import React, { Component } from "react";
import { Button } from "semantic-ui-react";
class AddItemButton extends Component {
  render() {
    var e = this.props.product;
    var shop = "Add";
    if (e.selected === true) shop = "Remove";
    else shop = "Add";
    return (
      <Button
        animated="vertical"
        style={{
          float: "right",
          zIndex: "2"
        }}
        color="blue"
        onClick={() => this.props.addToCart(e, e.selected)}
      >
        <Button.Content hidden>{shop}</Button.Content>
        <Button.Content visible>{shop}</Button.Content>
      </Button>
    );
  }
}
export default AddItemButton;
