import { Input, InputField } from "@/components/ui/input";
import { Text } from '@/components/ui/text';

interface StyledInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}

export default function StyledInput({label, placeholder, value, secureTextEntry, onChangeText}: StyledInputProps) {
  return (
    <>
    {label && <Text size="sm" className="text-gray-600 my-2">{label}</Text>}
    <Input variant="outline" className="mb-4 h-14">
      <InputField
      value={value} 
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      />
    </Input>
    </>
  );
}