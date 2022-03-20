import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  pottery = {
    requiredTools: ['Needles', 'Scrappers', 'Calipers', 'Sponges', 'Brushes'],
    types: ['Earthenware', 'Stoneware', 'Porcelain'],
  };
  constructor() {}
}
