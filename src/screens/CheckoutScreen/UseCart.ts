import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import {useContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import { set } from 'react-native-reanimated';
import {UseMounted} from '../../hooks/UseMounted';
import {Cart, Product} from '../../interface';
import {getPrice} from '../../utils/CommonUtils';
import {getCombinedCart, getProducts, getUpdateCart, subscribeToCartUpdate} from '../../utils/FireStoreUtil';
import {LoginContext} from '../../utils/LoginProvider';

export default function UseCart() {
  let subscriber: () => void;
  const {user} = useContext(LoginContext);
  const [list, setList] = useState<Cart[]>([]);
  const [price, setPrice] = useState<number>();
  const [cartLoading, setCartLoading] = useState(true);
  const isMounted = UseMounted();

const updateToCart=async(
    change:FirebaseFirestoreTypes.DocumentChange<FirebaseFirestoreTypes.DocumentData>
)=>{
const Products=(await getProducts([change.doc.data().id])) as Product[];
setList((old)=>{
const  cart=getUpdateCart(old,change,Products);
setPrice(getPrice(cart))
return(cart)
})
}

  async function getCart() {
    if (!user) return;

    try {
      const cart = await getCombinedCart(user);
      isMounted && setList(cart);
      isMounted && setPrice(getPrice(cart));

      subscriber=subscribeToCartUpdate(user,updateToCart)

    } catch (e) {
      console.log(e);
      Alert.alert('Something went wrong');
    }

    useEffect(() => {
      getCart();

      return () => {
        subscriber && subscriber();
      };
    }, []);
  }
  return {list, setList, price, cartLoading};
}
