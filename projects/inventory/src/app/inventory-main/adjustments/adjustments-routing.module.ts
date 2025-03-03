import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountComponent } from './count/count.component';
import { AdjustmentComponent } from './adjustment/adjustment.component';
const routes: Routes = [
  {
    path:'count',
    component:CountComponent 
  },
  {
    path:'adjustment',
    component:AdjustmentComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdjustmentsRoutingModule { }
