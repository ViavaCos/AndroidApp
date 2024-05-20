import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavBarItem from './NavBarItem.tsx';

interface MenuListItem {
  label: string;
  value: string;
}

const NavBar: React.FC = () => {
  const menuList: MenuListItem[] = [
    {label: '首页', value: 'home'},
    // {label: '发现', value: 'found'},
    {label: '我的', value: 'mine'},
  ];

  const handleNavBarPress = (item: MenuListItem) => {
    // alert(item.label);
  };

  return (
    <View style={styles.navBarWrap}>
      {menuList.map(i => (
        <NavBarItem
          key={i.value}
          title={i.label}
          onPress={() => handleNavBarPress(i)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navBarWrap: {
    backgroundColor: 'white',
    // height: '10%',
    maxHeight: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NavBar;
