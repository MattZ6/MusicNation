import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Material & estilo
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyOwnCustomMaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

// Layouts
import { MainComponent } from "./layouts/main/main.component";

// Páginas
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from './components/header/header.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MainComponent, HeaderComponent, LoginLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
