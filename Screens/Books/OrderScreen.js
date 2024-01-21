import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { useCart } from './CardContext';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../config/Books/colors';
import SPACING from '../../config/SPACING';

const OrderScreen = () => {
  const { state } = useCart();
  const { cartItems } = state;

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
    </View>
  );

  const handlePay = () => {
    // Add logic to handle payment
    // For now, you can display an alert
    alert('Payment successful!');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.screenName}>Order Summary</Text>
        </View>

        {/* Order Items */}
        <View style={styles.summaryContainer}>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.flatList}
          />
        </View>

        {/* Total Price */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: Rs.{getTotalPrice()}</Text>
        </View>

        {/* Pay Button */}
        <View style={styles.payButtonContainer}>
          <TouchableOpacity style={styles.payButton} onPress={handlePay}>
            <Text style={styles.payButtonText}>Pay Now</Text>
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
    paddingTop: 50,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: SPACING,
    borderBottomWidth: 1,
    borderColor: "#ced4da",
  },
  screenName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: SPACING, 
  },
  summaryContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING,
    borderBottomWidth: 1,
    borderColor: "#ced4da",
    paddingHorizontal: 20,
    backgroundColor: "#f8f9fa"
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    color: '#555',
  },
  flatList: {
    flexGrow: 0,
  },
  totalContainer: {
    padding: SPACING,
    borderWidth: 1,
    borderColor: "#ced4da",
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  payButtonContainer: {
    margin: SPACING,
  },
  payButton: {
    width: '100%',
    padding: SPACING * 2,
    backgroundColor: colors.black,
    alignItems: 'center',
    borderRadius: SPACING * 2,
  },
  payButtonText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default OrderScreen;
