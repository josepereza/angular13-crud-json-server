import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { MaterialModule } from '../material.module';
import { IndexComponent } from './pages/index/index.component';
import { ViewComponent } from './pages/view/view.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class PostModule { }
