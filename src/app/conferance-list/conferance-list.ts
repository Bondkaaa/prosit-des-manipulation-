import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONFERANCES } from './conferances';

@Component({
  selector: 'app-conferance-list',
  imports: [RouterLink],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConferanceList {
  readonly searchTerm = signal('');
  readonly selectedPlace = signal('all');
  readonly sortOrder = signal<'soonest' | 'latest'>('soonest');
  readonly places = [...new Set(CONFERANCES.map((conference) => conference.place))].sort();
  readonly conferances = computed(() => {
    const term = this.searchTerm().trim().toLocaleLowerCase();
    const selectedPlace = this.selectedPlace();

    const matches = CONFERANCES.filter((conference) => {
      const matchesPlace = selectedPlace === 'all' || conference.place === selectedPlace;
      const matchesSearch =
        !term ||
        [conference.name, conference.place, conference.description].some((value) =>
          value.toLocaleLowerCase().includes(term),
        );
      return matchesPlace && matchesSearch;
    });
    const direction = this.sortOrder() === 'soonest' ? 1 : -1;
    return matches.sort((first, second) => direction * first.date.localeCompare(second.date));
  });

  updateSearchTerm(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.searchTerm.set(event.target.value);
    }
  }

  updatePlaceFilter(event: Event): void {
    if (event.target instanceof HTMLSelectElement) {
      this.selectedPlace.set(event.target.value);
    }
  }

  updateSortOrder(event: Event): void {
    if (event.target instanceof HTMLSelectElement) {
      this.sortOrder.set(event.target.value === 'latest' ? 'latest' : 'soonest');
    }
  }
}
