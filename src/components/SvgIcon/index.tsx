import React from 'react'
import {
  Text,
} from 'react-native'
import { SvgXml } from 'react-native-svg'

interface SvgIconProps {
  svgFile: any;
  width?: number|string;
  height?: number|string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ svgFile, width = 25, height = 25 }) => {
  if(!svgFile) return <Text>error</Text>

  return (<SvgXml width={width} height={height} xml={svgFile} />)
}

export default SvgIcon