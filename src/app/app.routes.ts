import { ResolveFn, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';

const resolveChildATitle: ResolveFn<string> = () => Promise.resolve('child a');


export const routes: Routes = [
    {
        path: 'first-component',
        title: 'First Component',
        component: FirstComponent,
        children: [
            {
                path: 'child-a',
                title: resolveChildATitle,
                component: ChildAComponent,
            },
            {
                path: 'child-b',
                title: 'Child B',
                component: ChildBComponent,
            }
        ],
    },
    {
        path: 'second-component',
        component: SecondComponent,
    },
    {
        path: '',
        redirectTo: 'first-component',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];

