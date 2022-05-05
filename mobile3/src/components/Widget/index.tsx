import React, { useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { ChatTeardropDots } from 'phosphor-react-native'
import { S } from './styles'
import { theme } from '../../theme'
import BottomSheet from '@gorhom/bottom-sheet'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { feedbackTypes } from '../../utils/feedbackTypes'
import { Form } from '../Form'
import { Options } from '../Options'
import { Success } from '../Success'

export type FeedbackType = keyof typeof feedbackTypes

function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setfeedbackSent] = useState(false)

  function handleOpen() {
    bottomSheetRef.current?.expand()
  }

  function handleRestartFeedback() {
    setFeedbackType(null)
    setfeedbackSent(false)
  }
  function handleFeedbackSent() {
    setfeedbackSent(true)
  }
  return (
    <>
      <TouchableOpacity style={S.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={S.modal}
        handleIndicatorStyle={S.indicator}
      >
        {feedbackSent ? (
          <Success onSendAnotherFeedback={handleRestartFeedback} />
        ) : (
          <>
            {feedbackType ? (
              <Form
                onFeedbackCanceled={handleRestartFeedback}
                onFeedbackSent={handleFeedbackSent}
                feedbackType={feedbackType}
              />
            ) : (
              <Options onFeedbackTypeChanged={setFeedbackType} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  )
}

export default gestureHandlerRootHOC(Widget)
