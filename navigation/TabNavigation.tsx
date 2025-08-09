import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../constants/colors";
import AllExpensesScreen from "../screens/AllExpensesScreen";
import RecentExpensesScreen from "../screens/RecentExpensesScreen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../types/navigation";
import IconButton from "../components/ui/IconButton";

type TabNavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamsList, "Tabs">;
};

export default function TabNavigation({ navigation }: TabNavigationProps) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
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
            onPress={() => {}}
          />
        ),
      }}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
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
        component={AllExpensesScreen}
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
