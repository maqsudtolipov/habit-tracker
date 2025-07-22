import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shared/ui/dialog.tsx";
import type {ReactNode} from "react";
import {Button} from "@/shared/ui/button.tsx";

interface ConfirmDialogProps {
  title?: string;
  description?: string;
  onConfirm: () => void;
  children: ReactNode;
}

const ConfirmDialog = ({
  title = "Are you sure?",
  description = "This action cannot be undone.",
  onConfirm,
  children,
}: ConfirmDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <p>{description}</p>
        <DialogFooter>
          <>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant="destructive" onClick={onConfirm}>
                Delete
              </Button>
            </DialogClose>
          </>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
