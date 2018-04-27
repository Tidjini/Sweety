import React, { Component } from "react";

import { ListView, Dimensions, View } from "react-native";
import { Spinner } from "../common";

const { width, height } = Dimensions.get("window");

import ProductCard from "./ProductCard";
import colors from "../../../assets/colors";

import fakus from "../../../Models/Data/Fake.json";
import { images } from "../../../Models/Data/images";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows([1, 2])
    };

    this.itemWidth = width / 2 - 20;
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    //Get some data
    setTimeout(() => {
      // console.log(response)
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(fakus),
        isLoading: false
      });
    }, 800);
  }

  renderRow(data) {
    //const url = data.external_urls.spotify;
    //console.log(image);
    return (
      <ProductCard
        image={images[data.image]}
        title={data.title}
        price={data.price}
        autre={data.autre}
      />
    );
  }

  renderList() {
    if (this.state.isLoading) {
      return <Spinner />;
    } else {
      return (
        <View style={{ flex: 1, backgroundColor: "#FCFCFC" }}>
          <ListView
            showsVerticalScrollIndicator={false}
            style={{
              alignSelf: "center"
            }}
            contentContainerStyle={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginBottom: 10
            }}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />
        </View>
      );
    }
  }

  render() {
    const { container } = styles;
    return <View style={container}>{this.renderList()}</View>;
  }
}

const styles = {
  container: { backgroundColor: colors.whiteYellow, margin: 10 }
};
