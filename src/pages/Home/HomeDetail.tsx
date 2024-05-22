import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import Card from '../../components/Card';

const HomeDetail = (props: any) => {

  return (
    <View style={styles.HomeDetailWrap}>
      <Card showHeader={false}>
        <View style={{alignSelf: 'center', padding: 6}}>
          <Text>HomeDetail</Text>
          <Image
            style={{width: 150, height: 200, resizeMode: 'stretch'}}
            source={require('../../../src/assets/images/flower.png')}></Image>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  HomeDetailWrap: {
    padding: 12,
  },
})

export default HomeDetail
