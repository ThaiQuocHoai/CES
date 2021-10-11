import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import NavBar from "./component/NavBar";
import CharityDetail from "./screen/CharityDetail";
import CreateActivity from "./screen/CreateActivity";
import InfoActivity from "./screen/InfoActivity";
import Member from "./screen/Member";
import MainScreen3 from "./screen/MainScreen3";
import MainScreen from "./screen/MainScreen";
import ActivityDetail from "./screen/ActivityDetail";
import CreateSubActivity from "./screen/CreateSubActivity";
import BrowseActivity from "./screen/BrowseActivity";
import BrowseActivityDetail from "./screen/BrowseActivityDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen3"
          component={MainScreen3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={NavBar}
          options={{ headerShown: false, title: "Nhật kí chiến dịch" }}
        />
        <Stack.Screen
          name="Charity"
          component={MainScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={CharityDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ActivityDetail"
          component={ActivityDetail}
          options={{ title: 'Chi tiết hoạt động' }}
        />
        <Stack.Screen
          name="CreateActivity"
          component={CreateActivity}
          options={{ title: 'Tạo chiến dịch' }}
        />
        <Stack.Screen
          name="BrowseActivityDetail"
          component={BrowseActivityDetail}
          options={{ title: 'Chi tiết hoạt động chờ duyệt' }}
        />
        <Stack.Screen
          name="BrowseActivity"
          component={BrowseActivity}
          options={{ title: 'Duyệt hoạt động của chiến dịch' }}
        />
        <Stack.Screen
          name="CreateSubActivity"
          component={CreateSubActivity}
          options={{ title: 'Tạo hoạt động' }}
        />
        <Stack.Screen
          name="InfoActivity"
          component={InfoActivity}
          options={{ title: "Thông Tin" }}
        />
        <Stack.Screen
          name="Member"
          component={Member}
          options={{ title: "Thành Viên" }}

          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
