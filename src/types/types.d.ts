export type Image = {
  height: number;
  url: string;
  width: number;
};

export type HeroImageData = Image;

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
  content: string;
  list?: {
    title?: string
    listItem:[string]
  }
};

export type Treatment = {
  order: number;
  image?: Image[];
  slug: string;
  title: string;
  shortContent?: string;
  content: string;
  list?: {
    title?: string;
    listItem: [string];
  };
};

export type PracticesPageData = {
  description: string
  subtitle: string;
  title: string;
  imageBanner: Image;
};
export type TreatmentsPageData = {
  description: string;
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
