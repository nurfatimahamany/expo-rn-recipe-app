import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ScanRecipesScreen = () => {
    return (
        <View style = {styles.screen}>
            <Text>Scan Recipes Screen</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ScanRecipesScreen;