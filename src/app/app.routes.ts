import { Routes } from '@angular/router';
import { ManualScrollComponent } from './manual-scroll/manual-scroll.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

export const routes: Routes = [
    {path: '', component: ManualScrollComponent},
    {path: 'infinite', component: InfiniteScrollComponent},
    {path: 'virtual', component: VirtualScrollComponent},
];
