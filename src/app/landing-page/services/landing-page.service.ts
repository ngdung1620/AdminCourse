import { Injectable } from '@angular/core';
import {CombinedCourse} from "../models/combined-course";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Course} from "../models/Course";
import {Lesson} from "../models/lesson";
import {CreateCombinedCourseRequest} from "../models/createCombinedCourseRequest";
import {EditCombinedCourseRequest} from "../models/editCombinedCourseRequest";
import {CreateCourseRequest} from "../models/createCourseRequest";
import {EditCourseRequest} from "../models/editCourseRequest";
import {CreateLessonRequest} from "../models/createLessonRequest";
import {EditLessonRequest} from "../models/editLessonRequest";
import {Role} from "../models/role";
import {Claim} from "../models/claim";
import {GetClaimByRoleId} from "../models/GetClaimByRoleId";
import {BehaviorSubject, Observable} from "rxjs";
import {GetClaimByRoleIdRespone} from "../models/getClaimByRoleIdRespone";
import {AddClaimRequest} from "../models/addClaimRequest";
import {CreateRoleRequest} from "../models/createRoleRequest";
import {User} from "../models/user";
import {Register} from "../models/register";
import {CourseRequest} from "../models/courseRequest";
import {CourseComponent} from "../component/course/course.component";
import {CourseRespone} from "../models/courseRespone";
import {ListUserRequest} from "../models/ListUserRequest";
import {ListUserResponse} from "../models/ListUserResponse";

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private httpClient: HttpClient) { }
  _searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  search$: Observable<string> = this._searchSubject.asObservable();
  getListCombinedCourse = () => this.httpClient.get<CombinedCourse[]>(`${environment.api_domain}/CombinedCourse/list-combine-course`);
  getListCourse = () => this.httpClient.get<Course[]>(`${environment.api_domain}/Course/list-course`);
  getListLesson = () => this.httpClient.get<Lesson[]>(`${environment.api_domain}/Lesson/list-lesson`);
  deleteCombinedCourse = (id: string) => this.httpClient.delete(`${environment.api_domain}/CombinedCourse/delete-combined-course/${id}`);
  deleteCourse = (id: string) => this.httpClient.delete(`${environment.api_domain}/Course/delete-course/${id}`);
  deleteLesson = (id: string) => this.httpClient.delete(`${environment.api_domain}/Lesson/delete-lesson/${id}`)
  createCombinedCourse = (data: CreateCombinedCourseRequest) => this.httpClient.post(`${environment.api_domain}/CombinedCourse/create-combined-course`,data);
  editCombinedCourse = (data: EditCombinedCourseRequest) => this.httpClient.post(`${environment.api_domain}/CombinedCourse/edit-combined-course`,data);
  createCourse = (data: CreateCourseRequest ) => this.httpClient.post(`${environment.api_domain}/Course/create-course`,data);
  editCourse = (data: EditCourseRequest) => this.httpClient.post(`${environment.api_domain}/Course/edit-course`,data);
  createLesson = (data: CreateLessonRequest) => this.httpClient.post(`${environment.api_domain}/Lesson/Create-lesson`,data)
  editLesson = (data: EditLessonRequest) => this.httpClient.post(`${environment.api_domain}/Lesson/edit-lesson`,data)
  getListRole =() => this.httpClient.get<Role[]>(`${environment.api_domain}/Role/get-role`);
  getListClaim =() => this.httpClient.get<Claim[]>(`${environment.api_domain}/Role/all-claim`);
  getClaimByRoleId = (roleId: GetClaimByRoleId) => this.httpClient.post<GetClaimByRoleIdRespone>(`${environment.api_domain}/Role/FindClaimByRoleId`,roleId);
  addClaim = (id: string, data: AddClaimRequest) => this.httpClient.post(`${environment.api_domain}/Role/add-claim/${id}`,data);
  createRole = (data: CreateRoleRequest) => this.httpClient.post(`${environment.api_domain}/Role/create-role`,data);
  deleteRole = (id: string) => this.httpClient.delete(`${environment.api_domain}/Role/delete-role/${id}`);
  ListUser = (data: ListUserRequest) => this.httpClient.post<ListUserResponse>(`${environment.api_domain}/Authentication/list-user`,data);
  deleteUser = (id: string) => this.httpClient.delete(`${environment.api_domain}/Authentication/delete-user/${id}`);
  register = (data: Register) => this.httpClient.post<boolean>(`${environment.api_domain}/Authentication/registration`,data);
  GetUserById = (id: string) => this.httpClient.get<User>(`${environment.api_domain}/Authentication/get-user/${id}`);
  listCourse = (data: CourseRequest) => this.httpClient.post<CourseRespone>(`${environment.api_domain}/Course/get-list-course`,data)
}
