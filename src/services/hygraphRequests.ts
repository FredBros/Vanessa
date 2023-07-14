import { request, gql } from "graphql-request";
const graphqlAPI: string = import.meta.env.GRAPHCMS_ENDPOINT!;


export const getHomePageData = async () => {
    const query = gql`
      query getHomePageData {
        homePages(orderBy: publishedAt_ASC, last: 1) {
          hero {
            title
            heroImage {
              height
              url
              width
            }
          }
        }
      }
    `;
    const result = await request(graphqlAPI, query);
    return result;
}