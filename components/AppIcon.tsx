import React from 'react';
import { View } from 'react-native';

type AppIconProps = {
  size?: 'sm' | 'md' | 'lg';
};

export function AppIcon({ size = 'md' }: AppIconProps) {
  const sizes = {
    sm: { width: 80, height: 80 },
    md: { width: 96, height: 96 },
    lg: { width: 128, height: 128 },
  };

  const currentSize = sizes[size];

  // Try to use react-native-svg to render the SVG
  try {
    const Svg = require('react-native-svg').default;
    const { Defs, LinearGradient, Stop, Rect, Path, Circle } = require('react-native-svg');
    
    return (
      <Svg
        width={currentSize.width}
        height={currentSize.height}
        viewBox="0 0 160 160"
      >
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
            <Stop offset="100%" stopColor="#9333ea" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect width="160" height="160" rx="16" fill="url(#grad)" />
        <Path
          d="M80 45 L120 70 L120 115 L40 115 L40 70 Z M50 75 L50 105 L110 105 L110 75 Z M80 95 L80 115"
          stroke="white"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle cx="80" cy="75" r="12" fill="white" />
      </Svg>
    );
  } catch (error) {
    // Fallback to a simple colored box if react-native-svg is not available
    return (
      <View
        style={{
          width: currentSize.width,
          height: currentSize.height,
          backgroundColor: '#3b82f6',
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: currentSize.width * 0.6,
            height: currentSize.height * 0.6,
            borderWidth: 4,
            borderColor: 'white',
            borderRadius: 12,
          }}
        />
      </View>
    );
  }
}

