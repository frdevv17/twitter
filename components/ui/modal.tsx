import { ReactElement } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    body?: ReactElement;
    footer?: ReactElement;
    step?: number;
    totalSteps?: number;
    isEditing?: boolean;
}

export default function Modal({
    body,
    footer,
    isOpen,
    onClose,
    step,
    totalSteps,
    isEditing,
}: ModalProps) {
    return (
        <Dialog  open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className={cn(
                    "bg-black p-1",
                    isEditing && "h-[80vh] overflow-x-hidden overflow-y-auto"
                )}
            >
                {/* <div className="flex items-center gap-6">
                    {step && totalSteps && (
                        <div className="text-xl font-bold">
                            Step {step} of {totalSteps}
                        </div>
                    )}
                </div> */}
                <div className="mt-4">{body}</div>
                {footer && <div>{footer}</div>}
            </DialogContent>
        </Dialog>
    );
}