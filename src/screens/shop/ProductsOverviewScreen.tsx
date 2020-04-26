import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";
import Product from "../../models/product";
import { ProductStackParamList } from "../../navigation/ShopNavigator";
import { RootState } from "../../store";
import { CartActionTypes } from "../../store/actions/types";
import { addToCart } from "../../store/actions/cart";
import Colors from "../../constants/Colors";

type ProductOverviewScreenNavigationProp = StackNavigationProp<
  ProductStackParamList,
  "Products Overview"
>;

type ProductOverviewScreenProps = {
  navigation: ProductOverviewScreenNavigationProp;
};

const ProductsOverviewScreen = (props: ProductOverviewScreenProps) => {
  const products = useSelector(
    (state: RootState) => state.productsState.products
  );

  const handleViewDetail = (product: Product) =>
    props.navigation.navigate("Product Detail", { product });

  const dispatch = useDispatch();

  const handleaddToCart = (product: Product) =>
    dispatch<CartActionTypes>(addToCart(product));

  return (
    <View>
      <FlatList
        data={products}
        renderItem={(itemData) => (
          <ProductItem
            product={itemData.item}
            onViewDetail={handleViewDetail}
            onAddToCart={handleaddToCart}
          >
            <Button
              color={Colors.primary}
              title="View Details"
              onPress={() => handleViewDetail(itemData.item)}
            />
            <Button
              color={Colors.primary}
              title="To Cart"
              onPress={() => handleaddToCart(itemData.item)}
            />
          </ProductItem>
        )}
      />
    </View>
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
