import { Camera, Trash } from 'phosphor-react-native'
import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { theme } from '../../theme'
import { S } from './styles'

interface Props {
  screenshot: string | null
  onTakeShot: () => void
  onRemoveShot: () => void
}

export function ScreenshotButton({
  screenshot,
  onTakeShot,
  onRemoveShot
}: Props) {
  return (
    <TouchableOpacity
      style={S.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {screenshot ? (
        <View>
          <Image style={S.image} source={{ uri: screenshot }} />
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={S.removeIcon}
          />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_primary} weight="bold" />
      )}
    </TouchableOpacity>
  )
}
