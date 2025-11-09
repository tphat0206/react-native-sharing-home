import {
    Checkbox,
    CheckboxIcon,
    CheckboxIndicator,
    CheckboxLabel,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";

interface StyledCheckBoxProps {
    isChecked: boolean;
    label: string;
    onChange: () => void;
}
export default function StyledCheckBox({
    isChecked,
    label,
    onChange,
}: StyledCheckBoxProps) {
    return (
        <Checkbox
            isChecked={isChecked}
            onChange={onChange}
            size="md"
            value={label}
        >
            <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>{label}</CheckboxLabel>
        </Checkbox>
    );
}
