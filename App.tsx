import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";

import ProductsOverviewScreen from "./src/screens/shop/ProductsOverviewScreen";
import store from "./src/store";
import { ProductsNavigator } from "./src/navigation/ShopNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ProductsNavigator />
      </NavigationContainer>
    </Provider>
  );
}
