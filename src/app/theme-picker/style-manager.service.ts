import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleManagerService {

  private static coreTheme = ['candy-app-theme', 'unicorn-dark-theme']
  constructor() { }

  setTheme(themeToSet: string): void {
    if (StyleManagerService.coreTheme.includes(themeToSet)) {
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

  private getExistingLinkElementByKey(key: string) {
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
