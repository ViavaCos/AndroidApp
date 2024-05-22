import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import Card from '../../components/Card';

const HomeDetail = (props: any) => {

  return (
    <View>
      <Card showHeader={false}>
        <View style={{alignSelf: 'center', padding: 14}}>
          <Text>HomeDetail</Text>
          <Image
            style={{width: 150, height: 200, resizeMode: 'stretch'}}
            source={require('../../../src/assets/images/flower.png')}></Image>
        </View>
      </Card>
    </View>
  );
};

export default HomeDetail
