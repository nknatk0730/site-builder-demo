'use client';

import { Button } from "@/components/ui/button";
import { Data } from "@/types/data";
import { Trash } from "lucide-react";
import useLocalStorageState from "use-local-storage-state";

export const Section = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const [data, setData] = useLocalStorageState<Data>('data', {
    defaultValue: {
      title: 'Create Next App',
      section: [],
    }
  });

  const onDelete = () => {
    setData((prev) => ({
      sections: prev.sections.filter((section) => section.id !== id),
    }))
  }

  return (
    <div className="relative hover:bg-sky-500/20">
      {children}
      <Button size="icon" className="absolute size-7 top-0 right-0" onClick={onDelete}>
        <Trash size={18} />
        <span className="sr-only">delete section</span>
      </Button>
    </div>
  );
}