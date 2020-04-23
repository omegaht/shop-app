import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Product from "../../models/product";
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewScreen = () => {
  const products = useSelector(
    (state: RootState) => state.productsState.products
  );

  return (
    <View>
      <FlatList
        data={products}
        renderItem={(itemData) => <ProductItem product={itemData.item} />}
      />
    </View>
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
