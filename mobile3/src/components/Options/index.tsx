import React from 'react'
import { View, Text } from 'react-native'
import { Copyrights } from '../Copyrights'
import { Option } from '../Option'
import { feedbackTypes } from '../../utils/feedbackTypes'
import { S } from './styles'
import { FeedbackType } from '../Widget'

interface Props {
  onFeedbackTypeChanged: (FeedbackType: FeedbackType) => void
}

export function Options({ onFeedbackTypeChanged }: Props) {
  return (
    <View style={S.container}>
      <Text style={S.title}>Deixe seu Feedback</Text>
      <View style={S.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
            key={key}
            title={value.title}
            image={value.image}
          />
        ))}
      </View>
      <Copyrights />
    </View>
  )
}
