import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Product from "../../models/product";

interface ProductItemProps {
  product: Product;
}

const ProductItem = (props: ProductItemProps) => {
  return (
    <View style={styles.container}>
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
          onPress={() => {
            console.log("wtf");
          }}
        />
        <Button
          title="To Cart"
          onPress={() => {
            console.log("wtf");
          }}
        />
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
