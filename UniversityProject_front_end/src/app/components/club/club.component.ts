import {Component, OnInit} from '@angular/core';
import {ClubService} from './club.service'
import {Club} from './club';

export interface IClubItem {
  club: Club;
  selectedFlag: boolean;
}

@Component({
  selector: 'club',
  templateUrl: 'club.component.html',
  styleUrls: ['club.component.css'],
  moduleId: module.id
})

export class ClubComponent implements OnInit {
  title: string = 'Clubs management';
  clubItems: IClubItem[] = [];
  selectedIndexes: number[] = [];
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private clubService: ClubService) {
  }

  onNotify(message: number[]): void {
    this.selectedIndexes = message;
  }

  ngOnInit() {
    const selectedFlag: boolean = false;

    this.clubService
      .getClubs()
      .subscribe(
        p => this.clubItems = p.map(function f(club: Club): IClubItem {
          return {club, selectedFlag}
        }),
        e => this.errorMessage = e,
        () => this.isLoading = false);
  }

  addClub(clubName: string) {

    const selectedFlag: boolean = false;

    if (!clubName) {
      return;
    }
    this.clubService.saveClub(clubName)
      .subscribe(
        club => {
          this.clubItems.push({club, selectedFlag});
        },
        error => this.errorMessage = <any>error,
        () => this.isLoading = false);
  }

  editClubByIndex(clubIndex: number, clubNewName: string) {
    const club: Club = {
      clubId: this.clubItems[clubIndex].club.clubId,
      clubName: clubNewName
    };

    this.clubService.updateClub(club)
      .subscribe(
        success => this.clubItems[clubIndex].club = success,
        error => this.errorMessage = <any>error);
  }

  deleteClubByIndex(clubIndex: number) {
    this.clubService.deleteClub(this.clubItems[clubIndex].club.clubId)
      .subscribe(
        success => {
          this.clubItems.splice(clubIndex, 1);
          this.selectedIndexes.length = 0;
        },
        error => this.errorMessage = <any>error);
  }

  getSelectedItemsIndexes(): number[] {
    const res: number[] = [];
    for (let i = 0; i < this.clubItems.length; i++) {
      if (this.clubItems[i].selectedFlag) {
        res[res.length] = i;
      }
    }
    return res;
  }
}
