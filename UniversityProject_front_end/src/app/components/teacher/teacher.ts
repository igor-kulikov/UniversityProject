import {Subject} from '../subject/subject';
import {Position} from '../position/position';

export class Teacher {
  constructor(public personId: number,
              public personLastName: string,
              public personFirstName: string,
              public personBirthday: string,
              public position: Position,
              public subject: Subject) {
  }
}
