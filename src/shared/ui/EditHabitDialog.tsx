import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog.tsx";
import type {FormEvent, ReactNode} from "react";
import HabitFormFields from "@/shared/ui/HabitFormFields.tsx";

interface EditHabitDialogProps {
  open?: boolean;
  onOpenChange?: (id: boolean) => void;
  defaultNameValue?: string;
  defaultDescriptionValue?: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

const EditHabitDialog = ({
  open = false,
  onOpenChange = () => {},
  defaultNameValue = "",
  defaultDescriptionValue = "",
  handleSubmit,
  children,
}: EditHabitDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit habit</DialogTitle>
        </DialogHeader>

        <HabitFormFields
          defaultNameValue={defaultNameValue}
          defaultDescriptionValue={defaultDescriptionValue}
          handleSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditHabitDialog;
