import {
    Modal,
    ModalBackdrop,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@/components/ui/modal";
import { Heading } from "@/components/ui/text";
import StyledButton from "./StyledButton";

interface StyledModalProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    closeOnOverlayClick: boolean;
    size: "xs" | "sm" | "md" | "lg" | "full";
    handelSubmit: () => void;
    handelCancel: () => void;
    submitButtonText?: string;
    cancelButtonText?: string;
};

export default function StyledModal({
    title,
    children,
    isOpen,
    closeOnOverlayClick = true,
    size = "md",
    handelSubmit,
    handelCancel,
    submitButtonText = "Submit",
    cancelButtonText = "Close",
}: StyledModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={() => {
                handelCancel();
            }}
            closeOnOverlayClick={closeOnOverlayClick}
            size={size}
        >
            <ModalBackdrop />
            <ModalContent>
                <ModalHeader>
                    <Heading size="md">{title}</Heading>
                </ModalHeader>
                {children}
                <ModalFooter>
                    <StyledButton
                        variant="outline"
                        action="secondary"
                        onPress={handelCancel}
                        buttonText={cancelButtonText}
                    />
                    <StyledButton
                        onPress={handelSubmit}
                        buttonText={submitButtonText}
                    />
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
