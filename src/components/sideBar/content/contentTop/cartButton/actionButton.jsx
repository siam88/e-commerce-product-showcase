import React, { Component } from "react";
import { Button, Icon, Grid } from "semantic-ui-react";

export class ActionButton extends Component {
  render() {
    var e = this.props.product;
    return (
      <Grid.Column>
        <Button.Group>
          <Button
            color="green"
            icon
            onClick={() => this.props.increaseQuantity(e)}
          >
            <Icon name="angle up" />
          </Button>
          <Button icon>
            <Icon
              name="angle down"
              onClick={() => this.props.decreaseQuantity(e)}
            />
          </Button>
          <Button
            icon
            onClick={() =>
              this.props.deleteProduct(this.props.productId, e.selected)
            }
          >
            <Icon name="trash" />
          </Button>
        </Button.Group>
      </Grid.Column>
    );
  }
}

export default ActionButton;
