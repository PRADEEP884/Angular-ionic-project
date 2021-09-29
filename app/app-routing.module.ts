import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'sign-up-second',
    pathMatch: 'full'
  },
  {
    path: 'select',
    loadChildren: () => import('./select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'view-children',
    loadChildren: () => import('./view-children/view-children.module').then( m => m.ViewChildrenPageModule)
  },
  {
    path: 'watcher',
    loadChildren: () => import('./watcher/watcher.module').then( m => m.WatcherPageModule)
  },
  {
    path: 'sing-up-first',
    loadChildren: () => import('./sing-up-first/sing-up-first.module').then( m => m.SingUpFirstPageModule)
  },
  // {
  //   path: 'progess',
  //   loadChildren: () => import('./progess/progess.module').then( m => m.ProgessPageModule)
  // },
  {
    path: 'parents-invite',
    loadChildren: () => import('./parents-invite/parents-invite.module').then( m => m.ParentsInvitePageModule)
  },
  {
    path: 'progress',
    loadChildren: () => import('./progress/progress.module').then( m => m.ProgressPageModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule)
  },
   {
    path: 'sign-up-second',
     loadChildren: () => import('./sign-up-second/sign-up-second.module').then( m => m.SignUpSecondPageModule)
   },
  {
    path: 'set-task',
    loadChildren: () => import('./set-task/set-task.module').then( m => m.SetTaskPageModule)
  },
  {
    path: 'view-task',
    loadChildren: () => import('./view-task/view-task.module').then( m => m.ViewTaskPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
