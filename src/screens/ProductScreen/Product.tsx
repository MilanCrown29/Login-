import {RouteProp} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, Text, ScrollView, FlatList, Image, Alert} from 'react-native';
import Button from '../../atom/Button';
import {product} from '../../constants/product';
import {Product} from '../../interface';
import {baseStyles, colors} from '../../styles/theme';
import {addToCart} from '../../utils/FireStoreUtil';
import {LoginContext} from '../../utils/LoginProvider';
import productStyles from './style';

type ParamList = {
  detail: {
    product: Product;
  };
};
interface ProductScreenProps {
  route: RouteProp<ParamList, 'detail'>;
  navigation: any;
}
const ProductScreen = ({route, navigation}: ProductScreenProps) => {
  const {user} = useContext(LoginContext);
  const product = route.params.product;

  const handlePress = () => {
    try {
      addToCart(user, product.id);
    } catch (error) {
      Alert.alert('Something Went Wrong');
    }
  };

  return (
    <>
      <Button
        style={productStyles.backButton}
        size={40}
        iconName="arrow-back-outline"
        background={colors.white}
        onPress={() => {}}
      />
      <ScrollView>
        <FlatList
          data={product}
          renderItem={({item}) => (
            <View>
              <View style={productStyles.rightButton}>
                <Button
                  style={productStyles.share}
                  size={50}
                  iconName="share-social-outline"
                  background={colors.yellow}
                />
                <Button
                  style={productStyles.share}
                  size={50}
                  iconName="heart-outline"
                  background={colors.yellow}
                />
              </View>
              <View style={[baseStyles.container]}>
                <Image
                  source={{uri: product.image}}
                  style={productStyles.image}
                />
                <Text style={[baseStyles.headerLg, productStyles.title]}>
                  {product.title}
                </Text>
                <Text style={[baseStyles.headerLg, productStyles.price]}>
                  {product.price}
                </Text>
                <Button title="ADD TO CART" onPress={handlePress} />
                <View style={baseStyles.line} />
                <Text style={[baseStyles.headerLg, productStyles.description]}>
                  {product.description}
                </Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </>
  );
};
export default ProductScreen;
