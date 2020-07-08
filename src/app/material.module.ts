import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

const objsMaterial = [
  MatToolbarModule,
  MatButtonModule,
  MatProgressBarModule,
  MatCardModule,
  MatDialogModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    objsMaterial
  ],
  exports: objsMaterial

})
export class MaterialModule { }
