import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Conferance } from '../models/conferance';
import { ConferanceService } from '../services/conferance';

@Component({
  selector: 'app-conferance-list',
  imports: [RouterLink],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css',
})
export class ConferanceList implements OnInit {
  readonly conferances = signal<Conferance[]>([]);
  readonly errorMessage = signal('');

  private readonly conferenceService = inject(ConferanceService);

  ngOnInit(): void {
    this.loadConferances();
  }

  deleteConferance(id: number | undefined): void {
    if (id === undefined) {
      this.errorMessage.set('Identifiant de conférence manquant.');
      return;
    }

    this.conferenceService.deleteConferance(id).subscribe({
      next: () => {
        this.conferances.update((conferences) =>
          conferences.filter((conference) => conference.id !== id),
        );
        this.errorMessage.set('');
      },
      error: () => this.errorMessage.set('La suppression a échoué. Réessayez.'),
    });
  }

  private loadConferances(): void {
    this.conferenceService.getAll().subscribe({
      next: (conferences) => this.conferances.set(conferences),
      error: () =>
        this.errorMessage.set('Impossible de charger les conférences. Vérifiez que l’API fonctionne.'),
    });
  }
}
