import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from './material/material.module';
import { TypografyComponent } from './typografy/typografy.component';
import { BadgeComponent } from './badge/badge.component';
import { ProgressspinnerComponent } from './progressspinner/progressspinner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TypografyComponent,
    BadgeComponent,
    ProgressspinnerComponent,
    ToolbarComponent,
    SidenavComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
