import {Club} from '../club/club';
import {Subject} from '../subject/subject';

export class Student {
  constructor(public personId: number,
              public personLastName: string,
              public personFirstName: string,
              public personBirthday: string,
              public subjects: Subject[],
              public clubs: Club[]) {
  }
}
