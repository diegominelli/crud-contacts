import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { StartsComponent } from './contacts/starts/starts.component';
import { FormsModule } from '@angular/forms';
import { Error404Component } from './error-404/error-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReplacePipe } from './replace-pipe/replace-pipe';
import { ConctactInfoComponent } from './contacts/conctact-info/conctact-info.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    StartsComponent,
    ReplacePipe,
    Error404Component,
    NavBarComponent,
    ConctactInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'contacts', pathMatch: 'full' },
      {
        path: 'contacts',
        component: ContactListComponent,
      },
      {
        path: 'contacts/info/:id',
        component: ConctactInfoComponent,
      },
      {
        path: '**',
        component: Error404Component,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
