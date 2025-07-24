import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Button} from "@/shared/ui/button.tsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/shared/ui/form.tsx";
import {Input} from "@/shared/ui/input.tsx";
import {useSubmitHabitForm} from "@/features/habits/hooks/useSubmitHabitForm.ts";
import type {Habit} from "@/features/habits/types.ts";
import {DialogClose, DialogFooter} from "@/shared/ui/dialog.tsx";
import {MAX_DESCRIPTION_LENGTH, MAX_NAME_LENGTH, MIN_NAME_LENGTH,} from "@/features/habits/constants.ts";

const schema = z.object({
  name: z
    .string()
    .min(MIN_NAME_LENGTH, { message: "Name must be at least 3 characters." })
    .max(MAX_NAME_LENGTH, { message: "Name must be at most 24 characters." }),
  description: z
    .string()
    .max(MAX_DESCRIPTION_LENGTH, {
      message: "Description must be at most 160 characters.",
    }),
});

type HabitFormSchema = z.infer<typeof schema>;

interface HabitFormFieldsProps {
  type: "edit" | "createNew";
  habit?: Habit;
  onClose?: () => void;
}

const HabitForm = ({
  type,
  habit,
  onClose = () => {},
}: HabitFormFieldsProps) => {
  const form = useForm<HabitFormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: habit?.name ?? "",
      description: habit?.description ?? "",
    },
  });

  const { handleSubmit } = useSubmitHabitForm(type, onClose, habit?.id);

  const onSubmit = (data: HabitFormSchema) => {
    handleSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">
            {" "}
            {type === "edit" ? "Update Habit" : "Create Habit"}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default HabitForm;
