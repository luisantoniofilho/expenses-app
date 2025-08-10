import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import IconButton from "../components/ui/IconButton";
import AllExpensesScreen from "../screens/AllExpensesScreen";
import RecentExpensesScreen from "../screens/RecentExpensesScreen";
import { RootStackParamsList } from "../types/navigation";
import { headerStyle } from "../constants/globalStyles";

type TabNavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamsList, "Tabs">;
};

export default function TabNavigation({ navigation }: TabNavigationProps) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        ...headerStyle,

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
