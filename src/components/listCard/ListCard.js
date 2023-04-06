import { StyleSheet } from 'react-native'
import {View,Text,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function ListCard({item,onPress}){
  
  return(
    <View style = {styles.container}>
      <Text style = {styles.text}>{item}</Text>
      <TouchableOpacity onPress={onPress}>
      <Icon name='close-circle' size={29} color  ='tomato'/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'center',
    padding:7,
    backgroundColor:'#faebd7',
    margin:2,
    width:320,
    borderRadius:5,
  },
  text:{
    flex:1,
    marginLeft:5,
    fontSize:20,
  }
})