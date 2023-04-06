import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'

import {Text} from 'react-native'
export default function Button({onPress,text}){
  return(
    <TouchableOpacity style = {styles.button} onPress = {onPress}>
      <Text style = {styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    margin:10,
    width:320,
    backgroundColor :'tomato',
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    borderRadius:10,
  },
  text:{
    
    margin:5,
    fontSize:23,
    fontWeight:'bold',
    color:'white',
  }
})