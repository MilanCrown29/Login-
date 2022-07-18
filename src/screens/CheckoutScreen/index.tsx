import * as React from 'react';
import {View, Text, FlatList} from 'react-native';
import Button from '../../atom/Button';
import CartCard from '../../molecules/CartCard';
import { baseStyles } from '../../styles/theme';
import LoadingScreen from '../LoadingScreen';
import checkoutStyles from './style';
import UseCart from './UseCart';

interface CheckoutScreenProps {}

const CheckoutScreen = (props: CheckoutScreenProps) => {
  const {list, setList, price, cartLoading} = UseCart();
  // const {openPaymentPage, cartDisabled} = UsePayment(setList);

  const ListFooter = () => {
    return (
      <View>
        <View style={baseStyles.line} />
        <View style={checkoutStyles.statement}>
          <Text style={baseStyles.headerMd}>Total</Text>
          <Text style={baseStyles.headerMd}>{price}</Text>
        </View>
        <View style={baseStyles.line} />
        <Button title="Check Out"/>
      </View>
    );
  };
  if (!cartLoading && list.length <= 0) {
    return (
      <View>
        <Text>Empty Cart</Text>
      </View>
    );
  } else if (cartLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <FlatList
        data={list}
        renderItem={CartCard}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{paddingBottom: 100}}
        ListFooterComponent={ListFooter}
        style={baseStyles.container}
      />
    );
  }
};

export default CheckoutScreen;