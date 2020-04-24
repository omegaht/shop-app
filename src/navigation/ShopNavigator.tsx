import { createStackNavigator } from "@react-navigation/stack";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import React from "react";
import { PRODUCTS_OVEVIEW, PRODUCT_DETAIL } from "./routes";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import Product from "../models/product";

export type ProductStackParamList = {
  [PRODUCTS_OVEVIEW]: undefined;
  [PRODUCT_DETAIL]: { product: Product };
};

const ProductsStackNavigator = createStackNavigator<ProductStackParamList>();

export const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator>
      <ProductsStackNavigator.Screen
        name={PRODUCTS_OVEVIEW}
        component={ProductsOverviewScreen}
      />
      <ProductsStackNavigator.Screen
        name={PRODUCT_DETAIL}
        component={ProductDetailScreen}
        options={({ route }) => ({
          title: route.params.product.title,
          headerTitleStyle: {
            fontFamily: "roboto-bold",
          },
          headerStyle: {
            backgroundColor: "#b5a7da",
          },
        })}
      />
    </ProductsStackNavigator.Navigator>
  );
};
