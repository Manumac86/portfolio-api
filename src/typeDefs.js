import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        jobExperiences: [JobExperience!]!
    }

    type JobExperience {
        id: ID!
        jobName: String!
        companyName: String!
        dateFrom: String!
        dateTo: String!
        jobAccount: String!
        jobDescription: String!
    }

    type Mutation {
        createJobExperience(
            jobName: String!,
            companyName: String!,
            dateFrom: String!,
            dateTo: String!,
            jobAccount: String!,
            jobDescription: String!
        ): JobExperience!
    }
`