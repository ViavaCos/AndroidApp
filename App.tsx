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
} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Card from './src/components/Card';
import NavBar from './src/components/NavBar';
import Layout from './src/components/Layout';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const HomeScreen = () => {
  return (
    <View>
      <Card showHeader={false}>
        <View style={{ alignSelf: 'center', padding: 14, }}>
          <Image style={{ width: 150, height: 200, resizeMode: 'stretch' }} source={require('./src/assets/flower.png')}></Image>
        </View>
      </Card>

      <Card showHeader={false} customCardStyle={{ marginTop: 10 }}>
        <View style={{ alignSelf: 'center', padding: 14, marginTop: 10, overflow: 'hidden' }}>
          <Image style={{ width: 150, height: 200, resizeMode: 'stretch' }} source={require('./src/assets/flower2.png')}></Image>
        </View>
      </Card>
    </View>
  )
}

// const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


//             <NavigationContainer>
//               <Stack.Navigator initialRouteName='Home'>
//                 <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'i am home' }} />
//               </Stack.Navigator>
//             </NavigationContainer>

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{backgroundColor: 'pink', height: '100%', overflow: 'hidden'}}>
        <Layout>
          <HomeScreen />

        </Layout>
        <NavBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
