import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IClubItem} from './club.component';

@Component({
  selector: 'club-list',
  template: `
    <ul>
      <li *ngFor="let clubItem of clubItems; let i = index"
          (click)="selectClubItem(i)"
          [class.selected]="clubItem.selectedFlag">
        {{clubItem.club.clubId}}. {{clubItem.club.clubName}}
      </li>
    </ul>
  `,
  styleUrls: ['club.component.css'],
  moduleId: module.id
})

export class ClubsListComponent {
  @Input()
  clubItems: IClubItem[];
  @Input()
  multiSelectionMode: boolean;
  selectedItemsCount: number = 0;

  @Output() notifyOnSelect: EventEmitter<number[]> = new EventEmitter<number[]>();

  selectClubItem(itemIndex: number) {
    const initState: boolean = this.clubItems[itemIndex].selectedFlag;

    // MultiSelection mode
    if (this.multiSelectionMode) {
      this.clubItems[itemIndex].selectedFlag = !this.clubItems[itemIndex].selectedFlag;
      this.selectedItemsCount = (initState) ? this.selectedItemsCount - 1 : this.selectedItemsCount + 1;
    } else {
      // SingleSelection mode
      if (this.selectedItemsCount = 0) {
        // SingleSelection mode - nothing selected -> select
        this.clubItems[itemIndex].selectedFlag = true;
        this.selectedItemsCount = 1;
      } else {
        if (this.clubItems[itemIndex].selectedFlag) {
          // SingleSelection mode - requested item is selected -> de-select
          this.clubItems[itemIndex].selectedFlag = false;
          this.selectedItemsCount = 0;
        } else {
          // SingleSelection mode - requested item is not selected -> de-select all items
          this.clubItems.forEach(function f(value, i, arr) {
            value.selectedFlag = false
          });
          // select required item
          this.clubItems[itemIndex].selectedFlag = true;
          this.selectedItemsCount = 1;
        }
      }
    }
    this.notifyOnSelect.emit(this.getSelectedIndexes(this.clubItems));
  }

  addClubItem(clubItem: IClubItem) {
    this.clubItems.push(clubItem);
  }

  getSelectedItems(): IClubItem[] {
    return this.clubItems.filter(function f(item: IClubItem) {
      return item.selectedFlag;
    });
  }

  getSelectedIndexes(clubItems: IClubItem[]): number[] {
    const res: number[] = [];
    clubItems.forEach(function f(item: IClubItem, index: number) {
      if (item.selectedFlag) {
        res.push(index);
      }
    });
    return res;
  }
}
