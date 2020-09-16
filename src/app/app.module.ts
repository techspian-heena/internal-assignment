import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { StoreModule } from '@ngrx/store';
import { musicReducer } from './store/reducers/music.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MusicEffects } from './store/effects/music.effects';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { CardComponent } from './component/card/card.component';
import { userReducer } from './store/reducers/user.reducer';
import { UserEffects } from './store/effects/user.effects';
import { ResultComponent } from './pages/result/result.component';
import { ActionComponent } from './pages/action/action.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ResultComponent,
    ActionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      music: musicReducer,
      user: userReducer
    }),
    EffectsModule.forRoot([MusicEffects, UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
