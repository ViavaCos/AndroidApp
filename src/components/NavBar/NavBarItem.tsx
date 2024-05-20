import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

interface NavBarItemProps {
  title: string;
  onPress?: () => void;
}

const NavBarItem: React.FC<NavBarItemProps> = props => {
  const {title, onPress} = props;

  return (
    <View style={styles.NavBarItemWrap}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  NavBarItemWrap: {
    flex: 1,
    padding: 2,
    backgroundColor: '#fff',
  },
});

export default NavBarItem;
