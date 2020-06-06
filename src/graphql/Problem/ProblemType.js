import { gql } from "apollo-server";

export const problemType = gql`
  type Problem {
    id: ID
    name: String
    description: String
    date_creation: String
    date_close: String
    date_deadline: String
    status: String
    createdBy: User
    comment: Comment
    skill: [Skill]
  }

  type Comment {
    id: ID
    text: String
    date_creation: String
  }
`;