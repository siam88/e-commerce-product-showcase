import React, { Component } from "react";
import {
  Card,
  Icon,
  Modal,
  Button,
  Header,
  Image,
  Grid
} from "semantic-ui-react";
import ProductModal from "./productModal.jsx";
import AddItemButton from "./addItemButton.jsx";
class Product extends Component {
  render() {
    return (
      <Grid.Column floated="left" mobile={16} tablet={8} computer={4}>
        <Card style={{ marginBottom: "10%", zIndex: "1", width: "100%" }}>
          <ProductModal product={this.props.product} />
          <Card.Content extra>
            <AddItemButton
              product={this.props.product}
              addToCart={this.props.addToCart}
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}
export default Product;
