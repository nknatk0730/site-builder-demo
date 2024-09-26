'use client';

import { Button } from "@/components/ui/button";
import { Data } from "@/types/data";
import { Trash } from "lucide-react";
import useLocalStorageState from "use-local-storage-state";
import { SectionEditor } from "./section-editor";

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
      sections: [],
    }
  });

  const onDelete = () => {
    setData((prev) => ({
      ...prev,
      sections: prev.sections.filter((section) => section.id !== id),
    }))
  }

  return (
    <div className="relative hover:bg-sky-500/20">
      {children}
      <div className="absolute flex gap-2 top-0 right-0">
        <Button
          size="icon"
          className="size-7"
          onClick={onDelete}
        >
          <Trash size={18} />
          <span className="sr-only">{data.title}</span>
        </Button>
        <SectionEditor id={id} />
      </div>
    </div>
  );
}