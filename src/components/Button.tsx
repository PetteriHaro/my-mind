import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'default' | 'cancel' | 'primary';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  loading,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.7}
      style={[
        styles.button,
        {
          backgroundColor:
            variant === 'cancel'
              ? '#ccc'
              : variant === 'primary'
              ? colors.primary600
              : colors.secondary500,
        },
        props.style,
      ]}>
      {loading ? (
        <ActivityIndicator color={colors.background00} size="small" />
      ) : (
        <Text style={styles.buttonText}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    flex: 1,
    maxHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  buttonText: {
    color: colors.background00,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
