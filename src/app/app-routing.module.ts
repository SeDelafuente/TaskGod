import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/AUTH/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/AUTH/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./pages/AUTH/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/User/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [authGuard]
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/User/change-password/change-password.module').then( m => m.ChangePasswordPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'change-username',
    loadChildren: () => import('./pages/User/change-username/change-username.module').then( m => m.ChangeUsernamePageModule),
    canActivate: [authGuard]
  },
  {
    path: 'homepage-user',
    loadChildren: () => import('./pages/User/homepage-user/homepage-user.module').then( m => m.HomepageUserPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'homepage-admin',
    loadChildren: () => import('./pages/Admin/homepage-admin/homepage-admin.module').then( m => m.HomepageAdminPageModule),
    canActivate: [authGuard, roleGuard]
  },
  {
    path: 'diary',
    loadChildren: () => import('./pages/Tasks/time category/diary/diary.module').then( m => m.DiaryPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'monthly',
    loadChildren: () => import('./pages/Tasks/time category/monthly/monthly.module').then( m => m.MonthlyPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'responsability',
    loadChildren: () => import('./pages/Tasks/category/responsability/responsability.module').then( m => m.ResponsabilityPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'exercise',
    loadChildren: () => import('./pages/Tasks/category/exercise/exercise.module').then( m => m.ExercisePageModule),
    canActivate: [authGuard]
  },
  {
    path: 'selfcare',
    loadChildren: () => import('./pages/Tasks/category/selfcare/selfcare.module').then( m => m.SelfcarePageModule),
    canActivate: [authGuard]
  },
  {
    path: 'economic',
    loadChildren: () => import('./pages/Tasks/finance/economic/economic.module').then( m => m.EconomicPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'income',
    loadChildren: () => import('./pages/Tasks/finance/income/income.module').then( m => m.IncomePageModule),
    canActivate: [authGuard]
  },
  {
    path: 'expense',
    loadChildren: () => import('./pages/Tasks/finance/expense/expense.module').then( m => m.ExpensePageModule),
    canActivate: [authGuard]
  },
  {
    path: 'savings',
    loadChildren: () => import('./pages/Tasks/finance/savings/savings.module').then( m => m.SavingsPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'withdraw',
    loadChildren: () => import('./pages/Tasks/finance/withdraw/withdraw.module').then( m => m.WithdrawPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'articles',
    loadChildren: () => import('./pages/User/articles/articles.module').then( m => m.ArticlesPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/Admin/users/users.module').then( m => m.UsersPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'problems',
    loadChildren: () => import('./pages/Admin/problems/problems.module').then( m => m.ProblemsPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/User/help/help.module').then( m => m.HelpPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/Tasks/finance/history/history.module').then( m => m.HistoryPageModule),
    canActivate: [authGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error404/error404.module').then( m => m.Error404PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
