import React from "react";

import RecipeListScreen from "./RecipeListScreen";
import ScanRecipesScreen from "./ScanRecipeScreen";
import SavedRecipesScreen from "./SavedRecipesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='RecipeListScreen' component={RecipeListScreen} options={{
                title: 'Recipes',
                tabBarLabel: 'Recipes',
                tabBarIcon: ({ color, size, focused}) => (
                    <Ionicons
                        name={focused ? "home-sharp" : "home-outline"}
                        size={size}
                        color={color}
                    />
                ),
            }}/>
            <Tab.Screen name='ScanRecipeScreen' component={ScanRecipesScreen} options={{
                title: 'Scan',
                tabBarLabel: 'Scan',
                tabBarIcon: ({ color, size, focused}) => (
                    <Ionicons
                        name={focused ? "scan-sharp" : "scan-outline"}
                        size={size}
                        color={color}
                    />
                ),
            }}/>
            <Tab.Screen name='SavedRecipeScreen' component={SavedRecipesScreen} options={{
                title: 'Saved',
                tabBarLabel: 'Saved',
                tabBarIcon: ({ color, size, focused}) => (
                    <Ionicons
                        name={focused ? "bookmark-sharp" : "bookmark-outline"}
                        size={size}
                        color={color}
                    />
                ),
            }}/>
        </Tab.Navigator>
    );
};

export default MainScreen;