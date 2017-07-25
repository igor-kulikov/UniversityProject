import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ISubjectItem} from './subject.component';

@Component({
  selector: 'subject-list',
  template: `
    <ul>
      <li *ngFor="let subjectItem of subjectItems; let i = index"
          (click)="selectSubjectItem(i)"
          [class.selected]="subjectItem.selectedFlag">
        {{subjectItem.subject.subjectId}}. {{subjectItem.subject.subjectName}}
      </li>
    </ul>
  `,
  styleUrls: ['subject.component.css'],
  moduleId: module.id
})

export class SubjectsListComponent {
  @Input()
  subjectItems: ISubjectItem[];
  @Input()
  multiSelectionMode: boolean;
  selectedItemsCount: number = 0;

  @Output() notifyOnSelect: EventEmitter<number[]> = new EventEmitter<number[]>();

  selectSubjectItem(itemIndex: number) {
    const initState: boolean = this.subjectItems[itemIndex].selectedFlag;

    // MultiSelection mode
    if (this.multiSelectionMode) {
      this.subjectItems[itemIndex].selectedFlag = !this.subjectItems[itemIndex].selectedFlag;
      this.selectedItemsCount = (initState) ? this.selectedItemsCount - 1 : this.selectedItemsCount + 1;
    } else {
      // SingleSelection mode
      if (this.selectedItemsCount = 0) {
        // SingleSelection mode - nothing selected -> select
        this.subjectItems[itemIndex].selectedFlag = true;
        this.selectedItemsCount = 1;
      } else {
        if (this.subjectItems[itemIndex].selectedFlag) {
          // SingleSelection mode - requested item is selected -> de-select
          this.subjectItems[itemIndex].selectedFlag = false;
          this.selectedItemsCount = 0;
        } else {
          // SingleSelection mode - requested item is not selected -> de-select all items
          this.subjectItems.forEach(function f(value, i, arr) {value.selectedFlag = false});
          // select required item
          this.subjectItems[itemIndex].selectedFlag = true;
          this.selectedItemsCount = 1;
        }
      }
    }
   this.notifyOnSelect.emit(this.getSelectedIndexes(this.subjectItems));
  }

  addSubjectItem(subjectItem: ISubjectItem) {
    this.subjectItems.push(subjectItem);
  }

  getSelectedItems(): ISubjectItem[] {
    return this.subjectItems.filter(function f(item: ISubjectItem) {
      return item.selectedFlag;
    });
  }

  getSelectedIndexes(subjectItems: ISubjectItem[]): number[] {
    const res: number[] = [];
    subjectItems.forEach(function f(item: ISubjectItem, index: number) {
      if (item.selectedFlag) {
        res.push(index);
      }
    });
    return res;
  }
}
