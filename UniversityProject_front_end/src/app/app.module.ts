import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MdDatepickerModule, MdNativeDateModule } from '@angular/material';

import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student/student-list.component';
import { StudentManageComponent } from './components/student/student-manage.component';
import { TeacherListComponent } from './components/teacher/teacher-list.component';
import { TeacherManageComponent } from './components/teacher/teacher-manage.component';

import { ClubComponent } from './components/club/club.component';
import { ClubsListComponent } from './components/club/clubs-list.component';
import { SubjectComponent } from './components/subject/subject.component';
import { SubjectsListComponent } from './components/subject/subjects-list.component';
import { PositionComponent } from './components/position/position.component';
import { PositionsListComponent } from './components/position/position-list.component';

import { StudentService } from './components/student/student.service'
import { TeacherService } from './components/teacher/teacher.service'
import { ClubService } from './components/club/club.service'
import { SubjectService } from './components/subject/subject.service'
import { PositionService } from './components/position/position.service'
import { DataService } from './components/data.service'

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentManageComponent, StudentListComponent,
    TeacherManageComponent, TeacherListComponent,
    ClubComponent, ClubsListComponent,
    SubjectComponent, SubjectsListComponent,
    PositionComponent, PositionsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  providers: [
    StudentService,
    TeacherService,
    ClubService,
    SubjectService,
    PositionService,
    DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
