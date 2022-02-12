import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import ThemeData, { StyleManagerService } from '../style-manager.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemePickerComponent implements OnInit {
  public themes: ThemeData[];
  // private currentTheme: ThemeData;

  constructor(private styleManagerService: StyleManagerService) {
    this.themes = this.styleManagerService.getThemeList();
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

    // this.currentTheme = theme;
    localStorage.setItem('theme', themeName);
    if (theme.isDefault) {
      this.styleManagerService.removeStyle('theme');
    } else {
      // TODO move themes to assets
      this.styleManagerService.setTheme(theme.name);
    }

  }
}
