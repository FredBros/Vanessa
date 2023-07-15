import { HeroData } from './types.d';
export type Image = {
  height:number
          url:string
          width: number
}

export type HeroImageData= Image
    

export type HeroData = {
  title: string;
  subtitle: string;
  image: Image
};

export type HomePageData = {
  hero: HeroData;
  titlePresentation: string;
  contentPresentation: string;
  practicesSection: {
    image: Image;
    title: string;
    subtitle: string;
  };
  practicesPresentation:string;
};

export type HomePages = HomePageData[]

export type Practice = {
  order:number
  image:Image[]
  slug:string
  title:string
  shortContent:string
  content:string
};