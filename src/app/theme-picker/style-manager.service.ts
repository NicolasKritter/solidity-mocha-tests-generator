import { Injectable } from '@angular/core';

export default class ThemeData {
  primary: string;
  accent: string;
  displayName: string;
  name: string;
  isDark: boolean;
  isDefault?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StyleManagerService {

  private coreTheme = ['candy-app-theme', 'unicorn-dark-theme', 'indigo-pink'];
  private themes: ThemeData[] = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      displayName: 'Deep Purple & Amber',
      name: 'deeppurple-amber',
      isDark: false
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      displayName: 'Indigo & Pink',
      name: 'indigo-pink',
      isDark: false,
      isDefault: true
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      displayName: 'Pink & Blue-grey',
      name: 'pink-bluegrey',
      isDark: true
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      displayName: 'Purple & Green',
      name: 'purple-green',
      isDark: true
    },
    {
      primary: '#607d8b',
      accent: '#ffd740',
      displayName: 'Unicord dark',
      name: 'unicorn-dark-theme',
      isDark: true
    },
    {
      primary: '#ffc0cb',
      accent: '#e040fb',
      displayName: 'Candy App',
      name: 'candy-app-theme',
      isDark: true
    }
  ];
  constructor() { }

  public getThemeList(): ThemeData[] {
    return this.themes;
  }

  setTheme(themeToSet: string): void {
    if (this.coreTheme.includes(themeToSet)) {
      this.setCoreTheme(themeToSet);
    } else {
      this.setStyle('theme', `assets/styles/${themeToSet}.css`);
      document.body.setAttribute('class', '');
    }
  }
  /**
   * Set the stylesheet with the specified key.
   */

  setStyle(key: string, href: string): void {
    this.getLinkElementForKey(key).setAttribute('href', href);
  }

  /**
   * Remove the stylesheet with the specified key.
   */
  removeStyle(key: string): void {
    const existingLinkElement = this.getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }
  private setCoreTheme(themetoSet: string): void {
    document.body.setAttribute('class', themetoSet);
  }
  private getLinkElementForKey(key: string): Element {
    return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
  }

  private getExistingLinkElementByKey(key: string): Element {
    return document.head.querySelector(
      `link[rel="stylesheet"].${this.getClassNameForKey(key)}`
    );
  }

  private createLinkElementWithKey(key: string): HTMLLinkElement {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(this.getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
  }

  private getClassNameForKey(key: string): string {
    return `app-${key}`;
  }
}
