import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Product from "../../models/product";

interface ProductItemProps {
  product: Product;
  onViewDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductItem = (props: ProductItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.touchable}>
        <TouchableOpacity onPress={() => props.onViewDetail(props.product)}>
          <>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: props.product.imageUrl,
                }}
                style={styles.image}
              />
            </View>

            <View style={styles.details}>
              <Text style={styles.title}>Title: {props.product.title}</Text>
              <Text style={styles.price}>Price: {props.product.price}</Text>
            </View>

            <View style={styles.actions}>
              <Button
                title="View Details"
                onPress={() => props.onViewDetail(props.product)}
              />
              <Button
                title="To Cart"
                onPress={() => props.onAddToCart(props.product)}
              />
            </View>
          </>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    elevation: 5,
    flex: 1,
    height: 300,
    margin: 20,
    backgroundColor: "#fff",
  },
  touchable: {
    overflow: "hidden",
    borderRadius: 10,
  },
  imageContainer: {
    height: "60%",
    width: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontFamily: "roboto-bold",
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    padding: 10,
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
});
