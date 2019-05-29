import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule
} from '@angular/material';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
