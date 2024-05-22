import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native'

interface CardProps {
  /**
   * 是否显示卡片头部，默认显示
   */
  showHeader?: boolean;
  /**
   * 卡片标题
   */
  title?: string | React.ReactNode;
  /**
   * 卡片内容
   */
  children?: React.ReactNode;
  customCardStyle?: ViewStyle;
}

const Card: React.FC<CardProps> = (props) => {
  const { showHeader = true, title, children, customCardStyle } = props;

  return (
    <View style={[styles.CardWarp, customCardStyle]}>
      {
        showHeader && (
          <View style={styles.CardHead}>
            <Text>{ title }</Text>
          </View>
        )
      }
      <View style={styles.CardContent}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  CardWarp:{
    borderRadius: 2,
    width: "50%",

    // Android阴影
    elevation: 1.5,

    // IOS阴影
    shadowColor: '#999', // 阴影颜色
    shadowOffset: { width:0, height:0 }, // 阴影的偏移量
    shadowOpacity: 1,
    shadowRadius: 1.5, // 阴影的模糊半径
  },
  CardHead: {
    padding: 2,
    borderBottomColor: '#d6d7d8',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  CardContent: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 2,
    backgroundColor: '#fff',
  }
})

export default Card
