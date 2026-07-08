import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserProfile } from '../shared/user';

export interface UserAddedEvent {
  username: string;
  password: string;
  isAdmin: boolean;
}

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.html',
  styleUrls: ['./admin-panel.css'],
  imports: []
})
export class AdminPanel {
  /** Liste aller registrierten Nutzer – vom Dashboard übergeben */
  @Input() users: UserProfile[] = [];

  /** Nutzername des aktuell eingeloggten Benutzers */
  @Input() currentUsername: string = '';

  /** Feedback-Meldung (Erfolg / Fehler) – vom Dashboard gesetzt */
  @Input() userMessage: string | null = null;

  /** Wird ausgelöst, wenn ein neuer Nutzer angelegt werden soll */
  @Output() userAdded = new EventEmitter<UserAddedEvent>();

  /** Wird ausgelöst, wenn ein Nutzer gelöscht werden soll */
  @Output() userDeleted = new EventEmitter<string>();

  onAdd(usernameInput: HTMLInputElement, passwordInput: HTMLInputElement): void {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    if (!username || !password) return;

    this.userAdded.emit({ username, password, isAdmin: false });
    usernameInput.value = '';
    passwordInput.value = '';
  }

  onDelete(username: string): void {
    this.userDeleted.emit(username);
  }
}
