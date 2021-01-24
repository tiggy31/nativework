import React from 'react'
import {View, Text, StylesSheet} from 'react-native'

const GoalItem = props => {
    return (
     <View style={styles.listItem} >
        <Text>{props.item.value}</Text>
     </View>
    )
}

const styles = StylesObject.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'pink',
    borderColor: 'black',
    borderWidth: 1
  }

});
export default GoalItem