import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentListComponent } from './components/student/student-list.component';
import { SubjectComponent } from './components/subject/subject.component';
import {StudentManageComponent} from './components/student/student-manage.component';
import {ClubComponent} from './components/club/club.component';
import {TeacherListComponent} from './components/teacher/teacher-list.component';
import {TeacherManageComponent} from './components/teacher/teacher-manage.component';
import {PositionComponent} from './components/position/position.component';

const routes: Routes = [
  {
    path: 'students',
    component: StudentListComponent,
  },
  {
    path: 'student-manage/add',
    component: StudentManageComponent,
  },
  {
    path: 'student-manage/:personid',
    component: StudentManageComponent,
  },
  {
    path: 'teacher',
    component: TeacherListComponent,
  },
  {
    path: 'teacher-manage/add',
    component: TeacherManageComponent,
  },
  {
    path: 'teacher-manage/:personid',
    component: TeacherManageComponent,
  },
  {
    path: 'clubs',
    component: ClubComponent,
  },
  {
    path: 'subjects',
    component: SubjectComponent,
  },
  {
    path: 'positions',
    component: PositionComponent,
  },
  // map '/' to '/students' as our default route
  {
    path: '',
    redirectTo: '/teacher',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
