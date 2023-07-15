export type HeroImageData= {
    width:number
    height: number
    url: string
}

export type HeroData = {
  title: string;
  subtitle: string;
  heroImage: {
    width: number;
    height: number;
    url: string;
  };
};

export type HomePageData = HeroData;