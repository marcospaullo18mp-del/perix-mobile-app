import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importar telas
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MenuScreen from '../screens/MenuScreen';
import CreateReportScreen from '../screens/CreateReportScreen';
import ViewReportsScreen from '../screens/ViewReportsScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Tipos de navegação
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  CreateReport: undefined;
  ViewReports: undefined;
  Settings: undefined;
  Profile: undefined;
  Notifications: undefined;
  Help: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

// Componente de Tab Navigator
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: keyof typeof Ionicons.glyphMap;
        
        if (route.name === 'Menu') iconName = 'home';
        else if (route.name === 'CreateReport') iconName = 'add-circle';
        else if (route.name === 'ViewReports') iconName = 'folder';
        else if (route.name === 'Settings') iconName = 'settings';
        else iconName = 'home';
        
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#d4af37',
      tabBarInactiveTintColor: '#d4af37',
      tabBarStyle: {
        backgroundColor: '#000',
        borderTopColor: '#d4af37',
      },
      headerShown: false,
    })}
  >
    <Tab.Screen name="Menu" component={MenuScreen} />
    <Tab.Screen name="CreateReport" component={CreateReportScreen} />
    <Tab.Screen name="ViewReports" component={ViewReportsScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

// App Principal
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#d4af37',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="CreateReport" component={CreateReportScreen} />
        <Stack.Screen name="ViewReports" component={ViewReportsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Profile" component={SettingsScreen} />
        <Stack.Screen name="Notifications" component={SettingsScreen} />
        <Stack.Screen name="Help" component={SettingsScreen} />
        <Stack.Screen name="About" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}