import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const DismissKeyboard = ({children}: Props) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default DismissKeyboard;
