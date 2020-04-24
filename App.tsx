import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "@use-expo/font";
import React from "react";
import { Provider } from "react-redux";

import { ProductsNavigator } from "./src/navigation/ShopNavigator";
import store from "./src/store";

export default function App() {
  const [isLoaded] = useFonts({
    "roboto-bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "roboto-light": require("./src/assets/fonts/Roboto-Light.ttf"),
    "roboto-medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ProductsNavigator />
      </NavigationContainer>
    </Provider>
  );
}
