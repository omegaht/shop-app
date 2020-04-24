import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Product from "../../models/product";
import ProductItem from "../../components/shop/ProductItem";
import { StackNavigationProp } from "@react-navigation/stack";
import { ProductStackParamList } from "../../navigation/ShopNavigator";

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

  return (
    <View>
      <FlatList
        data={products}
        renderItem={(itemData) => (
          <ProductItem
            product={itemData.item}
            onViewDetail={handleViewDetail}
            onAddToCart={() => console.log("cart")}
          />
        )}
      />
    </View>
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
