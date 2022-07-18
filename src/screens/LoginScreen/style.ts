import {StyleSheet} from 'react-native';

const loginScreenStyles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        paddingHorizontol: 30,
        justifyContent:'center',
      },
      card: {
       paddingHorizontal:24,
       borderRadius:35,
       paddingTop:35,
       paddingBottom:56,
       elevation:8,
       backgroundColor:'white',
      },
      heading:{
        marginBottom:20
      },
      subHeading:{
        marginBottom:30,
      },
      terms:{
        flexDirection:'row',
        paddingLeft:20,
        marginBottom:16,
      },
      termText:{
        paddingLeft:10,
        marginRight:30,
      },
      footer:{
        marginTop:25,
        textAlign:'center',

      }
})
export default loginScreenStyles