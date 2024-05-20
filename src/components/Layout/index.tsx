import React from "react";
import {
  StyleSheet,
  View,
} from 'react-native'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <View style={styles.layoutWrap}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  layoutWrap: {
    height: '90%',
    flex: 1,
    backgroundColor: 'skyblue',
    // padding: 12,
  }
})

export default Layout;