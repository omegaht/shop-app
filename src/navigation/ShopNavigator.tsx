import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/ui/HeaderButton";
import Product from "../models/product";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import { PRODUCT_DETAIL, PRODUCTS_OVEVIEW, CART_OVERVIEW } from "./routes";
import CartScreen from "../screens/shop/CartScreen";

export type ProductStackParamList = {
  [PRODUCTS_OVEVIEW]: undefined;
  [PRODUCT_DETAIL]: { product: Product };
  [CART_OVERVIEW]: undefined;
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
        options={({ route, navigation }) => ({
          title: route.params.product.title,
          headerTitleStyle: {
            fontFamily: "roboto-bold",
          },
          headerStyle: {
            backgroundColor: "#b5a7da",
          },
          // eslint-disable-next-line react/display-name
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="cart"
                iconName="ios-cart"
                onPress={() => navigation.navigate(CART_OVERVIEW)}
              />
            </HeaderButtons>
          ),
        })}
      />
      <ProductsStackNavigator.Screen
        name={CART_OVERVIEW}
        component={CartScreen}
      />
    </ProductsStackNavigator.Navigator>
  );
};
