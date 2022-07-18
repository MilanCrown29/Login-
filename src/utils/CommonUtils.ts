import {Cart, Product} from '../interface';

export const getCombinedArray = (cart: Cart[], products: Product[]) => {
  let combinedArray = [];
  for (let i = 0; i < cart.length; i++) {
    combinedArray.push({
      ...cart[i],
      ...products.find(item=>item.id===cart[i].id)
    });
    cart;
  }
  return combinedArray as Cart[];
};
export const getPrice=()=>{
    let amount=0;
    cart.forEach((item)=>{
        amount+=item.price*item.count
    })
    return amount;
}
export const updateOrAdd=(old:Cart[],item:Cart)=>{
    const i=old.findIndex(item=>item.id==item.id);
    if(i>-1){
        old[i]=item
    }else{
        old.push(item)
    }
    return[...old]

}
