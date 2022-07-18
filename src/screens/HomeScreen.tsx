import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {UseMounted} from '../hooks/UseMounted';
import {Product} from '../interface';
import Grid from '../molecules/Grid/Grid';
import FirebaseUtil from '../utils/FirebaseUtil';
import {getProducts} from '../utils/FirestoreUtil';
import {LoginContext} from '../utils/LoginProvider';
import LoadingScreen from './LoadingScreen';

export default function HomeScreen() {
  const [data, setData] = useState<Product[]>([]);
  const isMounted = UseMounted();

  useEffect(() => {
    async function init() {
      const products = await getProducts();
      isMounted && setData(products);
    }
    init();
  }, []);

  if (!data || data.length <= 0) {
    return <LoadingScreen />;
  } else
    return (
      <View>
        <Grid prodcuts={data}/>
      </View>
    );
}
