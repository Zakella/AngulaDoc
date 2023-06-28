import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin/admin.component";
import {ManageCrisesComponent} from "./manage-crises/manage-crises.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {ManageHeroesComponent} from "./manage-heroes/manage-heroes.component";
import {NgModule} from "@angular/core";
import {authGuard} from "../auth/auth.guard";

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        canActivateChild: [authGuard],
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
