import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, icons, } from "../constants"

import HomeScreen from '../screens/HomeScreen';


import AddPostScreen from '../screens/AddPostScreen';
import WebWub from '../screens/WebWub';
import FeedStack from '../navigation/FeedStack'
import ProfileStack from '../navigation/ProfileStack';
import MessageStack from '../navigation/MessageStack'
import CustomButton from '../components/CustomButton'


const Tab = createBottomTabNavigator();


const AppStack = ({ children, navigation }) => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Home' || routeName === 'EditProfile' || routeName === 'Chat' || routeName === 'AddPost') {
      return false;
    }
    return true;
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          // left: 8,
          // right: 8,
          borderTopWidth: 0,
          backgroundColor: "#ffffff",
          // borderRadius: 15,
          height: 80,
          ...styles.shadow
        }

      }}>


      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),

          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: 'center' }}>
              <Image
                source={icons.Home}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary
                }}
              />

              <Text
                style={{ color: focused ? COLORS.primary : COLORS.secondary, fontSize: 12 }}

              >Home</Text>
            </View>
          )
        })
        }

      />
      <Tab.Screen
        name="WUB"
        component={WebWub}
        options={({ route }) => ({

          tabBarVisible: getTabBarVisibility(route),

          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: 'center' }}>
              <Image
                source={icons.logo}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary
                }}
              />

              <Text
                style={{ color: focused ? COLORS.primary : COLORS.secondary, fontSize: 12 }}

              >WUB</Text>
            </View>
          )

        })}
      />



      <Tab.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),

          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: 'center' }}>
              <Image
                source={icons.Add}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.white : COLORS.white
                }}
              />
            </View>
          ),

          tabBarButton: (props) => (
            <CustomButton {...props} />
          )

        })}
      />


      <Tab.Screen
        name="C"
        component={MessageStack}
        options={({ route }) => ({

          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: 'center' }}>
              <Image
                source={icons.search}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary
                }}
              />

              <Text
                style={{ color: focused ? COLORS.primary : COLORS.secondary, fontSize: 12 }}

              >Chat</Text>
            </View>
          )

        })}
      />


      <Tab.Screen
        name="Profile5"
        component={ProfileStack}
        options={({ route }) => ({

          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: 'center' }}>
              <Image
                source={icons.user}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary
                }}
              />

              <Text
                style={{ color: focused ? COLORS.primary : COLORS.secondary, fontSize: 12 }}
              > Profile </Text>
            </View>
          )

        })}
      />

    </Tab.Navigator>
  );
};

export default AppStack;


const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
})