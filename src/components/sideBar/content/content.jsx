import React from "react";
import { Button, Divider, Input, Segment, Grid } from "semantic-ui-react";
import DropDown from "./contentTop/dropDown.jsx";
import Products from "./contentBottom/products.jsx";
import { Icon } from "semantic-ui-react";
import CartButton from "./contentTop/cartButton/cartButton.jsx";
const Content = props => (
  <Segment basic textAlign="center">
    <Grid>
      <Grid.Row>
        <Grid.Column floated="left" mobile={16} tablet={8} computer={5}>
          <DropDown
            products={props.products}
            searchByTypes={props.searchByTypes}
          />
        </Grid.Column>

        <Grid.Column floated="left" mobile={16} tablet={8} computer={5}>
          <Input
            icon="search"
            iconPosition="left"
            placeholder="Search By Name . . . "
            onChange={e => props.searchHandle(e.target.value)}
          />
        </Grid.Column>

        <Grid.Column floated="left" mobile={16} tablet={8} computer={5}>
          <CartButton
            selectedProducts={props.selectedProducts}
            increaseQuantity={props.increaseQuantity}
            decreaseQuantity={props.decreaseQuantity}
            deleteProduct={props.deleteProduct}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Divider horizontal>---</Divider>
    <Products products={props.products} addToCart={props.addToCart} />
  </Segment>
);

export default Content;
