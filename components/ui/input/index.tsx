import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { inputStyle } from './styles';

type IInputProps = TextInputProps &
  VariantProps<typeof inputStyle> & {
    className?: string;
  };

const Input = React.forwardRef<React.ComponentRef<typeof TextInput>, IInputProps>(
  function Input({ className, variant, ...props }, ref) {
    return (
      <TextInput
        ref={ref}
        {...props}
        className={inputStyle({ variant, class: className })}
        placeholderTextColor="#9CA3AF"
      />
    );
  }
);

Input.displayName = 'Input';
export { Input };

