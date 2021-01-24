import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput,View ,Button, scrollView, FlatList} from 'react-native';
import GoalItem from './Components/GoalItem'
export default function App() {
  
  const [enteredGoal, setEnteredGoal] = useState("")
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler =(enteredText)=> {
    setEnteredGoal(enteredText)
  }

  const addGoalHander = () => {
       console.log(enteredGoal)
       setCourseGoals([...courseGoals,{key: Math.random().toString(), value: enteredGoal}])
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
          <TextInput 
          placeholder= "Course Goal" 
          style={styles.textInput} 
          onChangeText = {goalInputHandler}
          value={enteredGoal}/>
          <Button title="ADD" onPress={addGoalHander}/>
      </View>
    <FlatList 
    data={courseGoals} 
    renderItem={itemData => <GoalItem title={itemData.item.value}/> }
   />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50, 
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width:'80%'
  }
});

