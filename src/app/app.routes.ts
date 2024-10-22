import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PastelesComponent } from './pages/pasteles/pasteles.component';
import { PastelposComponent } from './pages/pastelpos/pastelpos.component';
import { EnsaladaComponent } from './pages/ensalada/ensalada.component';
import { PastaComponent } from './pages/pasta/pasta.component';
import { NinoComponent } from './pages/nino/nino.component';
import { DesayunoComponent } from './pages/desayuno/desayuno.component';
import { AuthComponent } from './pages/auth/auth.component';
export const routes: Routes = [
    {
      path: 'auth', // Ruta de autenticación
      component: AuthComponent
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:'pasteles',
        component:PastelesComponent
    },
    {
        path:'Ensalada',
        component:EnsaladaComponent
    },
    {
        path:'pasta',
        component:PastaComponent
    },
    {
        path:'desayuno',
        component:DesayunoComponent
    },
    {
        path:'nino',
        component: NinoComponent
    },
    {
        path:'pastelpos/:pastelid',
        component:PastelposComponent
    },
    {
        path: '**',
        redirectTo: 'auth',
        pathMatch:'full'
    }
]
