import { Routes } from '@angular/router';
import { DataBindingEx } from './data-binding-ex/data-binding-ex';
import { DirectiveEx } from './directive-ex/directive-ex';
import { SignalsEx } from './signals-ex/signals-ex';
import { FormEx } from './form-ex/form-ex';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: 'data-binding',
        component: DataBindingEx
    },
    {
        path: 'directives',
        component: DirectiveEx
    },
    {
        path: 'signal',
        component: SignalsEx
    },
    {
        path: 'form',
        component: FormEx
    }
];
