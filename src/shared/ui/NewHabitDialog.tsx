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

          <Tabs defaultValue="account" className="w-full">
            <TabsList>
              <TabsTrigger value="account">Custom</TabsTrigger>
              <TabsTrigger value="password">Predefined</TabsTrigger>
            </TabsList>
            <TabsContent
              className="text-sm text-muted-foreground"
              value="account"
            >
              Create a custom habit here.
            </TabsContent>
            <TabsContent
              className="text-sm text-muted-foreground"
              value="password"
            >
              Choose one of the predefined habits here.
            </TabsContent>
          </Tabs>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
          </div>

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
