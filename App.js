import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

// Video: https://www.youtube.com/watch?v=VozPNrt-LfE
// Starting project: https://github.com/academind/react-native-practical-guide-code/blob/02-basics/extra-files/starting-project.zip
// Attachments & code snapshots: https://github.com/academind/react-native-practical-guide-code
// goal.png File: https://github.com/academind/react-native-practical-guide-code/blob/02-basics/extra-files/goal.png

// Stopped at 2:51:52

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    // To close the modal after adding a goal
    // you can either do 'setModalIsVisible(false);'
    // or do 'endAddGoalHandler();'.
    // Both will work.
    endAddGoalHandler();
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
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        {/* This button controls the modal visibility (see modal in GoalInput.js): */}
        <Button title='Add New Goal' color='#a065ec' onPress={startAddGoalHandler} />
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    // This means padding on left and right:
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5
  }
});
