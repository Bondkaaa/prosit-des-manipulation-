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
  readonly conferances = computed(() => {
    const term = this.searchTerm().trim().toLocaleLowerCase();
    if (!term) {
      return CONFERANCES;
    }

    return CONFERANCES.filter((conference) =>
      [conference.name, conference.place, conference.description].some((value) =>
        value.toLocaleLowerCase().includes(term),
      ),
    );
  });

  updateSearchTerm(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.searchTerm.set(event.target.value);
    }
  }
}
