import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/ui/tabs.tsx";
import type {ReactNode} from "react";

interface TabItem {
  label: string;
  value: string;
  content: ReactNode;
}

interface TabsWrapperProps {
  defaultValue: string;
  items: TabItem[];
  className?: string;
}

const TabsWrapper = ({ defaultValue, items, className }: TabsWrapperProps) => {
  return (
    <Tabs defaultValue={defaultValue} className={className}>
      <TabsList>
        {items.map(({ label, value }) => (
          <TabsTrigger key={value} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>

      {items.map(({ value, content }) => (
        <TabsContent key={value} value={value}>
          {content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsWrapper;
