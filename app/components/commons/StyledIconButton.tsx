import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";

interface StyledButtonProps {
    buttonText: string;
    onPress: () => void;
    buttonClassName?: string;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "outline";
    action?: "primary" | "secondary";
    textClassName?: string;
    icon?: any;
}
export default function StyledIconButton({
    buttonText,
    onPress,
    buttonClassName,
    size = "lg",
    variant = "solid",
    action = "primary",
    textClassName,
    icon,
}: StyledButtonProps) {
    return (
        <Button
            onPress={onPress}
            className={buttonClassName}
            size={size}
            variant={variant}
            action={action}
            
        >
            <ButtonIcon className={textClassName} as={icon} />
            <ButtonText className={textClassName}>{buttonText}</ButtonText>
        </Button>
    );
}
