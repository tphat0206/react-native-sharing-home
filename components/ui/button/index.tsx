import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';
import { buttonStyle, buttonTextStyle } from './styles';

type IButtonProps = PressableProps &
  VariantProps<typeof buttonStyle> & {
    className?: string;
    children?: React.ReactNode;
  };

const Button = React.forwardRef<React.ComponentRef<typeof Pressable>, IButtonProps>(
  function Button({ className, variant, size, children, ...props }, ref) {
    return (
      <Pressable
        ref={ref}
        {...props}
        className={buttonStyle({ variant, size, class: className })}
      >
        {typeof children === 'string' ? (
          <ButtonText variant={variant} size={size}>{children}</ButtonText>
        ) : (
          children
        )}
      </Pressable>
    );
  }
);

type IButtonTextProps = {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof buttonTextStyle>;

const ButtonText = ({ children, variant, size, className }: IButtonTextProps) => {
  return (
    <Text className={buttonTextStyle({ variant, size, class: className })}>
      {children}
    </Text>
  );
};

Button.displayName = 'Button';
export { Button, ButtonText };

