import {type ReactNode, useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/shared/ui/dialog.tsx";

interface DialogWrapperProps {
  title: string;
  trigger: ReactNode;
  children: (onClose: () => void) => ReactNode;
}

const DialogWrapper = ({ trigger, title, children }: DialogWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {children(() => setIsOpen(false))}
      </DialogContent>
    </Dialog>
  );
};

export default DialogWrapper;
