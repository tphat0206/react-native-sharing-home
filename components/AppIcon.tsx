import React from "react";
import { View } from "react-native";
import { Image } from "@/components/ui/image";

interface AppIconProps {
    size?: "sm" | "md" | "lg";
};

export function AppIcon({ size = "md" }: AppIconProps) {
    return (
      <View>
        <Image
            size={size}
            source={require('../assets/images/home-icon.png')}
            alt="image"
        />
      </View>
    );
}
