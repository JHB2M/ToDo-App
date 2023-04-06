import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Button from "./src/components/button/Button";
import ListCard from "./src/components/listCard/ListCard";
export default function App() {
  const [text, setText] = useState("");
  const [list,setList] = useState([])
 
  function AddtoList(){
    if(text.length>0){
      
      list.push(text)
      setList(list)
     
      setText('')
    }
  }

  function deleteItem(index){
    const filtedList = list.filter((val)=>val!=list[index])
  setList(filtedList)
  }
  const renderData  =({item,index}) => <ListCard item  ={item} onPress ={() => deleteItem(index)}/>
  return (
    <View style={styles.container}>
      
      <View style={styles.body}>
        <Text style = {styles.title}>Add todo what you want ({text})</Text>
        <TextInput
          style={styles.input}
          placeholder="Add Todo"
          value={text}
          onChangeText={setText}
        />
        <Button text="Add to List" onPress={AddtoList} />
    
        <FlatList
        data = {list}
        renderItem = {renderData}
        />


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffe0",
  },
  title:{
    fontSize:19,
    color:'white',
  },
  body: {
    alignItems: "center",
    margin: 20,
  },
  input: {
    
    marginTop:10,
    fontSize: 18,
    borderRadius: 5,
    padding: 7,
    width: 320,
    backgroundColor: "#faebd7",
  },
});
