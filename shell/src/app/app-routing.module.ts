import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from './utils/federation-utils';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{
  path : 'details',  
  loadChildren: () =>
  loadRemoteModule({
    remoteName: 'details',
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
    exposedModule: 'DetailsModule',
  }).then(m => m.DetailsModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
