import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import Content from "./content/content.jsx";

const SideBar = props => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar as={Menu} icon="labeled" inverted vertical visible width="thin">
      <Menu.Item as="a">
        <Icon name="list" />
        All Products
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <div>
          <Content
            products={props.products}
            searchByTypes={props.searchByTypes}
            searchHandle={props.searchHandle}
            selectedProducts={props.selectedProducts}
            addToCart={props.addToCart}
            deleteProduct={props.deleteProduct}
            increaseQuantity={props.increaseQuantity}
            decreaseQuantity={props.decreaseQuantity}
          />
        </div>
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default SideBar;
