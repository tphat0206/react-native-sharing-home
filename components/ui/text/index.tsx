import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { headingStyle, textStyle } from './styles';

type ITextProps = TextProps &
  VariantProps<typeof textStyle> & {
    className?: string;
  };

const Text = React.forwardRef<React.ComponentRef<typeof RNText>, ITextProps>(
  function Text({ className, size, weight, ...props }, ref) {
    return (
      <RNText
        ref={ref}
        {...props}
        className={textStyle({ size, weight, class: className })}
      />
    );
  }
);

type IHeadingProps = TextProps &
  VariantProps<typeof headingStyle> & {
    className?: string;
  };

const Heading = React.forwardRef<React.ComponentRef<typeof RNText>, IHeadingProps>(
  function Heading({ className, size, ...props }, ref) {
    return (
      <RNText
        ref={ref}
        {...props}
        className={headingStyle({ size, class: className })}
      />
    );
  }
);

Text.displayName = 'Text';
Heading.displayName = 'Heading';

export { Heading, Text };

