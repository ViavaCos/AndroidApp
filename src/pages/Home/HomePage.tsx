import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import Card from '../../components/Card';

const HomePage = (props: any) => {
  const handlePress = () => {
    // alert(JSON.stringify(Object.keys(props.navigation || []).join(",")))
    if (!props.navigation) return;

    props.navigation.navigate('HomeDetail', {mockData: 'mock~~'});
  };

  const datas = [
    {
      id: 1,
      title: '桃花',
      imageSource: require('../../../src/assets/images/flower.png'),
    },
    {
      id: 2,
      title: '梨花',
      imageSource: require('../../../src/assets/images/flower2.png'),
    },
  ]

  return (
    <View style={styles.homePageWarp}>
      {
        datas.map(dataItem => (
          <Card key={dataItem.id} showHeader={false} customCardStyle={{width: '45%'}}>
            <View style={{alignSelf: 'center', padding: 6}}>
              <Text style={styles.cardImgTitle}>{ dataItem.title }</Text>
              <Image
                style={styles.cardImg}
                source={dataItem.imageSource}></Image>
              <TouchableOpacity style={styles.showMoreButton} onPress={handlePress}>
                <Text style={styles.showMoreText}>{`more >>`}</Text>
              </TouchableOpacity>
            </View>
          </Card>
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  homePageWarp: {
    padding: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  showMoreButton: {
    marginTop: 6,
    alignSelf: 'flex-end',
  },
  showMoreText: {
    color: 'skyblue',
  },
  cardImg: {
    width: 150,
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 12,
  },
  cardImgTitle: {
    textAlign: 'center',
    marginBottom: 6,
  },
});

export default HomePage;
