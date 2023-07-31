import { Injectable } from '@angular/core';
import { faCheck, faExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';

type NewNotificationWType = NewNotification & {
  type: "success" | "warning" | "error"
}

type NewNotification = {
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  title: string = "";
  message: string = "";
  faIcon = faCheck;
  color = {
    text: "text-green-500",
    bg: "bg-green-500"
  }

  addSuccessNotification(newNotification: NewNotification) {
    this.addNotification({
      message: newNotification.message,
      title: newNotification.title,
      type: "success"
    })
  }

  addWarningNotification(newNotification: NewNotification) {
    this.addNotification({
      message: newNotification.message,
      title: newNotification.title,
      type: "warning"
    })
  }

  addErrorNotification(newNotification: NewNotification) {
    this.addNotification({
      message: newNotification.message,
      title: newNotification.title,
      type: "error"
    })
  }

  private addNotification(newNotification: NewNotificationWType): void {
    this.message = newNotification.message;
    this.title = newNotification.title;

    switch (newNotification.type) {
      case 'success': 
        this.color.bg = "bg-green-500";
        this.color.text = "text-green-500";
        this.faIcon = faCheck;
        break;

      case 'error': 
        this.color.bg = "bg-red-800";
        this.color.text = "text-red-800";
        this.faIcon = faXmark
        break;

      case 'warning': 
        this.color.bg = "bg-yellow-600";
        this.color.text = "text-yellow-600";
        this.faIcon = faExclamation
        break;
    }

    setTimeout(() => {
      this.clearNotifications();
    }, 4000);
  }

  clearNotifications (): void {
    this.message = "";
    this.title = "";
  }
}
