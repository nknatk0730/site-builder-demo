export type SectionType = 'hero' | 'features' | 'cta' | 'faq';

export type Data = {
  title: string;
  sections: {
    id: string;
    type: SectionType;
    data: any;
  }[]
}