import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import type {ReactNode} from "react";

const NewHabitDialog = ({ children }: { children: ReactNode }) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create a new habit</DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="predefined" className="w-full">
            <TabsList>
              <TabsTrigger value="predefined">Predefined</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
            </TabsList>
            <TabsContent className="flex flex-col gap-4" value="custom">
              <p className="text-sm text-muted-foreground">
                Create a custom habit here.
              </p>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="name">* Name</Label>
                  <Input id="name" name="name" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" name="description" />
                </div>
              </div>
            </TabsContent>
            <TabsContent
              className="text-sm text-muted-foreground"
              value="predefined"
            >
              <p className="text-sm text-muted-foreground">
                Choose one of the predefined habits here.
              </p>
            </TabsContent>
          </Tabs>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default NewHabitDialog;
