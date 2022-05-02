import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';


const MaterialComponent = [
  MatButtonModule,
  MatButtonToggleModule,
  MatDividerModule,
  MatIconModule
];

@NgModule({
  imports: [ MaterialComponent ],
  exports: [ MaterialComponent ]
})
export class MaterialModule { }
