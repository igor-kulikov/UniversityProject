import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {TeacherService} from './teacher.service';
import {Teacher} from './teacher';
import {ISubjectItem} from '../subject/subject.component';
import {IPositionItem} from '../position/position.component';

import {DataService} from '../data.service';
import {Subject} from '../subject/subject';
import {Position} from '../position/position';

import {SubjectService} from 'app/components/subject/subject.service';
import {PositionService} from '../position/position.service';


@Component({
  selector: 'teacher-manage',
  templateUrl: 'teacher-manage.component.html',
  styleUrls: ['teacher-manage.component.css'],
  moduleId: module.id
})

export class TeacherManageComponent implements OnInit, OnDestroy {
  teacher: Teacher = null;
  subjectItems: ISubjectItem[] = [];
  positionItems: IPositionItem[] = [];
  sub: any;
  errorMessage: string = '';
  @Output() notifyOnTeacherManageComplete: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private teacherService: TeacherService,
              private subjectService: SubjectService,
              private positionService: PositionService,
              private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
  }


  ngOnInit(): void {
    // Upload teacher
    if (this.router.url == '/teacher-manage/add') {
      this.teacher = {
        personId: 0,
        personLastName: '',
        personFirstName: '',
        personBirthday: '',
        position: null,
        subject: null,
      };
      this.loadSubjects();
      this.loadPositions();
    } else {
      this.sub = this.route.params.subscribe(params => {
        const id = Number.parseInt(params['personid']);
        this.teacherService
          .getTeacher(id)
          .subscribe(p => {
              this.teacher = p;
              this.loadSubjects();
              this.loadPositions();
            },
            e => this.errorMessage = e)
      });
    }
  }

  loadSubjects() {
    const selectedFlag: boolean = false;

    this.subjectService
      .getSubjects()
      .subscribe(
        p => {
          this.subjectItems = p.map(function f(subject: Subject): ISubjectItem {
            return {subject, selectedFlag}
          });
          if (this.teacher.subject != null) {
            for (let i = 0; i < this.subjectItems.length; i++) {
              if (this.teacher.subject.subjectName == this.subjectItems[i].subject.subjectName) {
                this.subjectItems[i].selectedFlag = true;
                break;
              }
            }
          }
        },
        e => this.errorMessage = e);
  }

  loadPositions() {
    const selectedFlag: boolean = false;

    this.positionService
      .getPositions()
      .subscribe(
        p => {
          this.positionItems = p.map(function f(position: Position): IPositionItem {
            return {position, selectedFlag}
          });
          if (this.teacher.position != null) {
            for (let i = 0; i < this.positionItems.length; i++) {
              if (this.teacher.position.positionName == this.positionItems[i].position.positionName) {
                this.positionItems[i].selectedFlag = true;
                break;
              }
            }
          }
        },
        e => this.errorMessage = e);
  }

  ngOnDestroy(): void {
    if (this.router.url == '/teacher-manage/add') {
      this.sub.unsubscribe();
    }
  }

  submit(teacherNewLastName: string,
         teacherNewFirstName: string,
         teacherNewBirthday: string) {
    this.teacher.personLastName = teacherNewLastName;
    this.teacher.personFirstName = teacherNewFirstName;

    const bd = teacherNewBirthday.split('.');
    this.teacher.personBirthday = bd[2] + '-' + bd[1] + '-' + bd[0];


    const selectedSubjectItems: ISubjectItem[] = this.subjectItems
      .filter(function f(item: ISubjectItem) {
        return item.selectedFlag
      });

    if (selectedSubjectItems.length > 0) {
      this.teacher.subject = selectedSubjectItems[0].subject;
    } else {
      this.teacher.subject = null;
    }

    const selectedPositionItems: IPositionItem[] = this.positionItems
      .filter(function f(item: IPositionItem) {
        return item.selectedFlag
      });

    if (selectedPositionItems.length > 0) {
      this.teacher.position = selectedPositionItems[0].position;
    } else {
      this.teacher.position = null;
    }

    this.teacherService.updateTeacher(this.teacher)
      .subscribe(
        success => {
          this.teacher = success;
          this.dataService.updateData(true);

        },
        error => this.errorMessage = <any>error);
    this.router.navigate(['/teacher']);
  }

  goToTeacherList() {
    this.router.navigate(['/teacher']);
  }
}
