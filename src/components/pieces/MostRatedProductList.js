import React, { Component } from "react";

import { FlatList, Dimensions, View } from "react-native";
import { Spinner } from "../common";

const { width, height } = Dimensions.get("window");

import ProductCard from "./MostRatedProductCard";
import colors from "../../../assets/colors";

import fakus from "../../../Models/Data/Fake.json";

const images = [
  require("../../../assets/products/img_01.jpg"),
  require("../../../assets/products/img_02.jpg"),
  require("../../../assets/products/img_03.jpg"),
  require("../../../assets/products/img_04.jpg"),
  require("../../../assets/products/img_05.jpg"),
  require("../../../assets/products/img_06.jpg"),
  require("../../../assets/products/img_07.jpg"),
  require("../../../assets/products/img_08.jpg"),
  require("../../../assets/products/img_09.jpg"),
  require("../../../assets/products/img_10.jpg"),
  require("../../../assets/products/img_11.jpg")
];

export default class MostRatedProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource: []
    };
  }

  componentWillMount() {
    //Get some data
    setTimeout(() => {
      // console.log(response)
      this.setState({
        dataSource: fakus,
        isLoading: false
      });
    }, 800);
  }

  renderList() {
    if (this.state.isLoading) {
      return <Spinner />;
    } else {
      return (
        <FlatList
          horizontal
          data={this.state.dataSource}
          renderItem={({ item: rowData }) => {
            return (
              <ProductCard
                image={images[rowData.imageIndex]}
                title={rowData.title}
                price={rowData.price}
                autre={rowData.autre}
              />
            );
          }}
          keyExtractor={(item, index) => index}
        />
      );
    }
  }

  render() {
    const { container } = styles;
    return <View style={container}>{this.renderList()}</View>;
  }
}

const styles = {
  container: { flex: 1, backgroundColor: colors.whiteYellow }
};
