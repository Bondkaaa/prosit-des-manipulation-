import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONFERANCES } from './conferances';

@Component({
  selector: 'app-conferance-list',
  imports: [RouterLink],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css',
})
export class ConferanceList {
  conferances = CONFERANCES;
}
