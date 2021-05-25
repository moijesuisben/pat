import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/views/Home/HomeScreen";
import ContactScreen from "./src/views/Contact/ContactScreen";
import Logo from "./src/components/Logo/Logo";
import BackIcon from "./src/icon/back.svg";
import ContactProfileScreen from "./src/views/ContactProfile/ContactProfileScreen";
import ChooseContactScreen from "./src/views/ChooseContact/ChooseContactScreen";
import SelectMessageTypeScreen from "./src/views/SelectMessageType/SelectMessageTypeScreen";
import ThoughtScreen from "./src/views/Messages/Thought/ThoughtScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Title">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTransparent: true,
            headerTitle: () => <Logo />,
          }}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            headerTransparent: true,
            headerTitle: () => <Logo />,
            headerBackImage: () => <BackIcon height={32} width={32} />,
            headerBackTitle: " ",
          }}
        />
        <Stack.Screen
          name="ContactProfile"
          component={ContactProfileScreen}
          options={{
            headerTransparent: true,
            headerTitle: () => <Logo />,
            headerBackImage: () => <BackIcon height={32} width={32} />,
            headerBackTitle: " ",
          }}
        />
        <Stack.Screen
          name="ÉcrireUnMessage"
          component={ChooseContactScreen}
          options={{
            headerTransparent: true,
            headerTitle: () => <Logo />,
            headerBackImage: () => <BackIcon height={32} width={32} />,
            headerBackTitle: " ",
          }}
        />
        <Stack.Screen
          name="SelectMessageType"
          component={SelectMessageTypeScreen}
          options={{
            headerTransparent: true,
            headerTitle: () => <Logo />,
            headerBackImage: () => <BackIcon height={32} width={32} />,
            headerBackTitle: " ",
          }}
        />
        <Stack.Screen
          name="MessageThought"
          component={ThoughtScreen}
          options={{
            headerTransparent: true,
            headerTitle: () => <Logo />,
            headerBackImage: () => <BackIcon height={32} width={32} />,
            headerBackTitle: " ",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
