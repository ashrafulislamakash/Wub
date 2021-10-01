import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import { DrawerContent } from '../screens/DrawerContent';
import AppStack from './AppStack'
import ProfileStack from './ProfileStack'
import FeedStack from './FeedStack'
import TeacherPortal from '../screens/TeacherPortal'
import FindFriends from '../screens/FindFriends'
import TodoList from '../screens/TodoList'
import WebWub from '../screens/WebWub'
import StudentPortal from '../screens/StudentPortal'
import Booksell from '../screens/Booksell'



const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}

            options={({ navigation }) => ({
                title: '',
                headerStyle: {
                    backgroundColor: '#f9fafd',
                    shadowColor: '#f9fafd',
                    elevation: 0,
                },
                headerLeft: () => (
                    <View style={{ marginLeft: 10 }}>
                        <FontAwesome.Button
                            name="long-arrow-left"
                            size={25}
                            backgroundColor="#f9fafd"
                            color="#333"
                            onPress={() => navigation.navigate('Login')}
                        />
                    </View>
                ),
            })}

        />}>

            <Drawer.Screen name="AppStack" component={AppStack} />
            <Drawer.Screen name="TeacherPortal" component={TeacherPortal} />
            <Drawer.Screen name="FindFriends" component={FindFriends} />
            <Drawer.Screen name="TodoList" component={TodoList} />
            <Drawer.Screen name="StudentPortal" component={StudentPortal} />
            <Drawer.Screen name="WebWub" component={WebWub} />
            <Drawer.Screen name="ProfileStack" component={ProfileStack} />
            <Drawer.Screen name="FeedStack" component={FeedStack} />
            <Drawer.Screen name="Booksell" component={Booksell} />


        </Drawer.Navigator>
    )
}

export default DrawerNavigation

