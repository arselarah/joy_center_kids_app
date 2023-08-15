import { GraphQLClient, gql} from 'graphql-request'

export const graphcms = new GraphQLClient("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clgbe8oss3c0g01ukfnyy63i6/master");

// export const graphcms = new GraphQLClient(process.env.REACT_APP_API);

const category = `
    id,
    name,
    slug,
    color { css }
`


const comment = `
    id,
    name,
    email,
    comment
`

const post = `
    id,
    title,
    slug,
    coverPhoto { url },
    content { html },
    description,
    createdAt,
    updatedAt
`

export const QUERY_SLUG_CATEGORIES = gql`
    {
        categories(){
            id,
            name,
            slug
        }
    }
`

export const QUERY_POSTS = gql `
    {
        posts(orderBy: updatedAt_DESC, first: 10){
            ${post}
            categories(){
                ${category}
            }
        }
    }
`

export const QUERY_POSTS_BY_CATEGORY = gql `
    query GetPostsByCategory($slug: String!) {
        posts(
            orderBy: updatedAt_DESC, 
              where: {categories_some: {slug: $slug}}
              ){
            ${post}
            categories(){
                ${category}
            }
        }
    }
`

export const QUERY_SEARCH_POSTS = gql `
    query GetSearchPosts($slug: String!) {
        posts(
            orderBy: updatedAt_DESC, 
              where: {_search: $slug}
              ){
            ${post}
            categories(){
                ${category}
            }
        }
    }
`

export const QUERY_ONE_POST = gql `
    query GetOnePost($slug: String!) {
        posts(where: {slug: $slug}){
            ${post}
            categories(){
                ${category}
            }
        }
    }
`



