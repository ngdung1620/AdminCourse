import {Course} from "./Course";

export class CourseRespone {
  listCourse!: Course[]
  totalPage!: number
  pageIndex!: number
  pageSize!: number
  totalRecords!: number
}
