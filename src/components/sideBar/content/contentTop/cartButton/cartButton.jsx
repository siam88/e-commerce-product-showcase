import React, { Component } from "react";
import {
  Button,
  Header,
  Input,
  Icon,
  Table,
  Card,
  Modal
} from "semantic-ui-react";
import ActionButton from "./actionButton.jsx";
export class CartButton extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });
  deleteItem = id => {
    this.setState({
      selectedProducts: [
        ...this.props.selectedProducts.filter(e => e.id !== id)
      ]
    });
  };
  render() {
    return (
      <Modal
        trigger={
          <Button onClick={this.handleOpen} size="large" primary animated>
            <Button.Content hidden>Cart</Button.Content>
            <Button.Content visible>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Modal.Header>Selected Items</Modal.Header>

        <Modal.Content image scrolling>
          <Modal.Description>
            <Card fluid color="red" header="selected Item">
              <Table celled inverted selectable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Image</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                    <Table.HeaderCell>Unit Price</Table.HeaderCell>
                    <Table.HeaderCell>Total Price</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {this.props.selectedProducts.map(e => (
                    <Table.Row>
                      <Table.Cell textAlign="left">
                        <img
                          src={e.image}
                          alt="Smiley face"
                          height="42"
                          width="42"
                        />
                      </Table.Cell>
                      <Table.Cell>{e.name}</Table.Cell>
                      <Table.Cell>
                        <Input
                          transparent
                          size="mini"
                          type="number"
                          placeholder={e.quantity}
                        />
                      </Table.Cell>
                      <Table.Cell>unit price</Table.Cell>

                      <Table.Cell>total price</Table.Cell>
                      <Table.Cell>
                        <ActionButton
                          product={e}
                          productId={e.id}
                          deleteProduct={this.props.deleteProduct}
                        />
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Card>
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
          <Button color="green" inverted>
            <Icon name="checkmark" /> Procced
          </Button>
          <Button color="red" onClick={this.handleClose} inverted>
            <Icon name="checkmark" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default CartButton;
