export type Image = {
  height: number;
  url: string;
  width: number;
};

export type Html = {
  html:string
}

export type HeroImageData = Image;

export type List={
  title?: string
  listItem:[string]
}

export type HeroData = {
  title: string;
  subtitle: string;
  image: Image;
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
  practicesPresentation: string;
  treatmentsPresentation: string;
  treatmentsSection: {
    image: Image;
    title: string;
    subtitle: string;
  };
};

export type HomePages = HomePageData[];

export type Practice = {
  order: number;
  image: Image[];
  slug: string;
  title: string;
  shortContent: string;
  content: Html;
  list?: List;
};

export type Treatment = {
  order: number;
  image?: Image[];
  slug: string;
  title: string;
  shortContent?: string;
  content: Html;
  list?: List;
};

export type PracticesPageData = {
  description: Html
  subtitle: string;
  title: string;
  imageBanner: Image;  
};
export type TreatmentsPageData = {
  description: Html;
  subtitle: string;
  title: string;
  imageBanner: Image;
};

export type NavbarData = {
  practices: [
    {
      slug: string;
      title: string;
    }
  ];
  treatments: [
    {
      slug: string;
      title: string;
    }
  ];
  homePages:[
    {
      treatmentsSection: {
        title: string
      }
      practicesSection :{
        title: string
      }
    }
  ]
};

export type About = {
  images?: [Image];
  picture?: Image;
  bannerImage:Image
  presentation: Html;
  subtitle?: string;
  shortPresentation: string;
  list?: List
  diverse?:Html
};

export type Rules = {
  rules: Html;
  contactDetails: Html;
  hostDetails: Html;
  bannerImage: Image;
};