export type Image = {
  height: number;
  url: string;
  width: number;
};

export type Html = {
  html:string
}

export type Banner={
    subtitle?: string,
    title:string
    image?:Image
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
  contentPresentation: {
    html: string;
  }
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
  order?: number;
  image: Image[];
  slug: string;
  shortContent: string;
  content: Html;
  list?: List;
  banner:Banner
};

export type Treatment = {
  order: number;
  image?: Image[];
  slug: string;
  shortContent?: string;
  content?: Html;
  list?: List;
  banner : Banner
};

export type PracticesPageData = {
  description: Html
  banner: Banner
};
export type TreatmentsPageData = {
  description: Html;
  banner: Banner;
};

export type NavbarData = {
  practices: [
    {
      slug: string;
      banner: {
        title: string;
      };
    }
  ];
  treatments: [
    {
      slug: string;
      banner: {
        title: string;
      };
    }
  ];
  homePages: [
    {
      treatmentsSection: {
        title: string;
      };
      practicesSection: {
        title: string;
      };
    }
  ];
};

export type About = {
  images?: [Image];
  picture?: Image;
  presentation: Html;
  subtitle?: string;
  shortPresentation: string;
  list?: List
  diverse?:Html
  banner : Banner
};

export type Rules = {
  rules: Html;
  contactDetails: Html;
  hostDetails: Html;
  banner: Banner;
};

export type Contact = {
  addresses: string[];
  address: string;
  banner: Banner;
  email?: string;
  tel: string;
  informations?: Html;
  list?: List;
};

export type Footer = {
  abouts: [
    {
      shortPresentation: string;
    }
  ];
  homePages: [
    {
      treatmentsSection: {
        title: string;
      };
      practicesSection : {
        title: string;
      };
    }
  ];
};