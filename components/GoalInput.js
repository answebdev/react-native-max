import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        // By calling this function manually here,
        // we make sure that we forward 'enteredGoalText'.
        // And since this function is the 'addGoalHandler' in App.js,
        // that 'addGoalHandler' function in App.js will receive the 'enteredGoalText';
        // and that's because we are passing it manually here:
        props.onAddGoal(enteredGoalText);

        // Set to empty string to clear the input whenver we add a new goal
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your daily goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <Button title='Add Goal' onPress={addGoalHandler} />
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
});