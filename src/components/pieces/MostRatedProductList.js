import React, { Component } from "react";

import { FlatList, Dimensions, View } from "react-native";
import { Spinner } from "../common";

const { width, height } = Dimensions.get("window");

import MostRatedProductCard from "./MostRatedProductCard";
import colors from "../../../assets/colors";

import fakus from "../../../Models/Data/Fake.json";
import { images } from "../../../Models/Data/images";

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
          showsHorizontalScrollIndicator={false}
          data={this.state.dataSource}
          renderItem={({ item: rowData }) => {
            return (
              <MostRatedProductCard
                image={images[rowData.image]}
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
  container: { backgroundColor: colors.whiteYellow }
};
