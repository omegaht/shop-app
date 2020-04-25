import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { ProductStackParamList } from "../../navigation/ShopNavigator";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import Product from "../../models/product";
import { CartActionTypes } from "../../store/actions/types";
import { addToCart } from "../../store/actions/cart";

type ProductDetailScreenRouteProp = RouteProp<
  ProductStackParamList,
  "Product Detail"
>;

type ProductDetailScreenProps = {
  route: ProductDetailScreenRouteProp;
};

const ProductDetailScreen = ({ route }: ProductDetailScreenProps) => {
  const { product } = route.params;

  const dispatch = useDispatch();

  const handleaddToCart = (product: Product) =>
    dispatch<CartActionTypes>(addToCart(product));

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: product.imageUrl }} style={styles.image} />
        <Button onPress={() => handleaddToCart(product)} title="Add to cart" />
        <View>
          <Text style={styles.price}>Price $: {product.price}</Text>
          <Text style={styles.description}>
            Description: {product.description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 300,
  },
  price: {
    fontSize: 18,
    color: "#888",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
  },
});
