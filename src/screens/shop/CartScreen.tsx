import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "../../components/shop/CartItem";
import Card from "../../components/ui/Card";
import Colors from "../../constants/Colors";
import { ProductStackParamList } from "../../navigation/ShopNavigator";
import { RootState } from "../../store";
import { removeFromCart } from "../../store/actions/cart";
import { addOrder } from "../../store/actions/orders";

type CartOverviewScreenNavigationProp = StackNavigationProp<
  ProductStackParamList,
  "Cart Overview"
>;

type ProductOverviewScreenProps = {
  navigation: CartOverviewScreenNavigationProp;
};

const CartScreen = (props: ProductOverviewScreenProps) => {
  const cartTotalAmount = useSelector(
    ({ cartState }: RootState) => cartState.totalSum
  );

  const cartItems = useSelector(({ cartState }: RootState) => {
    const transformedCartItems = [];
    for (const key in cartState.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: cartState.items[key].productTitle,
        productPrice: cartState.items[key].productPrice,
        quantity: cartState.items[key].quantity,
        sum: cartState.items[key].sum,
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <Card style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{" "}
          <Text style={styles.amount}>
            ${Math.round(cartTotalAmount.toFixed(2) * 100) / 100}
          </Text>
        </Text>
        <Button
          color={Colors.accent}
          title="Order Now"
          disabled={cartItems.length === 0}
          onPress={() => dispatch(addOrder(cartItems, cartTotalAmount))}
        />
      </Card>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            deletable
            onRemove={() => dispatch(removeFromCart(itemData.item.productId))}
          />
        )}
      />
    </View>
  );
};

CartScreen.navigationOptions = {
  headerTitle: "Your Cart",
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
  },
  summaryText: {
    fontFamily: "roboto-bold",
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});

export default CartScreen;
