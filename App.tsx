import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import ManageExpense from "./components/Expenses/ManageExpense";
import TabNavigation from "./navigation/TabNavigation";

import { Colors } from "./constants/globalStyles";
import { RootStackParamsList } from "./types/navigation";
import ExpensesContextProvider from "./context/expensesContext";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamsList>();

  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Tabs"
              component={TabNavigation}
              options={{
                headerStyle: { backgroundColor: Colors.primary },
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                headerStyle: { backgroundColor: Colors.primary },
                headerTintColor: "white",
                presentation: "modal",
                contentStyle: { backgroundColor: Colors.primary },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
