import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
  container: {},
  heading: {
    marginBottom: 20,
  },

  subHeading: {
    marginBottom: 30,
  },
  card: {
    paddingHorizontal: 24,
    borderRadius: 35,
    paddingTop: 30,
    paddingBottom: 56,
    elevation: 8,
    backgroundColor: 'white',
  },
  terms: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginBottom: 16,
  },
  termsText: {
    paddingLeft: 10,
    marginRight: 30,
  },
  footer: {
    marginLeft: 25,
    alignItems: 'center',
  },
});
export default loginStyles;
