import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: Storage | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.storage = window.sessionStorage;
    }
  }

  readStorage(key: string) {
    if (!this.storage) return null;

    try {
      const value = this.storage.getItem(key);
      return value ? JSON.parse(atob(value)) : null;
    } catch {
      return null;
    }
  }

  saveStorage(key: string, value: any, base64: boolean = false): void {
    if (!this.storage) return;

    this.storage.setItem(
      key,
      base64 ? value : btoa(JSON.stringify(value))
    );
  }

  destroy(key: string): void {
    if (!this.storage) return;
    this.storage.removeItem(key);
  }

  clearStorage(): void {
    if (!this.storage) return;
    this.storage.clear();
  }
}