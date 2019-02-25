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

class ProductModal extends Component {
  state = { open: false };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    var e = this.props.product;
    const { open } = this.state;
    var productCard = (
      <div style={{ height: "100%", width: "100%", cursor: "pointer" }}>
        <Image
          size="medium"
          src={e.image}
          style={{ height: "200px", width: "220px", margin: "auto" }}
        />

        <Card.Content>
          <Card.Header>Name - {e.name}</Card.Header>
          <Card.Meta>
            <span className="date">Price - ${e.price}</span>
          </Card.Meta>
          <Card.Description>Discription - {e.discription}</Card.Description>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <a> {e.type}</a>
          </Card.Description>
        </Card.Content>
      </div>
    );

    return (
      <Modal basic size="small" trigger={productCard}>
        <Modal.Header>
          <h1>{e.category}</h1>
        </Modal.Header>
        <Modal.Content image>
          <Image wrapped size="large" src={e.image} />
          <Button.Content hidden> + </Button.Content>
          <Modal.Description>
            <Header style={{ color: "#99ff66" }}>
              <h3>{e.name}</h3>
            </Header>
            <p>{e.description}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.close} inverted>
            <Icon name="checkmark" /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default ProductModal;
