import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrentNumService {
  constructor() { }

  private intraStory = new BehaviorSubject<number>(0);
  public intraStory$ = this.intraStory.asObservable();

  setIntraStory(number: number)  {
    this.intraStory.next(number)
  }
  setMemoryNum(number: number) {

  }
}
