import {StyleSheet} from 'react-native';

const productStyles = StyleSheet.create({
  image: {
    height: 460,
    resizeMode: 'cover',
  },

  backButton: {
    position: 'absolute',
    top: 40,
    left: 30,
    zIndex: 1,
  },

  rightButton: {
    position: 'absolute',
    right: 35,
    top: 38,
    zIndex: 8,
  },

  share: {
    marginBottom: 20,
  },

  title: {
    paddingVertical: 20,
  },

  description: {
    fontSize: 15,
    paddingBottom: 15,
  },

  price: {
    marginTop: 20,
    marginBottom: 30,
  },
});
export default productStyles