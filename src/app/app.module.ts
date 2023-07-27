import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppCompoent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [AppCompoent, ReactiveFormComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [AppCompoent],
})
export class AppModule {}
