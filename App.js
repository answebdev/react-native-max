import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

// Video: https://www.youtube.com/watch?v=VozPNrt-LfE
// Starting project: https://github.com/academind/react-native-practical-guide-code/blob/02-basics/extra-files/starting-project.zip
// Attachments & code snapshots: https://github.com/academind/react-native-practical-guide-code
// goal.png File: https://github.com/academind/react-native-practical-guide-code/blob/02-basics/extra-files/goal.png

// Stopped at 2:51:52

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
  }

  // Delete an item.
  // Receive the ID of the item that is to be deleted, i.e., pass the 'id' in as a function parameter.
  function deleteGoalHandler(id) {
    // Take the old state, but remove an item; then, return the updated state.
    setCourseGoals((currentCourseGoals) => {
      // Filter returns a new array, which is the old array minus all the items we filtered out.
      // 'Filter' itself takes a function, which has to return 'true' or 'false'.
      // If it returns 'true', an item is kept.
      // If it returns 'false', an item is removed.
      // We want to return 'false' is our goal has 'id'
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        // keyExtractor={(item) => item.id} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    // This means padding on left and right:
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
