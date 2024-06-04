import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import mapboxgl from 'mapbox-gl';

(mapboxgl as any).accessToken =
  'pk.eyJ1IjoiZ3pvcnpvbmkiLCJhIjoiY2x3dWt4aGMxMGYxMDJtcjFhN2Y4MXdpcyJ9.1y5WGuhjtln5SJeqqE1_PA';

import { MapsRoutingModule } from './maps-routing.module';

import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

@NgModule({
  declarations: [
    FullScreenPageComponent,
    MapsLayoutComponent,
    MarkersPageComponent,
    MiniMapComponent,
    PropertiesPageComponent,
    SideMenuComponent,
    ZoomRangePageComponent,
  ],
  imports: [CommonModule, MapsRoutingModule],
})
export class MapsModule {}
