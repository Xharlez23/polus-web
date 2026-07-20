import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { inject } from '@vercel/analytics';

import AOS from 'aos';

bootstrapApplication(App, appConfig)
  .then(() => {

    AOS.init({

      duration:900,

      once:true,

      easing:'ease-out-cubic'

    });

    // Initialize Vercel Analytics
    inject();

  })
  .catch(err => console.error(err));