import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
  modalVisible: boolean;
  onRequestClose?: () => void;
}

const ModalVarient = (props: Props) => {
  let { modalVisible, onRequestClose } = props;
  return (
  
      <Modal
        animationType="fade"
        backdropColor={'rgba(0, 0, 0, 0.5)'}
        // transparent={true}
        visible={modalVisible}
        onRequestClose={onRequestClose}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text >Hello World!</Text>
          </View>
        </View>

      </Modal>
  
  )
}

export default ModalVarient

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})