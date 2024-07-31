/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RecipeWhereInput } from "./RecipeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RecipeOrderByInput } from "./RecipeOrderByInput";

@ArgsType()
class RecipeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RecipeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RecipeWhereInput, { nullable: true })
  @Type(() => RecipeWhereInput)
  where?: RecipeWhereInput;

  @ApiProperty({
    required: false,
    type: [RecipeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RecipeOrderByInput], { nullable: true })
  @Type(() => RecipeOrderByInput)
  orderBy?: Array<RecipeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RecipeFindManyArgs as RecipeFindManyArgs };