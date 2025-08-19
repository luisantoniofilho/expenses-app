import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IconButton from "../components/ui/IconButton";
import { Colors } from "../constants/globalStyles";
import AllExpenses from "../screens/AllExpenses";
import RecentExpenses from "../screens/RecentExpenses";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: Colors.primary },
        tabBarActiveTintColor: Colors.secondary,

        // Add expense button
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="plus"
            size={24}
            color={tintColor ?? "white"}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hourglass" color={color} size={size} />
          ),
          title: "Recent",
          headerTitle: "Recent Expenses",
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" color={color} size={size} />
          ),
          title: "All expenses",
        }}
      />
    </Tab.Navigator>
  );
}
