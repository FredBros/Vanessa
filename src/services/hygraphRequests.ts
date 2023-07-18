import { request, gql } from "graphql-request";
import type {
  HomePages,
  Practice,
  Image,
  PracticesBanner,
  NavbarData,
} from "@/types/types.d.ts";
const graphqlAPI: string = import.meta.env.GRAPHCMS_ENDPOINT!;
type ResultHomePages = {
  homePages: HomePages;
};
type ResultPractices = {
  practices: Practice[]
};

type PracticiesBanner = {
  homePages: [{ practicesSection: PracticesBanner }];
};
// type ResultNavbarData = {
//   practices: NavbarData;
// };

export const getHomePageData = async () => {
  const query = gql`
    query getHomePageData {
      homePages(orderBy: publishedAt_ASC, last: 1) {
        hero {
          title
          subtitle
          image {
            height
            width
            url
          }
        }
        titlePresentation
        contentPresentation
        practicesSection {
          image {
            height
            url
            width
          }
          title
          subtitle
        }
        practicesPresentation
      }
    }
  `;
  const result: ResultHomePages = await request(graphqlAPI, query);
  return result.homePages[0];
};

export const getPractices = async () => {
  const query = gql`
    query GetPractices {
      practices(orderBy: order_ASC) {
        order
        image {
          height
          url
          width
        }
        slug
        title
        content
        shortContent
      }
    }
  `;
  const result: ResultPractices = await request(graphqlAPI, query);
  return result.practices;

};
export const getPracticesBanner = async () => {
  const query = gql`
    query GetPracticesBanner {
      homePages {
        practicesSection {
          subtitle
          title
          image {
            height
            url
            width
          }
        }
      }
    }
  `;
  const result: PracticiesBanner = await request(graphqlAPI, query);
  return result.homePages[0].practicesSection;
};


export const getNavbarData = async () => {
  const query = gql`
    query GetNavbarData {
      practices(orderBy: order_ASC) {
        slug
        title
      }
    }
  `;
  const result: NavbarData = await request(graphqlAPI, query);
  return result;
};


