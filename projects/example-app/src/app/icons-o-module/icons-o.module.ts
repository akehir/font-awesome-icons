import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsOComponent } from './icons-o.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

const routes: Routes = [
  { path: '', component: IconsOComponent }
];

@NgModule({
  declarations: [IconsOComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeIconsModule,
  ]
})
export class IconsOModule { }
