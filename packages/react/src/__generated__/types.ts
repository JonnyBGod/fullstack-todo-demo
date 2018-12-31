

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTodoList
// ====================================================

export interface CreateTodoList_createTodoList {
  __typename: "TodoList";
  id: string;
  title: string;
}

export interface CreateTodoList {
  createTodoList: CreateTodoList_createTodoList;
}

export interface CreateTodoListVariables {
  data: TodoListCreateInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTodoEntry
// ====================================================

export interface CreateTodoEntry_createTodoEntry {
  __typename: "TodoEntry";
  id: string;
  title: string;
  done: boolean;
}

export interface CreateTodoEntry {
  createTodoEntry: CreateTodoEntry_createTodoEntry;
}

export interface CreateTodoEntryVariables {
  data: TodoEntryCreateInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateTodoList
// ====================================================

export interface UpdateTodoList_updateTodoList {
  __typename: "TodoList";
  id: string;
  title: string;
}

export interface UpdateTodoList {
  updateTodoList: UpdateTodoList_updateTodoList | null;
}

export interface UpdateTodoListVariables {
  where: TodoListWhereUniqueInput;
  data: TodoListUpdateInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateTodoEntry
// ====================================================

export interface UpdateTodoEntry_updateTodoEntry {
  __typename: "TodoEntry";
  id: string;
  title: string;
  done: boolean;
}

export interface UpdateTodoEntry {
  updateTodoEntry: UpdateTodoEntry_updateTodoEntry | null;
}

export interface UpdateTodoEntryVariables {
  where: TodoEntryWhereUniqueInput;
  data: TodoEntryUpdateInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteTodoList
// ====================================================

export interface DeleteTodoList_deleteTodoList {
  __typename: "TodoList";
  id: string;
  title: string;
}

export interface DeleteTodoList {
  deleteTodoList: DeleteTodoList_deleteTodoList | null;
}

export interface DeleteTodoListVariables {
  where: TodoListWhereUniqueInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteTodoEntry
// ====================================================

export interface DeleteTodoEntry_deleteTodoEntry {
  __typename: "TodoEntry";
  id: string;
  title: string;
  done: boolean;
}

export interface DeleteTodoEntry {
  deleteTodoEntry: DeleteTodoEntry_deleteTodoEntry | null;
}

export interface DeleteTodoEntryVariables {
  where: TodoEntryWhereUniqueInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TodoLists
// ====================================================

export interface TodoLists_todoLists {
  __typename: "TodoList";
  id: string;
  title: string;
}

export interface TodoLists {
  todoLists: (TodoLists_todoLists | null)[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TodoList
// ====================================================

export interface TodoList_todoList_entries {
  __typename: "TodoEntry";
  id: string;
  title: string;
  done: boolean;
}

export interface TodoList_todoList {
  __typename: "TodoList";
  id: string;
  title: string;
  entries: TodoList_todoList_entries[] | null;
}

export interface TodoList {
  todoList: TodoList_todoList | null;
}

export interface TodoListVariables {
  where: TodoListWhereUniqueInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

// 
export interface TodoListCreateInput {
  title: string;
  entries?: TodoEntryCreateManyWithoutListInput | null;
}

// 
export interface TodoEntryCreateManyWithoutListInput {
  create?: TodoEntryCreateWithoutListInput[] | null;
  connect?: TodoEntryWhereUniqueInput[] | null;
}

// 
export interface TodoEntryCreateWithoutListInput {
  title: string;
  done?: boolean | null;
}

// 
export interface TodoEntryWhereUniqueInput {
  id?: string | null;
}

// 
export interface TodoEntryCreateInput {
  title: string;
  done?: boolean | null;
  list?: TodoListCreateOneWithoutEntriesInput | null;
}

// 
export interface TodoListCreateOneWithoutEntriesInput {
  create?: TodoListCreateWithoutEntriesInput | null;
  connect?: TodoListWhereUniqueInput | null;
}

// 
export interface TodoListCreateWithoutEntriesInput {
  title: string;
}

// 
export interface TodoListWhereUniqueInput {
  id?: string | null;
}

// 
export interface TodoListUpdateInput {
  title?: string | null;
  entries?: TodoEntryUpdateManyWithoutListInput | null;
}

// 
export interface TodoEntryUpdateManyWithoutListInput {
  create?: TodoEntryCreateWithoutListInput[] | null;
  delete?: TodoEntryWhereUniqueInput[] | null;
  connect?: TodoEntryWhereUniqueInput[] | null;
  disconnect?: TodoEntryWhereUniqueInput[] | null;
  update?: TodoEntryUpdateWithWhereUniqueWithoutListInput[] | null;
  upsert?: TodoEntryUpsertWithWhereUniqueWithoutListInput[] | null;
  deleteMany?: TodoEntryScalarWhereInput[] | null;
  updateMany?: TodoEntryUpdateManyWithWhereNestedInput[] | null;
}

// 
export interface TodoEntryUpdateWithWhereUniqueWithoutListInput {
  where: TodoEntryWhereUniqueInput;
  data: TodoEntryUpdateWithoutListDataInput;
}

// 
export interface TodoEntryUpdateWithoutListDataInput {
  title?: string | null;
  done?: boolean | null;
}

// 
export interface TodoEntryUpsertWithWhereUniqueWithoutListInput {
  where: TodoEntryWhereUniqueInput;
  update: TodoEntryUpdateWithoutListDataInput;
  create: TodoEntryCreateWithoutListInput;
}

// 
export interface TodoEntryScalarWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  title?: string | null;
  title_not?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  title_lt?: string | null;
  title_lte?: string | null;
  title_gt?: string | null;
  title_gte?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_starts_with?: string | null;
  title_not_starts_with?: string | null;
  title_ends_with?: string | null;
  title_not_ends_with?: string | null;
  done?: boolean | null;
  done_not?: boolean | null;
  AND?: TodoEntryScalarWhereInput[] | null;
  OR?: TodoEntryScalarWhereInput[] | null;
  NOT?: TodoEntryScalarWhereInput[] | null;
}

// 
export interface TodoEntryUpdateManyWithWhereNestedInput {
  where: TodoEntryScalarWhereInput;
  data: TodoEntryUpdateManyDataInput;
}

// 
export interface TodoEntryUpdateManyDataInput {
  title?: string | null;
  done?: boolean | null;
}

// 
export interface TodoEntryUpdateInput {
  title?: string | null;
  done?: boolean | null;
  list?: TodoListUpdateOneWithoutEntriesInput | null;
}

// 
export interface TodoListUpdateOneWithoutEntriesInput {
  create?: TodoListCreateWithoutEntriesInput | null;
  update?: TodoListUpdateWithoutEntriesDataInput | null;
  upsert?: TodoListUpsertWithoutEntriesInput | null;
  delete?: boolean | null;
  disconnect?: boolean | null;
  connect?: TodoListWhereUniqueInput | null;
}

// 
export interface TodoListUpdateWithoutEntriesDataInput {
  title?: string | null;
}

// 
export interface TodoListUpsertWithoutEntriesInput {
  update: TodoListUpdateWithoutEntriesDataInput;
  create: TodoListCreateWithoutEntriesInput;
}

//==============================================================
// END Enums and Input Objects
//==============================================================