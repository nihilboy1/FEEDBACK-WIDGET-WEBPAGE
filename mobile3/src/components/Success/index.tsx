import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import successImg from '../../assets/success.png'
import { Copyrights } from '../Copyrights'

import { S } from './styles'

interface Props {
  onSendAnotherFeedback: () => void
}

export function Success({ onSendAnotherFeedback }: Props) {
  return (
    <View style={S.container}>
      <Image source={successImg} style={S.image} />
      <Text style={S.title}>Agradeçemos o Feedback</Text>
      <TouchableOpacity style={S.button} onPress={onSendAnotherFeedback}>
        <Text style={S.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>
      <Copyrights />
    </View>
  )
}
