import {User} from "./user";

export class ListUserResponse {
  listUser!: User[]
  totalPage!: number
  pageIndex!: number
  pageSize!: number
  totalRecords!: number
}
