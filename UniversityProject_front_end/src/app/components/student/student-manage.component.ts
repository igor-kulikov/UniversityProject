import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {StudentService} from './student.service';
import {Student} from './student';
import {Router, ActivatedRoute} from '@angular/router';

import {IClubItem} from '../club/club.component';
import {ClubService} from '../club/club.service';
import {Club} from '../club/club';

import {ISubjectItem} from '../subject/subject.component';
import {SubjectService} from '../subject/subject.service';
import {Subject} from '../subject/subject';

import { DataService } from '../data.service';

@Component({
  selector: 'student-manage',
  templateUrl: 'student-manage.component.html',
  styleUrls: ['student-manage.component.css'],
  moduleId: module.id
})

export class StudentManageComponent implements OnInit, OnDestroy {
  student: Student = null;
  clubItems: IClubItem[] = [];
  subjectItems: ISubjectItem[] = [];
  sub: any;
  errorMessage: string = '';
  @Output() notifyOnStudentManageComplete: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private studentService: StudentService,
              private clubService: ClubService,
              private subjectService: SubjectService,
              private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
  }


  ngOnInit(): void {
    // Upload student
    if (this.router.url == '/student-manage/add') {
      this.student = {
        personId: 0,
        personLastName: '',
        personFirstName: '',
        personBirthday: '',
        subjects: [],
        clubs: []
      };
      this.loadClubs();
      this.loadSubjects();
    } else {
      this.sub = this.route.params.subscribe(params => {
        const id = Number.parseInt(params['personid']);
        this.studentService
          .getStudent(id)
          .subscribe(p => {
              this.student = p;
              this.loadClubs();
              this.loadSubjects();
            },
            e => this.errorMessage = e)
      });
    }
  }

  loadClubs() {
    const selectedFlag: boolean = false;

    this.clubService
      .getClubs()
      .subscribe(
        p => {
          this.clubItems = p.map(function f(club: Club): IClubItem {
            return {club, selectedFlag}
          });
          for (let i = 0; i < this.clubItems.length; i++) {
            for (let j = 0; j < this.student.clubs.length; j++) {
              if (this.student.clubs[j].clubName == this.clubItems[i].club.clubName) {
                this.clubItems[i].selectedFlag = true;
                break;
              }
            }
          }
        },
        e => this.errorMessage = e);
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
          for (let i = 0; i < this.subjectItems.length; i++) {
            for (let j = 0; j < this.student.subjects.length; j++) {
              if (this.student.subjects[j].subjectName == this.subjectItems[i].subject.subjectName) {
                this.subjectItems[i].selectedFlag = true;
                break;
              }
            }
          }
        },
        e => this.errorMessage = e);
  }

  ngOnDestroy(): void {
    if (this.router.url == '/student-manage/add') {
      this.sub.unsubscribe();
    }
  }

  submit(studentNewLastName: string,
         studentNewFirstName: string,
         studentNewBirthday: string) {
    this.student.personLastName = studentNewLastName;
    this.student.personFirstName = studentNewFirstName;

    const bd = studentNewBirthday.split('.');
    this.student.personBirthday = bd[2] + '-' + bd[1] + '-' + bd[0];

    this.student.subjects = this.subjectItems
      .filter(function f(item: ISubjectItem) {
        return item.selectedFlag
      })
      .map(function f(item: ISubjectItem) {
        return item.subject
      });

    this.student.clubs = this.clubItems
      .filter(function f(item: IClubItem) {
        return item.selectedFlag
      })
      .map(function f(item: IClubItem) {
        return item.club
      });

    this.studentService.updateStudent(this.student)
      .subscribe(
        success => {
          this.student = success;
          this.dataService.updateData(true);

        },
        error => this.errorMessage = <any>error);
    this.router.navigate(['/students']);
  }

  goToStudentList() {
    this.router.navigate(['/students']);
  }
}
