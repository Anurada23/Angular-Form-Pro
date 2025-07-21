import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ContactModule } from '../contact/contact.module';
import { ContactComponent } from '../contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    AddWishFormComponent,
    NameEditorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Import FormsModule for template-driven forms
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
