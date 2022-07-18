import {useState} from 'react'
import { Alert } from 'react-native'
import FirebaseUtil from '../utils/FirebaseUtil'


export function UseAccount(){
    const[email,setEmail] =useState('')
    const[password,setPassword]=useState('')
    const[loading,setLoading]=useState(false)

    const  signInorUp=async(signIn:boolean)=>{
        setLoading(true);
        try{
            if(signIn){
                await FirebaseUtil.signIn(email,password);
            }else{
                await FirebaseUtil.signUp(email,password);
            }

        }catch(e){
            Alert.alert('Something went wrong','Please try again');
        }
        setLoading(false)
    }
    return{signInorUp,email,password,setEmail,setPassword,loading}
}
