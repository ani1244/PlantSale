import React from 'react';
import {GestureResponderEvent, TouchableOpacity, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  size?: number;
  color?: string;
  onPress?: (event?: GestureResponderEvent) => void;
  externalStyle?: ViewStyle;
}

const IconButton: React.FC<Props> = props => {
  const {
    name,
    size,
    color = '#fff',
    externalStyle = {},
    onPress = () => {},
  } = props;
  return (
    <TouchableOpacity style={[externalStyle]} onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
