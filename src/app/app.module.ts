import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      disableTimeOut: false,
      extendedTimeOut: 400,
      easing: 'ease-in',
      easeTime: 300,
      enableHtml: true,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right',
      tapToDismiss: false,
      onActivateTick: false,
      maxOpened: 3,
      autoDismiss: true,
      newestOnTop: true,
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
