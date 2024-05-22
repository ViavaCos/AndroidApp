import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './HomePage';
import HomeDetail from './HomeDetail';

const Stack = createStackNavigator();

const StackScreenOptions: any = {
  headerShown: true, // 是否显示页面头部
  // headerStyle: {
  //   backgroundColor: 'pink',
  // },
  headerShadowVisible: true, // 头部阴影
  headerTransparent: false, // 表头透明
  headerTitleAlign: 'center', // left | center
}

const HomeIndex = () => {
  return (
    //  路由跳转
    <Stack.Navigator initialRouteName="HomePage" screenOptions={StackScreenOptions}>
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
