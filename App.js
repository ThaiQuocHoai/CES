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
import PersonalInfo from "./screen/PersonalInfo";
import SignupScreen from "./screen/SignupScreen";
import UpdateCharity from "./screen/UpdateCharity";
import ActivityDetail1 from "./screen/ActivityDetail1";
import StepProgress from "./component/StepProgress";
import DetailMainActivity1 from "./screen/DetailMainActivity1";
import DetailMainActivity2 from "./screen/DetailMainActivity2";
import CreateRoute from "./screen/CreateRoute";
import DetailMainActivity3 from "./screen/DetailMainActivity3";
import ActivityDetail2 from "./screen/ActivityDetail2";

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
          name="UpdateChariry"
          component={UpdateCharity}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
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
          options={{ headerShown: false, title: "Nh???t k?? chi???n d???ch" }}
        />
        <Stack.Screen
          name="Charity"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={CharityDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ActivityDetail"
          component={ActivityDetail}
          options={{ title: 'Chi ti???t ho???t ?????ng' }}
        />
        <Stack.Screen
          name="ActivityDetail2"
          component={ActivityDetail2}
          options={{ title: 'Chi ti???t ho???t ?????ng' }}
        />
        <Stack.Screen
          name="ActivityDetail1"
          component={ActivityDetail1}
          options={{ title: 'Chi ti???t ho???t ?????ng' }}
        />
        <Stack.Screen
          name="detailmain1"
          component={DetailMainActivity1}
          options={{ title: 'Danh s??ch ho???t ?????ng' }}
        />
        <Stack.Screen
          name="detailmain2"
          component={DetailMainActivity2}
          options={{ title: 'Danh s??ch ho???t ?????ng' }}
        />
        <Stack.Screen
          name="detailmain3"
          component={DetailMainActivity3}
          options={{ title: 'Danh s??ch ho???t ?????ng' }}
        />
        <Stack.Screen
          name="CreateActivity"
          component={CreateActivity}
          options={{ title: 'T???o chi???n d???ch' }}
        />
        <Stack.Screen
          name="CreateRoute"
          component={CreateRoute}
          options={{ title: 'T???o ho???t ?????ng c???a chi???n d???ch' }}
        />
        <Stack.Screen
          name="BrowseActivityDetail"
          component={BrowseActivityDetail}
          options={{ title: 'Chi ti???t ho???t ?????ng' }}
        />
        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BrowseActivity"
          component={BrowseActivity}
          options={{ title: 'Duy???t ho???t ?????ng c???a chi???n d???ch' }}
        />
        <Stack.Screen
          name="CreateSubActivity"
          component={CreateSubActivity}
          options={{ title: 'T???o ho???t ?????ng' }}
        />
        <Stack.Screen
          name="InfoActivity"
          component={InfoActivity}
          options={{ title: "Th??ng Tin" }}
        />
        <Stack.Screen
          name="Member"
          component={Member}
          options={{ title: "Th??nh Vi??n" }}

        // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
