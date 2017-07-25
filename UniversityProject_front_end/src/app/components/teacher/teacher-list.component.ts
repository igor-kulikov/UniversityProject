import {Component, OnDestroy, OnInit} from '@angular/core';
import {Teacher} from './teacher'
import {TeacherService} from './teacher.service'
import {ActivatedRoute, Router} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'teacher-list',
  templateUrl: 'teacher-list.component.html',
  styleUrls: ['teacher-list.component.css'],
  moduleId: module.id
})

export class TeacherListComponent implements OnInit, OnDestroy {
  title: string = 'Teachers management';
  teachers: Teacher[] = [];
  selectedItemIndex: number = null;
  sub: any;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private teacherService: TeacherService,
              private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.loadTeachers();
    this.sub = this.dataService.getData().subscribe(data => {
      this.loadTeachers();
    });
  }

  ngOnDestroy () {
    this.sub.unsubscribe();
  }

  loadTeachers(): void {
    this.teacherService
      .getTeachers()
      .subscribe(p => this.teachers = p,
        e => this.errorMessage = e,
        () => this.isLoading = false);
  }

  selectItem(itemIndex: number) {
    if (this.selectedItemIndex == itemIndex) {
      this.selectedItemIndex = null;
    } else {
      this.selectedItemIndex = itemIndex;
    }
  }

  addTeacher() {
    this.router.navigate(['/teacher-manage/add']);
  }

  manageTeacher(teacher: Teacher) {
    this.router.navigate(['/teacher-manage', (teacher == null) ? 0 : teacher.personId]);
  }

  deleteTeacherByIndex(teacherIndex: number) {
    this.teacherService.deleteTeacher(this.teachers[this.selectedItemIndex].personId)
      .subscribe(
        success => {
          this.teachers.splice(teacherIndex, 1);
          this.selectedItemIndex = null
        },
        error => this.errorMessage = <any>error);
  }
}
