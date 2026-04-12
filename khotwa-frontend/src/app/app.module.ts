import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { WebSocketInitializerService } from './core/services/websocket-initializer.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (wsInit: WebSocketInitializerService) => () => wsInit.initialize(),
      deps: [WebSocketInitializerService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
