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
import SvgIcon from './src/components/SvgIcon';
import homeIcon from './src/assets/icons/home_active.svg'
import mineIcon from './src/assets/icons/mine_active.svg'
import { TABS_NAME } from './src/enums';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator()

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /**
   * 图标渲染
   * @param tabName 页签名称
   * @returns SvgIcon
   */
  const iconRender = (tabName: string) => {
    if(tabName === TABS_NAME.HOME) {
      return <SvgIcon svgFile={homeIcon} />
    }

    if(tabName === TABS_NAME.MINE) {
      return <SvgIcon width={20} height={20} svgFile={mineIcon} />
    }

    return <SvgIcon svgFile={null} />
  }

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
                name={TABS_NAME.HOME}
                component={HomeScreen}
                options={{title: TABS_NAME.HOME, tabBarIcon: () => iconRender(TABS_NAME.HOME)}}
              />
              <Tabs.Screen
                name={TABS_NAME.MINE}
                component={MineScreen}
                options={{title: TABS_NAME.MINE, tabBarIcon: () => iconRender(TABS_NAME.MINE)}}
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
