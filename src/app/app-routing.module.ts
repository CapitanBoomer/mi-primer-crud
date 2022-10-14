import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  },
  {
    path: 'agregar',
    loadChildren: () => import('./paginas/cubos/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'eliminar',
    loadChildren: () => import('./paginas/cubos/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./paginas/cubos/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./paginas/cubos/modificar/modificar.module').then( m => m.ModificarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
