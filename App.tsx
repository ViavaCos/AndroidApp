/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import NavBar from './src/components/NavBar';
import Layout from './src/components/Layout';
import HomeScreen from './src/pages/Home';
import MineScreen from './src/pages/Mine';


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator()

const homeIcon = require('./src/assets/icons/home_active.svg')
const mineIcon = require('./src/assets/icons/mine.svg')

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{backgroundColor: 'pink', height: '100%', overflow: 'hidden'}}>
        <Layout>
          {/* 路由跳转 */}
          {/* <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{title: 'i am home'}}
              />
              <Stack.Screen
                name="Mine"
                component={MineScreen}
                options={{title: 'i am mine'}}
              />
            </Stack.Navigator>
          </NavigationContainer> */}

          {/* 底部导航页签切换 */}
          <NavigationContainer>
            <Tabs.Navigator screenOptions={{ headerShown: false }}>
              <Tabs.Screen
                name="Home"
                component={HomeScreen}
                options={{title: 'Home', tabBarIcon: () => <Image style={{ width: 30, height: 30 }} source={homeIcon}></Image>}}
              />
              <Tabs.Screen
                name="Mine"
                component={MineScreen}
                options={{title: 'Mine', tabBarIcon: () => <Text>口</Text>}}
              />
            </Tabs.Navigator>
          </NavigationContainer>
        </Layout>
        {/* <NavBar /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
