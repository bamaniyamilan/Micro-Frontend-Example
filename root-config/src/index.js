import { registerApplication, start } from 'single-spa';

registerApplication(
  'home',
  () => import('@my-microfrontend-app/home'),
  () => true
);

registerApplication(
  'about-us',
  () => import('@my-microfrontend-app/about-us'),
  (location) => location.pathname.startsWith('/about-us')
);

registerApplication(
  'contact-us',
  () => import('@my-microfrontend-app/contact-us'),
  (location) => location.pathname.startsWith('/contact-us')
);

start();
