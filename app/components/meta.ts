import { SectionType } from "@/types/data";
import { Hero } from "./hero";
import { Features } from "./features";

export const Components: {
  [key in SectionType]: ({
    id,
  }: {
    id: string;
  }) => JSX.Element;
} = {
  hero: Hero,
  features: Features,
  cta: Hero,
  faq: Hero,
}