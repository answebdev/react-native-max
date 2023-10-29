import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

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
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your daily goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='#b180f0' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: '30%',
        // Margin left and right:
        marginHorizontal: 8
    }
});;