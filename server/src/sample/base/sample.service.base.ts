/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Sample } from "@prisma/client";

export class SampleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SampleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleFindManyArgs>
  ): Promise<number> {
    return this.prisma.sample.count(args);
  }

  async findMany<T extends Prisma.SampleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleFindManyArgs>
  ): Promise<Sample[]> {
    return this.prisma.sample.findMany(args);
  }
  async findOne<T extends Prisma.SampleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleFindUniqueArgs>
  ): Promise<Sample | null> {
    return this.prisma.sample.findUnique(args);
  }
  async create<T extends Prisma.SampleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleCreateArgs>
  ): Promise<Sample> {
    return this.prisma.sample.create<T>(args);
  }
  async update<T extends Prisma.SampleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleUpdateArgs>
  ): Promise<Sample> {
    return this.prisma.sample.update<T>(args);
  }
  async delete<T extends Prisma.SampleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleDeleteArgs>
  ): Promise<Sample> {
    return this.prisma.sample.delete(args);
  }
}
