import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import ManageExpense from "./components/Expenses/ManageExpense";
import TabNavigation from "./navigation/TabNavigation";

import { RootStackParamsList } from "./types/navigation";
import { headerStyle } from "./constants/globalStyles";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamsList>();

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={TabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{ ...headerStyle, presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
