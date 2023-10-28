import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        // To make an item pressable (e.g., press/tap a button to delete the item), you have to let React Native know.
        // And you let React Native know by wrapping the item inside the 'Pressable' component (which you need to import from React-Native).
        // Once you then wrap it in the Pressable component, the item then becomes pressable.
        // And now, whenever we press an item inside of <Pressable />, the'onPress' prop will trigger the function that we provide to it (e.g., 'onDeleteItem').

        // The function that deletes an item is in App.js. It needs the ID of the item to be deleted,
        // but it does not have access to it, since it is here in this component.
        // To help provide the 'id' to the delete function in App.js, we use 'bind' (see below) (this is just one way of solving this issue).
        // Be sure to also pass in an ID prop in App.js in the <GoalItem /> component, e.g. <GoalItem id={itemData.item.id} />

        // Call the built-in 'bind' method on thw function, which we get through on the 'onDeleteItem' prop.
        // 'bind' allows you to pre-configure a function for future execution.
        // The first value you pass to 'bind' sets the 'this' keyword in the to-be executed function.
        // Since we don't care about that here, we'll just set it to 'this'.
        // The second argument you pass to 'bind' will be the first parameter received by the to-be called function ('onDeleteItem').
        // In this case, it should be the ID of the goal item that should be deleted.
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white'
    }
});