import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Conferance } from '../models/conferance';
import { ConferanceService } from '../services/conferance';

@Component({
  selector: 'app-update-conferance',
  imports: [ReactiveFormsModule],
  templateUrl: './update-conferance.html',
  styleUrl: './update-conferance.css',
})
export class UpdateConferance implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly service = inject(ConferanceService);
  private readonly formBuilder = inject(FormBuilder).nonNullable;

  readonly conferenceForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
    location: ['', Validators.required],
    date: ['', Validators.required],
    time: [''],
    price: [0, Validators.min(0)],
    nbPlaces: [0, Validators.min(0)],
    imageUrl: [''],
  });

  errorMessage = '';
  private conferenceId = 0;

  ngOnInit(): void {
    this.conferenceId = Number(this.route.snapshot.paramMap.get('id'));
    if (!Number.isInteger(this.conferenceId) || this.conferenceId <= 0) {
      this.errorMessage = 'Identifiant de conférence invalide.';
      return;
    }

    this.service.getById(this.conferenceId).subscribe({
      next: (conference) => this.conferenceForm.patchValue({
        name: conference.name,
        description: conference.description ?? '',
        location: conference.location,
        date: conference.date,
        time: conference.time ?? '',
        price: conference.price ?? 0,
        nbPlaces: conference.nbPlaces ?? 0,
        imageUrl: conference.imageUrl ?? '',
      }),
      error: () => this.errorMessage = 'Impossible de charger la conférence.',
    });
  }

  updateConferance(): void {
    if (this.conferenceForm.invalid) {
      this.conferenceForm.markAllAsTouched();
      return;
    }

    const conference: Conferance = {
      id: this.conferenceId,
      ...this.conferenceForm.getRawValue(),
    };

    this.service.updateConferance(this.conferenceId, conference).subscribe({
      next: () => this.router.navigate(['/list']),
      error: () => this.errorMessage = 'La modification a échoué. Réessayez.',
    });
  }

  cancel(): void {
    this.router.navigate(['/list']);
  }
}
