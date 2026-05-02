import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { APP_INITIALIZER } from '@angular/core';
import { WebSocketInitializerService } from './core/services/websocket-initializer.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule,FormsModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (wsInit: WebSocketInitializerService) => () => wsInit.initialize(),
      deps: [WebSocketInitializerService],
      multi: true
    },
    {
      provide:  HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi:    true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
