'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Data } from "@/types/data"
import { Pen } from "lucide-react"
import { useForm } from "react-hook-form"
import useLocalStorageState from "use-local-storage-state"

export function SectionEditor({
  id
}: {
  id: string;
}) {
  const [, setData] = useLocalStorageState<Data>('data', {
    defaultValue: {
      title: 'Create Next App',
      sections: [],
    }
  });

  const form = useForm();

  const onSubmit = (data: any) => {
    setData((prev) => ({
      ...prev,
      sections: prev.sections.map((section) => {
        if (section.id === id) {
          return {
            ...section,
            data,
          };
        }
        return section;
      }),
    }));
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="size-6">
          <Pen size={18} />
          <span className="sr-only">Edit</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Hero Section</SheetTitle>
          <SheetDescription>section Edit</SheetDescription>
        </SheetHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                {...form.register("title")}
                id="title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="subText" className="text-right">
                Sub Text
              </Label>
              <Input
                {...form.register("subText")}
                id="subText"
                className="col-span-3"
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}