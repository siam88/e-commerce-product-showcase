import React, { Component } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import SideBar from "./components/sideBar/sideBar.jsx";
import "./styles.css";
import axios from "axios";

class App extends Component {
  state = {
    products: [],
    backupProducts: [],
    selectedProducts: [],
    product: {
      id: 7,
      name: null,
      type: null,
      quantity: null,
      image: null,
      discription: null
    }
  };
  componentDidMount() {
    axios.default.header = {
      "Content-Type": "aplication/json",
      Authorization: "Token 623d9ed4755d01f2defbe095a27afe8350e91cf8"
    };
    axios
      .get("https://nafiul.pythonanywhere.com/ecom/api/products/")
      .then(
        res => (
          this.setState({ products: res.data }),
          this.setState({ backupProducts: res.data })
        )
      );
  }
  addToCart = (e, selected) => {
    var products = [...this.state.products];
    var selectedProducts = [...this.state.selectedProducts];
    if (!selected) {
      products = products.map(product => {
        if (product.id === e.id) {
          product.selected = true;
        }
        return product;
      });

      selectedProducts.push(e);
    } else {
      products = products.map(product => {
        if (product.id === e.id) {
          product.selected = false;
        }
        return product;
      });

      selectedProducts = selectedProducts.filter(
        product => product.id !== e.id
      );
    }
    this.setState({ products });
    this.setState({ selectedProducts });
  };

  searchByTypes = value => {
    this.setState({ products: this.state.backupProducts });
    if (value === "") {
      return;
    }
    let products = [...this.state.backupProducts];
    products = products.filter(product => product.type === value);
    this.setState({ products });
  };

  searchHandle = value => {
    this.setState({ products: this.state.backupProducts });
    let products = [...this.state.backupProducts];
    products = products.filter(product => product.name.includes(value));
    this.setState({ products });
  };
  deleteProduct = (id, selected) => {
    var products = [...this.state.products];
    if (!selected) {
      products = products.map(product => {
        if (product.id === id) {
          product.selected = true;
        }
        return product;
      });
    } else {
      products = products.map(product => {
        if (product.id === id) {
          product.selected = false;
        }
        return product;
      });
    }

    this.setState({ selectedProducts: this.state.selectedProducts });
    let selectedProducts = [...this.state.selectedProducts];
    selectedProducts = selectedProducts.filter(e => e.id !== id);
    this.setState({
      selectedProducts
    });
  };
  increaseQuantity = e => {
    var selectedProducts = [...this.state.selectedProducts];
    selectedProducts = selectedProducts.map(product => {
      if (e.id === product.id) {
        product.quantity++;
      }
      return product;
    });

    this.setState({ selectedProducts });
  };
  decreaseQuantity = e => {
    var selectedProducts = [...this.state.selectedProducts];
    selectedProducts = selectedProducts.map(product => {
      if (e.id === product.id) {
        product.quantity--;
      }
      return product;
    });

    this.setState({ selectedProducts });
  };

  addQuantityForInputField = (e, value) => {
    var selectedProducts = [...this.state.selectedProducts];
    selectedProducts = selectedProducts.map(product => {
      if (e.id === product.id) {
        if (product.quantity < value) product.quantity++;
        else if (product.quantity > value) product.quantity--;
      }
      return product;
    });

    this.setState({ selectedProducts });
  };
  render() {
    return (
      <div className="App">
        <SideBar
          products={this.state.products}
          searchByTypes={this.searchByTypes}
          searchHandle={this.searchHandle}
          addToCart={this.addToCart}
          selectedProducts={this.state.selectedProducts}
          deleteProduct={this.deleteProduct}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
        />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
