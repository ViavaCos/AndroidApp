import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import Card from '../../components/Card';

const HomePage = (props: any) => {
  const handlePress = () => {
    // alert(JSON.stringify(Object.keys(props.navigation || []).join(",")))
    if(!props.navigation) return;

    props.navigation.navigate('HomeDetail', {mockData: 'mock~~'});
  };

  return (
    <View>
      <Card showHeader={false}>
        <View style={{alignSelf: 'center', padding: 14}}>
          <Image
            style={{width: 150, height: 200, resizeMode: 'stretch'}}
            source={require('../../../src/assets/images/flower.png')}></Image>
        </View>
      </Card>

      <Card showHeader={false} customCardStyle={{marginTop: 10}}>
        <View
          style={{
            alignSelf: 'center',
            padding: 14,
            marginTop: 10,
            overflow: 'hidden',
          }}>
          <Image
            style={{width: 150, height: 200, resizeMode: 'stretch'}}
            source={require('../../../src/assets/images/flower2.png')}></Image>
        </View>
      </Card>

      <TouchableOpacity onPress={handlePress}>
        <Text>Mine</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage