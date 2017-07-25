import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {Student} from './student'
import {StudentService} from './student.service'
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'student-list',
  templateUrl: 'student-list.component.html',
  styleUrls: ['student-list.component.css'],
  moduleId: module.id
})

export class StudentListComponent implements OnInit, OnDestroy {
  title: string = 'Students management';
  students: Student[] = [];
  selectedItemIndex: number = null;
  sub: any;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private studentService: StudentService,
              private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.loadStudents();
    this.sub = this.dataService.getData().subscribe(data => {
      this.loadStudents();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadStudents(): void {
    this.studentService
      .getStudents()
      .subscribe(p => this.students = p,
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

  addStudent() {
    this.router.navigate(['/student-manage/add']);
  }

  manageStudent(student: Student) {
    this.router.navigate(['/student-manage', (student == null) ? 0 : student.personId]);
  }

  deleteStudentByIndex(studentIndex: number) {
    this.studentService.deleteStudent(this.students[this.selectedItemIndex].personId)
      .subscribe(
        success => {
          this.students.splice(studentIndex, 1);
          this.selectedItemIndex = null
        },
        error => this.errorMessage = <any>error);
  }

  subjectsToString(studentIndex: number): string {
    let subjectsStr: string = this
      .students[studentIndex]
      .subjects
      .map(function (item) {
        return item.subjectName
      })
      .join('; ');
    if (subjectsStr.length > 0) {
      subjectsStr = 'Subjects:' + subjectsStr;
    }
    return subjectsStr;
  }

  clubsToString(studentIndex: number): string {
    let clubsStr: string = this
      .students[studentIndex]
      .clubs
      .map(function (item) {
        return item.clubName
      })
      .join('; ');
    if (clubsStr.length > 0) {
      clubsStr = 'Clubs:' + clubsStr;
    }
    return clubsStr;
  }
}
