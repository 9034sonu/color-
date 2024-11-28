import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminCompomemt } from './admin/admin.component';
import { TermsComponent } from './terms/terms.component';
import { ClientComponent } from './client/client.component';

export const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'layout',
    component : LayoutComponent,
    children:[
      {
        path: '',
        component:WatchlistComponent,
      },
      {
        path : 'watchlist',
        component : WatchlistComponent
      },
      {
        path : 'portfolio',
        component : PortfolioComponent
      },
      {
        path : 'history',
        component : HistoryComponent
      },
      {
        path : 'profile',
        component : ProfileComponent
      },
      {
        path : 'admin',
        component :AdminCompomemt
      },
      {
        path : 'client',
        component :ClientComponent
      },
      {
        path : 'terms',
        component :TermsComponent
      }
    ]
    }

];
