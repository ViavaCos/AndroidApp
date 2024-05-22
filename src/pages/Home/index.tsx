import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './HomePage';
import HomeDetail from './HomeDetail';

const Stack = createStackNavigator();

const HomeIndex = () => {
  return (
    //  路由跳转
    <Stack.Navigator initialRouteName="HomePage" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{title: '首页'}}
      />
      <Stack.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={{title: '详情'}}
      />
    </Stack.Navigator>
  );
};

export default HomeIndex;
