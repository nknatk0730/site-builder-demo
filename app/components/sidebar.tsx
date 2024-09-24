'use client';

import { Data, SectionType } from "@/types/data";
import useLocalStorageState from "use-local-storage-state";

export const Sidebar = () => {
  const [ data, setData ] = useLocalStorageState<Data>('data', {
    defaultValue: {
      title: 'create next app',
      sections: [],
    }
  })

  const addSection = (type: SectionType) => {
    const id = crypto.randomUUID();

    setData((prev) => {
      return {
        ...prev,
        sections: [...prev.sections, { id, type, data: {} }],
      };
    })
  }

  return (
    <div className="space-y-6">
      <div className="border rounded-md p-2 bg-muted relative">
        <h1 className="mb-4 font-semibold">Hero</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod sed
          odit libero voluptatum fugit tempora ad temporibus recusandae culpa
          tenetur, eligendi veniam ipsum illum iusto a perspiciatis provident,
          error esse!
        </p>
        <button className="absolute inset-0" onClick={() => addSection('hero')}>
          <span className="sr-only">choice</span>
        </button>
      </div>
      
      <div className="border rounded-md p-2 bg-muted relative">
        <h1 className="mb-4 font-semibold">Features</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod sed
          odit libero voluptatum fugit tempora ad temporibus recusandae culpa
          tenetur, eligendi veniam ipsum illum iusto a perspiciatis provident,
          error esse!
        </p>
        <button className="absolute inset-0" onClick={() => addSection('features')}>
          <span className="sr-only">choice</span>
        </button>
      </div>
    </div>
  );
}