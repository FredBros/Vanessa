import { request, gql } from "graphql-request";
import type {
  HomePages,
  Practice,
  Treatment,
  Image,
  PracticesPageData,
  TreatmentsPageData,
  NavbarData,
  About,
  Rules,
  Contact,
  Footer,
} from "@/types/types.d.ts";
const graphqlAPI: string = import.meta.env.GRAPHCMS_ENDPOINT!;
type ResultHomePages = {
  homePages: HomePages;
};
type ResultPractices = {
  practices: Practice[]
};
type ResultTreatments = {
  treatments: Treatment[]
};

type ResultPracticesPageData = {
  practicesPages: [PracticesPageData];
};
type ResultTreatmentsPageData = {
  treatmentsPages: [TreatmentsPageData];
};
type ResultAbout={
  abouts: [About]
}
type ResultRules={
  legalNotices:[Rules]
}

type ResultContact = {
  contacts:[Contact]
}

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
        contentPresentation{
          html
          }
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
        treatmentsPresentation
        treatmentsSection {
          image {
            url
            width
            height
          }
          title
          subtitle
        }
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

        content {
          html
        }
        shortContent
        list {
          title
          listItem
        }
        banner {
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
  const result: ResultPractices = await request(graphqlAPI, query);
  return result.practices;
}


export const getTreatments = async () => {
  const query = gql`
    query GetTreatments {
      treatments(orderBy: order_ASC) {
        order
        banner {
          image {
            height
            width
            url
          }
          subtitle
          title
        }
        image {
          height
          url
          width
        }
        slug
        content {
          html
        }
        shortContent
        list {
          title
          listItem
        }
      }
    }
  `;
  const result: ResultTreatments = await request(graphqlAPI, query);
  return result.treatments;
};

export const getPracticesPageData = async () => {
  const query = gql`
    query GetPracticesPageData {
      practicesPages(orderBy: publishedAt_ASC, first: 1) {
        description {
          html
        }
        banner {
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
  const result: ResultPracticesPageData = await request(graphqlAPI, query);
  return result.practicesPages[0];
};
export const getTreatmentsPageData = async () => {
  const query = gql`
    query GetTreatmentsPageData {
      treatmentsPages(orderBy: publishedAt_ASC, first: 1) {
        description {
          html
        }
        banner {
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
  const result: ResultTreatmentsPageData = await request(graphqlAPI, query);
  return result.treatmentsPages[0];
};


export const getNavbarData = async () => {
  const query = gql`
    query GetNavbarData {
      practices(orderBy: order_ASC) {
        slug
        banner {
          title
        }
      }
      treatments(orderBy: order_ASC) {
        slug
        banner {
          title
        }
      }
      homePages(orderBy: publishedAt_ASC, last: 1) {
        treatmentsSection {
          title
        }
        practicesSection {
          title
        }
      }
    }
  `;
  const result: NavbarData = await request(graphqlAPI, query);

  return result;
};


export const getAboutData = async () => {
  const query = gql`
    query GetAbout {
      abouts(orderBy: publishedAt_ASC, first: 1) {
        banner {
          title
          subtitle
          image {
            height
            url
            width
          }
        }
        images {
          height
          url
          width
        }
        picture {
          url
          width
          height
        }
        presentation {
          html
        }
        subtitle
        shortPresentation
        list {
          title
          listItem
        }
        diverse {
          html
        }
      }
    }
  `;
const result: ResultAbout = await request(graphqlAPI, query);
return result.abouts[0];
}

export const getRulesData = async () => {
  const query = gql`
    query GetRules {
      legalNotices(orderBy: publishedAt_ASC, first: 1) {
        rules {
          html
        }
        contactDetails {
          html
        }
        hostDetails {
          html
        }
        banner {
          title
          subtitle
          image {
            height
            url
            width
          }
        }
      }
    }
  `;
const result: ResultRules = await request(graphqlAPI, query);
return result.legalNotices[0];
}

export const getContact = async () => {
  const query = gql`
    query GetContact {
      contacts(orderBy: publishedAt_ASC, first: 1) {
        addresses
        banner {
          subtitle
          title
          image {
            url
            width
            height
          }
        }
        email
        tel
        informations {
          html
        }
        list {
          title
          listItem
        }
      }
    }
  `;
  const result: ResultContact = await request(graphqlAPI, query);
  return result.contacts[0];
}

export const getFooter = async () => {
  const query = gql`
    query GetFooter {
      abouts(orderBy: publishedAt_ASC, last: 1) {
        shortPresentation
      }
      homePages(orderBy: publishedAt_ASC, last: 1) {
        treatmentsSection {
          title
        }
        practicesSection {
          title
        }
      }
    }
  `;
  const result: Footer = await request(graphqlAPI, query);
  return result
}