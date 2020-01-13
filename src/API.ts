/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  email: string,
  name?: string | null,
};

export type ModeluserConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModeluserConditionInput | null > | null,
  or?: Array< ModeluserConditionInput | null > | null,
  not?: ModeluserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserInput = {
  email?: string | null,
  name?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type ModeluserFilterInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModeluserFilterInput | null > | null,
  or?: Array< ModeluserFilterInput | null > | null,
  not?: ModeluserFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModeluserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "user",
    email: string,
    name: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModeluserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "user",
    email: string,
    name: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModeluserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "user",
    email: string,
    name: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "user",
    email: string,
    name: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModeluserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModeluserConnection",
    items:  Array< {
      __typename: "user",
      email: string,
      name: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "user",
    email: string,
    name: string | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "user",
    email: string,
    name: string | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "user",
    email: string,
    name: string | null,
  } | null,
};
