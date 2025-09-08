import { Component } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [MatCardActions, MatIcon, MatCard, MatCardHeader, MatCardContent, MatCardTitle],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {

}
