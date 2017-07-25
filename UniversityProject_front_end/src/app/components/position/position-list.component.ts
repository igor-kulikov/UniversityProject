import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPositionItem} from './position.component';

@Component({
  selector: 'position-list',
  template: `
    <ul>
      <li *ngFor="let positionItem of positionItems; let i = index"
          (click)="selectPositionItem(i)"
          [class.selected]="positionItem.selectedFlag">
        {{positionItem.position.positionId}}. {{positionItem.position.positionName}}
      </li>
    </ul>
  `,
  styleUrls: ['position.component.css'],
  moduleId: module.id
})

export class PositionsListComponent {
  @Input()
  positionItems: IPositionItem[];
  @Input()
  multiSelectionMode: boolean;
  selectedItemsCount: number = 0;

  @Output() notifyOnSelect: EventEmitter<number[]> = new EventEmitter<number[]>();

  selectPositionItem(itemIndex: number) {
    const initState: boolean = this.positionItems[itemIndex].selectedFlag;

    // MultiSelection mode
    if (this.multiSelectionMode) {
      this.positionItems[itemIndex].selectedFlag = !this.positionItems[itemIndex].selectedFlag;
      this.selectedItemsCount = (initState) ? this.selectedItemsCount - 1 : this.selectedItemsCount + 1;
    } else {
      // SingleSelection mode
      if (this.selectedItemsCount = 0) {
        // SingleSelection mode - nothing selected -> select
        this.positionItems[itemIndex].selectedFlag = true;
        this.selectedItemsCount = 1;
      } else {
        if (this.positionItems[itemIndex].selectedFlag) {
          // SingleSelection mode - requested item is selected -> de-select
          this.positionItems[itemIndex].selectedFlag = false;
          this.selectedItemsCount = 0;
        } else {
          // SingleSelection mode - requested item is not selected -> de-select all items
          this.positionItems.forEach(function f(value, i, arr) {
            value.selectedFlag = false
          });
          // select required item
          this.positionItems[itemIndex].selectedFlag = true;
          this.selectedItemsCount = 1;
        }
      }
    }
    this.notifyOnSelect.emit(this.getSelectedIndexes(this.positionItems));
  }

  addPositionItem(positionItem: IPositionItem) {
    this.positionItems.push(positionItem);
  }

  getSelectedItems(): IPositionItem[] {
    return this.positionItems.filter(function f(item: IPositionItem) {
      return item.selectedFlag;
    });
  }

  getSelectedIndexes(positionItems: IPositionItem[]): number[] {
    const res: number[] = [];
    positionItems.forEach(function f(item: IPositionItem, index: number) {
      if (item.selectedFlag) {
        res.push(index);
      }
    });
    return res;
  }
}
