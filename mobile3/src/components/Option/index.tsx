import React from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  Text
} from 'react-native'

import { S } from './styles'

interface Props extends TouchableOpacityProps {
  title: string
  image: ImageProps
}

export function Option({ title, image, ...rest }: Props) {
  return (
    <TouchableOpacity style={S.container} {...rest}>
      <Image source={image} style={S.image} />
      <Text style={S.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
