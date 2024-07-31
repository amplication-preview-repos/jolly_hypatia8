import { SortOrder } from "../../util/SortOrder";

export type RecipeOrderByInput = {
  calories?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
