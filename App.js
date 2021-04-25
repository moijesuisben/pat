import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/views/Home/HomeScreen";
import ContactScreen from "./src/views/Contact/ContactScreen";
import Logo from "./src/components/Logo/Logo";
// import FakeScreen from "./src/views/Fake/Fake";

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
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
