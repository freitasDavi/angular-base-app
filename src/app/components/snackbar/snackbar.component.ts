import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications.service';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('.2s ease-in', style({
    opacity: 1
  }))
]);

const exitTransition = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('1s ease-out', style({
    opacity: 0
  }))
]);

const fadeIn = trigger('fadeIn', [enterTransition]);
const fadeOut = trigger('fadeOut', [exitTransition]);

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [fadeIn, fadeOut]
})
export class SnackbarComponent {
    constructor (public notificationService: NotificationsService) {
  }
}
