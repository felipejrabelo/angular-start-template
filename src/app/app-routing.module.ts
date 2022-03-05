import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestGuard } from './guards/test.guard';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { PageOneComponent } from './private-area/page-one/page-one.component';
import { PageTwoComponent } from './private-area/page-two/page-two.component';
import { PrivateAreaComponent } from './private-area/private-area.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'private-area',
    component: PrivateAreaComponent,
    canActivate: [TestGuard],
    children: [
      {
        path: 'page-one',
        component: PageOneComponent
      },
      {
        path: 'page-two',
        component: PageTwoComponent
      }
    ]
  },
  { 
    path: '**', 
    component: PageNotFoundComponentComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
