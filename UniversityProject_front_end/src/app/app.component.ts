import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'University Project';

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  switchToStudents() {
    this.router.navigate(['/students']);
  }

  switchToTeachers() {
    this.router.navigate(['/teacher']);
  }

  switchToClubs() {
    this.router.navigate(['/clubs']);
  }

  switchToSubjects() {
    this.router.navigate(['/subjects']);
  }

  switchToPositions() {
    this.router.navigate(['/positions']);
  }
}
