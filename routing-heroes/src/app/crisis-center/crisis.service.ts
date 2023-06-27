import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {Crisis} from './crisis';
import {HEROES} from './mock-heroes';
import {MessageService} from 'src/app/message.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Crisis[]> {
    const crises = of(HEROES);
    this.messageService.add('CrisisService: fetched heroes');
    return crises;
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((crises: Crisis[]) => crises.find(hero => hero.id === +id)!)
    );
  }

}
