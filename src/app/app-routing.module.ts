import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./pages/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'validate-code',
    loadChildren: () => import('./pages/validate-code/validate-code.module').then( m => m.ValidateCodePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'change-username',
    loadChildren: () => import('./pages/change-username/change-username.module').then( m => m.ChangeUsernamePageModule)
  },
  {
    path: 'homepage-user',
    loadChildren: () => import('./pages/homepage-user/homepage-user.module').then( m => m.HomepageUserPageModule)
  },
  {
    path: 'homepage-admin',
    loadChildren: () => import('./pages/homepage-admin/homepage-admin.module').then( m => m.HomepageAdminPageModule)
  },
  {
    path: 'diary',
    loadChildren: () => import('./pages/diary/diary.module').then( m => m.DiaryPageModule)
  },
  {
    path: 'monthly',
    loadChildren: () => import('./pages/monthly/monthly.module').then( m => m.MonthlyPageModule)
  },
  {
    path: 'responsability',
    loadChildren: () => import('./pages/responsability/responsability.module').then( m => m.ResponsabilityPageModule)
  },
  {
    path: 'exercise',
    loadChildren: () => import('./pages/exercise/exercise.module').then( m => m.ExercisePageModule)
  },
  {
    path: 'selfcare',
    loadChildren: () => import('./pages/selfcare/selfcare.module').then( m => m.SelfcarePageModule)
  },
  {
    path: 'economic',
    loadChildren: () => import('./pages/economic/economic.module').then( m => m.EconomicPageModule)
  },
  {
    path: 'income',
    loadChildren: () => import('./pages/income/income.module').then( m => m.IncomePageModule)
  },
  {
    path: 'expense',
    loadChildren: () => import('./pages/expense/expense.module').then( m => m.ExpensePageModule)
  },
  {
    path: 'savings',
    loadChildren: () => import('./pages/savings/savings.module').then( m => m.SavingsPageModule)
  },
  {
    path: 'withdraw',
    loadChildren: () => import('./pages/withdraw/withdraw.module').then( m => m.WithdrawPageModule)
  },
  {
    path: 'record',
    loadChildren: () => import('./pages/record/record.module').then( m => m.RecordPageModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./pages/articles/articles.module').then( m => m.ArticlesPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'problems',
    loadChildren: () => import('./pages/problems/problems.module').then( m => m.ProblemsPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
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
