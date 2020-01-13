// tslint:disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModeluserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    email
    name
  }
}
`;
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModeluserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    email
    name
  }
}
`;
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModeluserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    email
    name
  }
}
`;
