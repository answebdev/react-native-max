import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

// Video: https://www.youtube.com/watch?v=VozPNrt-LfE
// Starting project: https://github.com/academind/react-native-practical-guide-code/blob/02-basics/extra-files/starting-project.zip
// Attachments & code snapshots: https://github.com/academind/react-native-practical-guide-code
// goal.png File: https://github.com/academind/react-native-practical-guide-code/blob/02-basics/extra-files/goal.png

// Stopped at 1:30:03

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your daily goal!' />
        <Button title='Add Goal' />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
});
