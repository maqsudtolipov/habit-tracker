import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Button} from "@/shared/ui/button.tsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/shared/ui/form.tsx";
import {Input} from "@/shared/ui/input.tsx";
import {useSubmitHabitForm} from "@/features/habits/hooks/useSubmitHabitForm.ts";
import type {Habit} from "@/features/habits/types.ts";

const schema = z.object({
  name: z.string().min(3).max(24),
  description: z.string().max(160),
});

type HabitFormSchema = z.infer<typeof schema>;

interface HabitFormFieldsProps {
  type: "edit" | "createNew";
  habit?: Habit;
  onClose: () => void;
}

const HabitFormFields = ({ type, habit, onClose }: HabitFormFieldsProps) => {
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
        <Button type="submit" className="w-full">
          {type === "edit" ? "Update Habit" : "Create Habit"}
        </Button>
      </form>
    </Form>
  );
};

export default HabitFormFields;
