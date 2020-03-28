import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsVComponent } from './icons-v.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

const routes: Routes = [
  { path: '', component: IconsVComponent }
];

@NgModule({
  declarations: [IconsVComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeIconsModule,
  ]
})
export class IconsVModule { }
