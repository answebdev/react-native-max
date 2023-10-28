import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

// Video: https://www.youtube.com/watch?v=VozPNrt-LfE
// Starting project: https://github.com/academind/react-native-practical-guide-code/blob/02-basics/extra-files/starting-project.zip
// Attachments & code snapshots: https://github.com/academind/react-native-practical-guide-code
// goal.png File: https://github.com/academind/react-native-practical-guide-code/blob/02-basics/extra-files/goal.png

// Stopped at 2:20:40

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <GoalItem text={itemData.item.text} />
          );
        }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
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
