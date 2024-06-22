import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './service/category.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MenubarComponent } from './menubar/menubar.component';
import { MatMenuModule }   from '@angular/material/menu';
import {MatTabsModule}   from '@angular/material/tabs'
import { MatTableModule } from '@angular/material/table';
import {MatCardModule}  from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './service/customer.service';
import { ProductComponent } from './product/product.component';
import { ProductService } from './service/product.service';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './service/register.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    MenubarComponent,
    CustomerComponent,
    ProductComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    CategoryService,
    CustomerService,
    ProductService,
    

   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
