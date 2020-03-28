import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsNComponent } from './icons-n.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

const routes: Routes = [
  { path: '', component: IconsNComponent }
];

@NgModule({
  declarations: [IconsNComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeIconsModule,
  ]
})
export class IconsNModule { }
