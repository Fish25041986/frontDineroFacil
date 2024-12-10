import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CiudadesComponent } from './pages/ciudades/ciudades.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { ReferenciasComponent } from './pages/referencias/referencias.component';
import { TiposCreditosComponent } from './pages/tipos-creditos/tipos-creditos.component';
import { InformacionLaboralComponent } from './pages/informacion-laboral/informacion-laboral.component';

export const routes: Routes = [
    {path:"index",component:IndexComponent},
    {path:"ciudades",component:CiudadesComponent},
    {path:"clientes",component:ClientesComponent},
    {path:"creditos",component:CreditosComponent},
    {path:"referencias",component:ReferenciasComponent},
    {path:"tipoCredito",component:TiposCreditosComponent},
    {path:"informacionLaboral",component:InformacionLaboralComponent},
];
