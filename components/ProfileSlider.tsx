import React from 'react'
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'
import RNModal from 'react-native-modal'
import Profile from '@/components/ui/Profile'

interface Props {
  visible: boolean
  onClose: () => void
}

const ProfileSlider: React.FC<Props> = ({ visible, onClose }) => (
    <RNModal
    isVisible={visible}
    onBackdropPress={onClose}
    animationIn="slideInRight"
    animationOut="slideOutRight"
    backdropOpacity={0.4}
    style={styles.modal}
  >
    <View style={styles.slider}>
      <Profile />
    </View>
  </RNModal>
)

const styles = StyleSheet.create({
  modal: { margin: 0, justifyContent: 'flex-start', alignItems: 'flex-end' },
  slider: {
    width: "100%",
    maxWidth: 200,
    height: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
})

export default ProfileSlider