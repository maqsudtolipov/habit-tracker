import {Input} from "@/shared/ui/input.tsx";
import {DialogClose, DialogFooter} from "@/shared/ui/dialog.tsx";
import {Button} from "@/shared/ui/button.tsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/shared/ui/form.tsx";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

interface HabitFormFieldsProps {
  defaultNameValue?: string;
  defaultDescriptionValue?: string;
  handleSubmit: ({
    name,
    description,
  }: {
    name: string;
    description: string;
  }) => void;
}

const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters.",
    })
    .max(24, {
      message: "Name must be max 24 characters.",
    }),
  description: z.string().max(160, {
    message: "Description must be max 160 characters.",
  }),
});

const HabitFormFields = ({
  defaultNameValue = "",
  defaultDescriptionValue = "",
  handleSubmit,
}: HabitFormFieldsProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: defaultNameValue,
      description: defaultDescriptionValue,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    handleSubmit(values);
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name *</FormLabel>
              <FormControl>
                <Input placeholder="Habit Name" {...field} />
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
                <Input placeholder="Optional Description" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default HabitFormFields;
