// about-us/src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'about', component: AboutUsComponent }, // Example route configuration
];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Use the defined routes
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
