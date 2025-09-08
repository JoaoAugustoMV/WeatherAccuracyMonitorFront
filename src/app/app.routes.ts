import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { AboutComponent as AboutPage } from './pages/about/about';
import { ExportDataComponent as ExportDataPage } from './pages/export-data/export-data';

export const routes: Routes = [
    {
        path: '',
        component: Main
    },      
  { path: 'export', component: ExportDataPage },
  { path: 'about', component: AboutPage }
];
