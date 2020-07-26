import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StyleManagerService } from '../style-manager.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemePickerComponent implements OnInit {
  currentTheme: string;
  // The below colors need to align with the themes defined in theme-picker.scss
  themes: any[] = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      displayName: 'Deep Purple & Amber',
      name: 'deeppurple-amber',
      isDark: false,
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      displayName: 'Indigo & Pink',
      name: 'indigo-pink',
      isDark: false,
      isDefault: true,
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      displayName: 'Pink & Blue-grey',
      name: 'pink-bluegrey',
      isDark: true,
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      displayName: 'Purple & Green',
      name: 'purple-green',
      isDark: true,
    },
    {
      primary: '#607d8b',
      accent: '#ffd740',
      displayName: 'Unicord dark',
      name: 'unicorn-dark-theme',
      isDark: true,
    },
    {
      primary: '#ffc0cb',
      accent: '#e040fb',
      displayName: 'Candy App',
      name: 'candy-app-theme',
      isDark: true,
    },
  ];

  constructor(private styleManagerService: StyleManagerService) {

    const themeName = localStorage.getItem('theme');
    if (themeName) {
      this.selectTheme(themeName);
    }
  }

  ngOnInit() {

  }

  selectTheme(themeName: string) {
    const theme = this.themes.find(currentTheme => currentTheme.name === themeName);

    if (!theme) {
      return;
    }

    this.currentTheme = theme;
    localStorage.setItem('theme', themeName);
    if (theme.isDefault) {
      this.styleManagerService.removeStyle('theme');
    } else {
      // TODO move themes to assets
      this.styleManagerService.setTheme(theme.name);
    }

  }
}
