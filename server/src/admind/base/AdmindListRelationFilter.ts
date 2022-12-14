/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdmindWhereInput } from "./AdmindWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AdmindListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AdmindWhereInput,
  })
  @ValidateNested()
  @Type(() => AdmindWhereInput)
  @IsOptional()
  @Field(() => AdmindWhereInput, {
    nullable: true,
  })
  every?: AdmindWhereInput;

  @ApiProperty({
    required: false,
    type: () => AdmindWhereInput,
  })
  @ValidateNested()
  @Type(() => AdmindWhereInput)
  @IsOptional()
  @Field(() => AdmindWhereInput, {
    nullable: true,
  })
  some?: AdmindWhereInput;

  @ApiProperty({
    required: false,
    type: () => AdmindWhereInput,
  })
  @ValidateNested()
  @Type(() => AdmindWhereInput)
  @IsOptional()
  @Field(() => AdmindWhereInput, {
    nullable: true,
  })
  none?: AdmindWhereInput;
}
export { AdmindListRelationFilter };
