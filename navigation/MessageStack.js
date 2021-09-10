import React from 'react'
import ChatScreen from '../screens/ChatScreen';
import MessagesScreen from '../screens/MessagesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MessageStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Messages" component={MessagesScreen} />
            <Stack.Screen
                name="Chat"
                component={ChatScreen}
                options={({ route }) => ({
                    title: route.params.userName,
                    headerBackTitleVisible: false,
                })}
            />
        </Stack.Navigator>
    )
}

export default MessageStack


