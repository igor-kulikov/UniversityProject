import {Component, OnInit} from '@angular/core';
import {SubjectService} from './subject.service'
import {Subject} from './subject';

export interface ISubjectItem {
  subject: Subject;
  selectedFlag: boolean;
}

@Component({
  selector: 'subject',
  templateUrl: 'subject.component.html',
  styleUrls: ['subject.component.css'],
  moduleId: module.id
})

export class SubjectComponent implements OnInit {
  title: string = 'Subjects management';
  subjectItems: ISubjectItem[] = [];
  selectedIndexes: number[] = [];
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private subjectService: SubjectService) {
  }

  onNotify(message: number[]): void {
    this.selectedIndexes = message;
  }

  ngOnInit() {
    const selectedFlag: boolean = false;

    this.subjectService
      .getSubjects()
      .subscribe(
        p => this.subjectItems = p.map(function f(subject: Subject): ISubjectItem {
          return {subject, selectedFlag}
        }),
        e => this.errorMessage = e,
        () => this.isLoading = false);
  }

  addSubject(subjectName: string) {

    const selectedFlag: boolean = false;

    if (!subjectName) {
      return;
    }
    this.subjectService.saveSubject(subjectName)
      .subscribe(
        subject => {
          this.subjectItems.push({subject, selectedFlag});
        },
        error => this.errorMessage = <any>error,
        () => this.isLoading = false);
  }

  editSubjectByIndex(subjectIndex: number, subjectNewName: string) {
    const subject: Subject = {
      subjectId: this.subjectItems[subjectIndex].subject.subjectId,
      subjectName: subjectNewName
    };

    this.subjectService.updateSubject(subject)
      .subscribe(
        success => this.subjectItems[subjectIndex].subject = success,
        error => this.errorMessage = <any>error);
  }

  deleteSubjectByIndex(subjectIndex: number) {
    this.subjectService.deleteSubject(this.subjectItems[subjectIndex].subject.subjectId)
      .subscribe(
        success => {
          this.subjectItems.splice(subjectIndex, 1);
          this.selectedIndexes.length = 0;
        },
        error => this.errorMessage = <any>error);
  }

  getSelectedItemsIndexes(): number[] {
    const res: number[] = [];
    for (let i = 0; i < this.subjectItems.length; i++) {
      if (this.subjectItems[i].selectedFlag) {
        res[res.length] = i;
      }
    }
    return res;
  }
}
