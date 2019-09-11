import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Material & estilo
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyOwnCustomMaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

// Páginas
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
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
