import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GuildOverviewComponent } from './guild-overview/guild-overview.component';
import { PlayersOverviewComponent } from './players-overview/players-overview.component';
import { GuildsOverviewComponent } from './guilds-overview/guilds-overview.component';
import { PlayerComponent } from './player/player.component';
import { HttpClientModule } from '@angular/common/http';
import { EloBoxComponent } from './elo-box/elo-box.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { PlayerBasicComponent } from './player-basic/player-basic.component';
import { PlayerBasicRankedComponent } from './player-basic-ranked/player-basic-ranked.component';
import { PlayerBasicClassicComponent } from './player-basic-classic/player-basic-classic.component';
import { PlayerBasicOverallStatsComponent } from './player-basic-overall-stats/player-basic-overall-stats.component';
import { PlayerBasicFriendsComponent } from './player-basic-friends/player-basic-friends.component';
import { PlayerBasicMatchHistoryComponent } from './player-basic-match-history/player-basic-match-history.component';
import { PlayerBasicMatchComponent } from './player-basic-match/player-basic-match.component';
import { PlayerBasicFriendComponent } from './player-basic-friend/player-basic-friend.component';
import { PlayerBasicActivityComponent } from './player-basic-activity/player-basic-activity.component';
import { PlayerBasicLegionChoiceComponent } from './player-basic-legion-choice/player-basic-legion-choice.component';


const appRoutes: Routes = [
  {path: 'players', component: PlayersOverviewComponent},
  {path: 'guilds', component: GuildsOverviewComponent},
  {path: 'player', component: PlayerPageComponent},
  {path: '', component: PlayersOverviewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GuildOverviewComponent,
    PlayersOverviewComponent,
    GuildsOverviewComponent,
    EloBoxComponent,
    PlayerComponent,
    PlayerPageComponent,
    PlayerBasicComponent,
    PlayerBasicRankedComponent,
    PlayerBasicClassicComponent,
    PlayerBasicOverallStatsComponent,
    PlayerBasicFriendsComponent,
    PlayerBasicMatchHistoryComponent,
    PlayerBasicMatchComponent,
    PlayerBasicFriendComponent,
    PlayerBasicActivityComponent,
    PlayerBasicLegionChoiceComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
