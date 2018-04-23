import React, { Component } from "react";
import {
  Text,
  ScrollView,
  View,
  Dimensions,
  Image,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

import { Header } from "../common";
import colors from "../../../assets/colors";
import MostRatedProductList from "../pieces/MostRatedProductList";
import ProductList from "../pieces/ProductList";

const { width, height } = Dimensions.get("window");

export default class Main extends Component {
  render() {
    const {
      headerTitle,
      headerTitlePrimary,
      headerTitleSecondary,
      scrollStyle,
      scrollView,
      mostRated,
      viewAll,
      browseProducts
    } = styles;
    return (
      <View>
        <Header primaryIcon="navicon" secondaryIcon="search" thirdIcon="heart">
          <View style={headerTitle}>
            <Text style={headerTitlePrimary}>Sweety</Text>
            <Text style={headerTitleSecondary}>1589 GATEAUX</Text>
          </View>
        </Header>
        <ScrollView style={scrollStyle}>
          <View style={scrollView}>
            <Text style={mostRated}>Most Rated</Text>
            <Text style={viewAll}>View all</Text>
          </View>
          <MostRatedProductList />
          <Text style={browseProducts}>Browse All product</Text>
          <ProductList />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerTitle: { alignItems: "center" },
  headerTitlePrimary: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.darkGunmetal
  },
  headerTitleSecondary: {
    fontSize: 10,
    color: colors.darkGunmetal
  },
  scrollStyle: { backgroundColor: "#69B62805" },
  scrollView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  mostRated: {
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 16,
    paddingLeft: 16,
    color: colors.darkGunmetal
  },
  viewAll: {
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 16,
    paddingRight: 16,
    color: colors.sapGreen
  },
  browseProducts: {
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 16,
    paddingLeft: 16,
    color: colors.darkGunmetal
  }
});
