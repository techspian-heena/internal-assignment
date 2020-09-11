import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from  './component/home/home.component';
import { StoreModule } from '@ngrx/store';
import { musicReducer } from './store/music.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MusicEffects } from './store/music.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      music: musicReducer
    }),
    EffectsModule.forRoot([MusicEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
