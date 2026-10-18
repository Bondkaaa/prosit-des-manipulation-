import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CONFERANCES } from '../conferance-list/conferances';

@Component({
  selector: 'app-conferance-details',
  imports: [DatePipe, RouterLink],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConferanceDetails {
  private readonly route = inject(ActivatedRoute);
  readonly conferance = CONFERANCES.find(
    (item) => item.id === Number(this.route.snapshot.paramMap.get('id')),
  );
}
