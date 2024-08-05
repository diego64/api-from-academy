import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  findById(userId: string): unknown
  findByEmail(email: string): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
}
