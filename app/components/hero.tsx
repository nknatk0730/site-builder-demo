import { Data } from "@/types/data";
import useLocalStorageState from "use-local-storage-state";

export const Hero = ({
  id
}: {
  id: string;
}) => {
  const [data] = useLocalStorageState<Data>('data', {
    defaultValue: {
      title: 'Create Next App',
      sections: [],
    }
  });

  const content = data.sections.find((section) => section.id === id);
  const contentData = content?.data;

  return (
    <div className="py-10 bg-muted">
      <h1 className="text-3xl font-bold">{contentData.title || "title"}</h1>
      <p className="text-muted-foreground">
        {contentData.subText || "sub text"}
      </p>
    </div>
  );
}