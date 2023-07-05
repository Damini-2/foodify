import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:"foodify/foodify/",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"book",component:BookComponent},
  {path:"menu",component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
