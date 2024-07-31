import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RecipeWhereInput = {
  calories?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
