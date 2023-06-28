import {BehaviorSubject, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import {Hero} from "../heroes/hero";


@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

  constructor(private messageService: MessageService) {
  }

  getCrises() {
    const crises = of(CRISES);
    this.messageService.add('CrisisService: fetched heroes');
    return crises;
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      map(crises => crises.find(crisis => crisis.id === +id)!)
    );

    return this.getCrises().pipe(
      // (+) before `id` turns the string into a number
      map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id)!)
    );
  }

}
