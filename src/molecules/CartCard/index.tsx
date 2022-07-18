import * as React from 'react';
import {View, Image, Text} from 'react-native';
import { Cart } from '../../interface';
import {baseStyles} from '../../styles/theme';
import cartCardStyles from './styles';

interface CartCardProps {
  item: Cart;
}
const CartCard = ({item}: CartCardProps) => {
  return (
    <View style={[cartCardStyles.card, baseStyles.cardShadow]}>
      <Image source={{uri: item.image}} style={cartCardStyles.image} />
      <View style={cartCardStyles.desc}>
        <Text style={[cartCardStyles.title, baseStyles.headerSm]}>
          Product:{item.title}
        </Text>
        <Text style={[baseStyles.subHeader, cartCardStyles.qty]}>
          QTY:{item.count}
        </Text>
        <Text>{item.price}</Text>
      </View>
    </View>
  );
};
export default CartCard;
