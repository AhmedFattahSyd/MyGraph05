// tslint:disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    email
    name
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModeluserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      email
      name
    }
    nextToken
  }
}
`;
