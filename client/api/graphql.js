import { gql, ApolloServer, ApolloServer } from "apollo-server-micro"

const typeDefs = gql`
type Video {
  id: ID!
  title: String
  url: String
  author: User
}

type User {
  id: ID!
  name: String
  age: Int
}

input NewVideo {
  title: String
  url: String
  userId: String
  age: Int
}

type Query {
  videos: [Video]
}

type Mutation {
  createVideo(input: NewVideo!): Video
} 
`

const resolvers = {
    Query: {
        videos: (_parent, _args, _context) => {
            return
        }

    },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })
handler = apolloServer.createHandler({ path: "/graphql" })

export const config = {api: { bodyParser: false }}

export default handler