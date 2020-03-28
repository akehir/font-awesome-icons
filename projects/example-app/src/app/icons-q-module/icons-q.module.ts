import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsQComponent } from './icons-q.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

const routes: Routes = [
  { path: '', component: IconsQComponent }
];

@NgModule({
  declarations: [IconsQComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeIconsModule,
  ]
})
export class IconsQModule { }
