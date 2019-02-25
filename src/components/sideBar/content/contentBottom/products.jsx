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
import Product from "./product.jsx";
class Products extends Component {
  state = {};

  render() {
    return (
      <div style={{ marginRight: "160px" }}>
        <Grid>
          <Grid.Row height={5}>
            {this.props.products.map(product => (
              <Product
                product={product}
                addToCart={this.props.addToCart}
                key={product.id}
              />
            ))}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Products;
