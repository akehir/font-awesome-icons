import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsTComponent } from './icons-t.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

const routes: Routes = [
  { path: '', component: IconsTComponent }
];

@NgModule({
  declarations: [IconsTComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeIconsModule,
  ]
})
export class IconsTModule { }
