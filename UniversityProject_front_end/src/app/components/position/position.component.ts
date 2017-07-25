import {Component, OnInit} from '@angular/core';
import {PositionService} from './position.service'
import {Position} from './position';

export interface IPositionItem {
  position: Position;
  selectedFlag: boolean;
}

@Component({
  selector: 'position',
  templateUrl: 'position.component.html',
  styleUrls: ['position.component.css'],
  moduleId: module.id
})

export class PositionComponent implements OnInit {
  title: string = 'Positions management';
  positionItems: IPositionItem[] = [];
  selectedIndexes: number[] = [];
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private positionService: PositionService) {
  }

  onNotify(message: number[]): void {
    this.selectedIndexes = message;
  }

  ngOnInit() {
    const selectedFlag: boolean = false;

    this.positionService
      .getPositions()
      .subscribe(
        p => this.positionItems = p.map(function f(position: Position): IPositionItem {
          return {position, selectedFlag}
        }),
        e => this.errorMessage = e,
        () => this.isLoading = false);
  }

  addPosition(positionName: string) {

    const selectedFlag: boolean = false;

    if (!positionName) {
      return;
    }
    this.positionService.savePosition(positionName)
      .subscribe(
        position => {
          this.positionItems.push({position, selectedFlag});
        },
        error => this.errorMessage = <any>error,
        () => this.isLoading = false);
  }

  editPositionByIndex(positionIndex: number, positionNewName: string) {
    const position: Position = {
      positionId: this.positionItems[positionIndex].position.positionId,
      positionName: positionNewName
    };

    this.positionService.updatePosition(position)
      .subscribe(
        success => this.positionItems[positionIndex].position = success,
        error => this.errorMessage = <any>error);
  }

  deletePositionByIndex(positionIndex: number) {
    this.positionService.deletePosition(this.positionItems[positionIndex].position.positionId)
      .subscribe(
        success => {
          this.positionItems.splice(positionIndex, 1);
          this.selectedIndexes.length = 0;
        },
        error => this.errorMessage = <any>error);
  }

  getSelectedItemsIndexes(): number[] {
    const res: number[] = [];
    for (let i = 0; i < this.positionItems.length; i++) {
      if (this.positionItems[i].selectedFlag) {
        res[res.length] = i;
      }
    }
    return res;
  }
}
