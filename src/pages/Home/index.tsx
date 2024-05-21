import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import Card from '../../../src/components/Card';

const Home = (props: any) => {
  const handlePress = () => {
    props.navigation.navigate('Mine', {mockData: 'mock~~'});
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

export default Home