import React from "react";
import { Scene, Stack, Actions, Router } from "react-native-router-flux";

import Wellcome from "./components/scenes/Wellcome";
import Login from "./components/scenes/Login";
import Main from "./components/scenes/Main";
import ProductDetails from "./components/scenes/ProductDetails";
import ProductList from "./components/scenes/ProductList";

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="wellcomeStack" hideNavBar>
          <Scene key="wellcome" component={Wellcome} hideNavBar />
        </Scene>
        <Scene key="loginStack" hideNavBar>
          <Scene key="login" component={Login} hideNavBar />
        </Scene>
        <Scene key="mainStack" hideNavBar>
          <Scene key="main" component={Main} hideNavBar />
          <Scene key="productList" component={ProductList} hideNavBar />
          <Scene key="productDetails" component={ProductDetails} hideNavBar />
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
