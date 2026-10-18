import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ConferanceList } from './conferance-list';

describe('ConferanceList', () => {
  let component: ConferanceList;
  let fixture: ComponentFixture<ConferanceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferanceList],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ConferanceList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filters conferences by search term and selected city', () => {
    component.selectedPlace.set('Tunis');
    component.searchTerm.set('web');

    expect(component.conferances().map((conference) => conference.name)).toEqual([
      'Web Foundations',
    ]);
  });

  it('sorts conferences by date in either direction', () => {
    expect(component.conferances()[0].name).toBe('Angular Frontiers');

    component.sortOrder.set('latest');

    expect(component.conferances()[0].name).toBe('Frontend Futures');
  });
});
