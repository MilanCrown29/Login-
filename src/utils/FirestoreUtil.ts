import {Cart, Product} from '../interface';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import { getCombinedArray, updateOrAdd } from './CommonUtils';
import { product } from '../constants/product';

const PRODUCT_COLLECTION = 'product';
const CUSTOMER_COLLECTION = 'customers';
const CART_COLLECTION = 'cart';

export async function getProducts(ids?: number[]): Promise<Product[]> {
  try {
    if (ids && ids.length > 0) {
      const products = await firestore()
        .collection(PRODUCT_COLLECTION)
        .where('id', 'in', ids)
        .get();
      return products.docs.map(doc => doc.data()) as Product[];
    } else {
      const products = await firestore().collection(PRODUCT_COLLECTION).get();
      return products.docs.map(doc => doc.data()) as Product[];
    }
  } catch (error) {
    console.log(error);
  }
  return [];
}

const getCart = async (user: FirebaseAuthTypes.User) => {
  const cartCollection = firestore()
    .collection(CUSTOMER_COLLECTION)
    .doc(user.uid)
    .collection(CART_COLLECTION);
  const cartsFir = await cartCollection.get();
  const cart = cartsFir.docs.map(doc => doc.data());
};

export const addToCart = async (
  user: FirebaseAuthTypes.User,
  productId: number,
) => {
  if (!user) {
    return;
  }
  const {cart,cartCollection} = await getCart(user);
  if (cart && cart.find(item => item.id === productId)) {
    const document = cartCollection.doc(productId.toString());

    await document.update({
      count: firestore.FieldValue.increment(1),
    });
  } else {
    cartCollection.doc(productId.toString()).set({
      id: productId,
      count: 1,
    });
  }
};

export const getCombinedCart= async (user:FirebaseAuthTypes.User)=>{
const {cart} = await getCart(user)
const productIds=cart.map((item)=>item.id)
const productArray =(await getProducts(productIds)) as Product[];
return getCombinedArray(cart,productArray)
}

export const subscribeToCartUpdate=(
  user:FirebaseAuthTypes.User,
  updateToCart:(
    change:FirebaseFirestoreTypes.DocumentChange<FirebaseFirestoreTypes.DocumentData>
  )=>void
  )=>{
    return firestore()
    .collection(CUSTOMER_COLLECTION)
    .doc(user.uid)
    .collection(CART_COLLECTION)
    .onSnapshot(snapshot=>{
      snapshot.docChanges().forEach(change=>{
     updateToCart(change)
      })
    })
}
export const getUpdateCart=(old:Cart[],
  change:FirebaseFirestoreTypes.DocumentChange<FirebaseFirestoreTypes.DocumentData>,
  product:Product[])=>{
    const data=change.doc?.data() as Cart;
    const newArray =getCombinedArray([data],product)
    return updateOrAdd(old,newArray[0])

}