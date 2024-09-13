import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
} from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'enpoppa2024',
        appId: '1:606636089590:web:286505bb855ac5f06b4cd7',
        storageBucket: 'enpoppa2024.appspot.com',
        apiKey: 'AIzaSyATLq70FvDXcNuEcw8j0A4it-sOYygRR0U',
        authDomain: 'enpoppa2024.firebaseapp.com',
        messagingSenderId: '606636089590',
      })
    ),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    provideFirestore(() => getFirestore()),
  ],
};
