import {Text, View, StyleSheet} from "react-native";

export default function Purchase() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenue sur l'écran Purchase !</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff4c4c',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 20,
    }
});