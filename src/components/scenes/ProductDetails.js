import React, { Component } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";

import { connect } from "react-redux";
import { Rating } from "react-native-ratings";

import { Header, Button, OutlineButton } from "../common";
import colors from "../../../assets/colors";
const product = require("../../../assets/products/img_25.jpg");
const profile = require("../../../assets/profiles/pro_02.jpg");
const { width, height } = Dimensions.get("window");

import fakus from "../../../Models/Data/Fake.json";
import { images } from "../../../Models/Data/images";

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      productName: ""
    };
  }
  initProductInfo() {
    const productItem = fakus.find(item => {
      return item._id == this.props.itemId;
    });

    if (product == undefined) {
      // TODO: Invalid state the id not match we data;
      return;
    } else {
      this.setState({
        image: images[productItem.image],
        productName: productItem.title
      });
    }
  }
  componentWillMount() {
    this.initProductInfo();
  }
  onReturnPress() {
    console.log("return action");
    Actions.pop();
  }

  render() {
    const { headerTitle, headerTitlePrimary, headerTitleSecondary } = styles;
    const { image, productName } = this.state;
    return (
      <View
        style={{
          width,
          height
        }}
      >
        <Image
          source={image}
          style={{ width, height: height - 200, resizeMode: "cover" }}
        />
        <View
          style={{
            position: "absolute",
            justifyContent: "space-between",
            width,
            height
          }}
        >
          <Header
            primaryIcon="arrow-left"
            primaryAction={this.onReturnPress.bind(this)}
            secondaryIcon="search"
            thirdIcon="share-google"
            color={"#fff"}
            gradientColor={"#00000080"}
            gradientColorMiddle={"#00000050"}
            gradientColorEnd={"#00000000"}
            size={36}
          />
          <View
            style={{
              width: width - 30,
              height: 340,
              alignSelf: "center",
              position: "relative"
            }}
          >
            <View
              style={{
                marginTop: 20,
                width: width - 30,
                height: 300,
                shadowColor: "#000",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 1,
                elevation: 2,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: "#FFF"
              }}
            >
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 110,
                  fontSize: 18,
                  fontWeight: "bold",
                  color: colors.darkGunmetal
                }}
              >
                Dana Shultz
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 110,
                  color: colors.sapGreen
                }}
              >
                Professional & Master
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  marginLeft: 15,
                  fontSize: 18,
                  fontWeight: "bold",
                  color: colors.darkGunmetal
                }}
              >
                {productName}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 15,
                  alignItems: "center"
                }}
              >
                <Rating
                  onFinishRating={this.ratingCompleted}
                  style={{ paddingVertical: 10 }}
                  imageSize={20}
                />
                <Text
                  style={{
                    marginLeft: 20,
                    fontWeight: "bold",
                    color: colors.redOrange
                  }}
                >
                  180 j{"'"}aimes
                </Text>
              </View>
              <Text
                style={{
                  marginLeft: 15,
                  marginRight: 15,
                  color: colors.blackCoral
                }}
              >
                Callback method when the user finishes rating. Gives you the
                final rating value as a whole number (required),Callback method
                when the user finishes rating. Gives you the final rating value
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  marginLeft: 15,
                  marginRight: 15,
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <Button buttonHeight={35} buttonWidth={150}>
                  <Text>Commander</Text>
                </Button>
                <OutlineButton>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: colors.rybGreen
                    }}
                  >
                    Ajouter aux favorie
                  </Text>
                </OutlineButton>
              </View>
            </View>
            <View
              style={{
                width: 80,
                height: 80,

                marginLeft: 15,
                position: "absolute",
                elevation: 2,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                source={profile}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  borderWidth: 5,
                  borderColor: "#FFF",
                  borderRadius: 40,
                  resizeMode: "cover"
                }}
              />
            </View>
          </View>
        </View>
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
  }
});

const mapStateToProps = state => {
  return {
    itemId: state.routes.details
  };
};

export default connect(mapStateToProps)(ProductDetails);
