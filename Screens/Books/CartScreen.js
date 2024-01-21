import React from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { useCart } from './CardContext';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../config/Books/colors';
import SPACING from '../../config/SPACING';

const CartScreen = ({ navigation }) => {
  const { state, removeFromCart } = useCart();
  const { cartItems } = state;

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={() => handleRemoveItem(index)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  const handlePlaceOrder = () => {
    navigation.navigate('Order');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={styles.container}>
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.screenName}>Shopping Cart</Text>
        </View>

        {/* Cart Items */}
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />

        {/* Total Price */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: Rs.{getTotalPrice()}</Text>
        </View>

        {/* Place Order Button */}
        <View style={{ padding: SPACING * 2, backgroundColor: 'white' }}>
          <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
            <Text style={styles.placeOrderButtonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30

  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING,
    paddingHorizontal: SPACING * 2,
    marginTop: SPACING * 2,
    marginBottom: 20
  },
  screenName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: SPACING,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING,
    backgroundColor: '#fff',
    padding: SPACING,
    borderRadius: SPACING,
    elevation: 2,
    marginHorizontal: 20,
    borderColor: "#dee2e6",
    borderWidth: 1, paddingHorizontal: 20
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#55a630',
  },
  removeButtonText: {
    color: '#ff4d4d',
    fontWeight: 'bold',
    fontSize: 14,
  },
  totalContainer: {
    marginTop: SPACING,
    padding: SPACING,
    borderWidth: 1,
    borderColor: "#ced4da",
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'flex-end',
    paddingHorizontal: 20
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  placeOrderButton: {
    width: "100%",
    padding: SPACING * 2,
    backgroundColor: colors.black,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SPACING * 2,
  },
  placeOrderButtonText: {
    fontSize: SPACING * 2,
    color: colors.white,
    fontWeight: "700",
  },
});


export default CartScreen;
