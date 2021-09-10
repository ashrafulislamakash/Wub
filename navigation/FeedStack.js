import React from 'react'
import { View, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen'
import AddPostScreen from '../screens/AddPostScreen'



import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Stack = createStackNavigator();


const FeedStack = ({ navigation }) => {

    const getTabBarVisibility = (route) => {
        const routeName = route.state
            ? route.state.routes[route.state.index].name
            : '';

        if (routeName === 'AddPost') {
            return false;
        }
        return true;
    };


    return (
        <Stack.Navigator>
            <Stack.Screen
                name="WUB"
                component={HomeScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#2e64e5',
                        fontFamily: 'Lato-Bold',
                        fontSize: 18,
                    },
                    headerStyle: {
                        backgroundColor: '#E3EDF7',
                        elevation: 0,
                    },

                    headerLeft: () => (
                        <View style={styles.header}>
                            <FontAwesome5.Button
                                name="bars"
                                size={22}
                                backgroundColor="#E3EDF7"
                                color="#6E8AA6"
                                onPress={() => navigation.openDrawer()}
                            />
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ marginRight: 10 }}>
                            <FontAwesome5.Button
                                name="comment"
                                size={22}
                                backgroundColor="#E3EDF7"
                                color="#6E8AA6"
                                onPress={() => navigation.navigate('AddPostScreen')}
                            />
                        </View>
                    ),
                }}
            />


            <Stack.Screen
                name="AddPost"
                component={AddPostScreen}
                options={({ route }) => ({

                    tabBarVisible: getTabBarVisibility(route),

                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#2e64e515',
                        shadowColor: '#2e64e515',
                        elevation: 0,
                    },
                    headerBackTitleVisible: false,
                    headerBackImage: () => (
                        <View style={{ marginLeft: 15 }}>
                            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
                        </View>
                    ),
                })}
            />
            {/* <Stack.Screen
                name="HomeProfile"
                component={ProfileStack}
                options={{
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#fff',
                        shadowColor: '#fff',
                        elevation: 0,
                    },
                    headerBackTitleVisible: false,
                    headerBackImage: () => (
                        <View style={{ marginLeft: 15 }}>
                            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
                        </View>
                    ),
                }}
            /> */}
        </Stack.Navigator>
    )
}

export default FeedStack

const styles = StyleSheet.create({
    header: {
        marginRight: 10,
        shadowColor: "#6F8CB0",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.41,
        shadowRadius: 20,

        elevation: 5,
    }
});