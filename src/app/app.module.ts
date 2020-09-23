import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {AppComponent} from './components/root/app.component';
import {AppRoutingModule} from './app-routing.module';
import { ChatComponent } from './components/chat/chat.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { AffordBlockComponent } from './components/afford-block/afford-block.component';
import {SharedModule} from './shared/shared.module';
import {ISlimScrollOptions, NgSlimScrollModule, SLIMSCROLL_DEFAULTS} from 'ngx-slimscroll';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChatComponent,
    LeftSidebarComponent,
    AffordBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    SharedModule,
    NgSlimScrollModule,
  ],
  providers: [
    // OPTIONAL : provide default global settings which will be merge with component options.
    {
      provide: SLIMSCROLL_DEFAULTS,
      useValue: {
        alwaysVisible : false
      } as ISlimScrollOptions
    },
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {
}
