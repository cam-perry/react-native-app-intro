import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export const DoneButton = ({
  styles, onDoneBtnClick, onNextBtnClick,
  rightTextColor, isDoneBtnShow,
  doneBtnLabel, nextBtnLabel,
}) => {
  return (
    <TouchableOpacity style={styles.full}
      onPress={ isDoneBtnShow ? onDoneBtnClick : onNextBtnClick}
    >
      <View style={[styles.btnContainer]}>
       <Text style={[styles.nextButtonText, { color: rightTextColor }]}>
         {isDoneBtnShow ? doneBtnLabel : nextBtnLabel}
       </Text>
    </View>
    </TouchableOpacity>
  )
}

export default DoneButton
