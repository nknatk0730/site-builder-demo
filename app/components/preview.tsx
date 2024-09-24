'use client'

import { Button } from "@/components/ui/button";
import { Data } from "@/types/data";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import { Components } from "./meta";
import { Section } from "./section";

export const Preview = () => {
  const [data] = useLocalStorageState<Data>('data', {
    defaultValue: {
      title: 'Create Next App',
      sections: [],
    }
  })

  return (
    <>
      <header className="mb-4">
        <Button asChild variant="outline">
          <Link href="/">Create Next App</Link>
        </Button>
      </header>

      <div className="space-y-20">
        {data.sections.map((section) => {
          const Component = Components[section.type];

          return (
            <Section key={section.id} id={section.id}>
              <Component {...section.data} />
            </Section>
          );
        })}
      </div>
    </>
  );
}