import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatIcon, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isDark = true;

  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark-theme')
    document.body.classList.toggle('dark-theme', this.isDark);
  }
}
