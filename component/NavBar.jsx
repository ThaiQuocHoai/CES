import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screen/MainScreen';
import MainScreen2 from '../screen/MainScreen2';
import UserInfor from '../screen/UserInfor';
import { AntDesign } from '@expo/vector-icons';
import MainScreen3 from '../screen/MainScreen3';
import Notify from '../screen/Notify';
import BrowseActivity from '../screen/BrowseActivity';


const Tab = createBottomTabNavigator();

const NavBar = (props) => {
    return (
        <Tab.Navigator screenOptions={({ route }) => {
            return {
                tabBarStyle: {
                    backgroundColor: '#fff',
                    height: 60,
                    paddingBottom: 5
                },
                tabBarLabelStyle: {
                    fontSize: 13
                },
                tabBarIcon: ({ focused }) => {

                    if (route.name === 'Nhật kí') {
                        return (
                            <AntDesign name="book" size={30} color="white" color={focused ? '#024f87' : '#999'} />
                        )
                    }
                    // else if (route.name === 'Tìm kiếm') {
                    //     return <AntDesign name="search1" size={30} color={focused ? '#024f87' : '#999'} />
                    // } 
                    else if (route.name === 'Thông tin') {
                        return <AntDesign name="user" size={30} color={focused ? '#024f87' : '#999'} />
                    } else if (route.name === 'Trang chủ') {
                        return <AntDesign name="home" size={30} color={focused ? '#024f87' : '#999'} />
                    } else if (route.name === 'Thông báo') {
                        return <AntDesign name="message1" size={30} color={focused ? '#024f87' : '#999'} />
                    }
                },
                tabBarActiveTintColor: '#024f87',
                tabBarInactiveTintColor: '#999',
            }
        }}
        >

            {/* <Tab.Screen name="Tìm kiếm" component={MainScreen2} options={{
                headerShown: false,
                // tabBarShowLabel: false
            }} /> */}
            <Tab.Screen name="Trang chủ" component={MainScreen3} options={{
                headerShown: false,
                // tabBarShowLabel: false
            }} />
            <Tab.Screen name="Nhật kí" component={MainScreen} options={{
                headerShown: true,
                // tabBarShowLabel: false,
                headerTitle: 'Nhật kí chiến dịch'
            }} />

            <Tab.Screen name="Thông báo" component={Notify} options={{
                headerShown: true,
                // tabBarShowLabel: false
            }} />
            <Tab.Screen name="Thông tin" component={UserInfor} options={{
                headerShown: false,
                // tabBarShowLabel: false
            }} />
        </Tab.Navigator >
    )
}

export default NavBar;

// const style = StyleSheet.create({
//     tabStyle : {
//         backgroundColor: '#e0ffb1'
//     }
// })