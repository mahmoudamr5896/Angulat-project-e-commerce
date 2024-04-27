import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsoffersService {
  private adslist: string[];

  constructor() {
    this.adslist = [
      "Sale 30%",
      "Black friday 30%",
      "aaaaaaaaaaaa",
      "Discount 30%"
    ];
  }

  getaddstoshow(time: number): Observable<string> {
    return new Observable<string>((observer) => {
      let counter = 0;
      let addtime = setInterval(() => {
        if (counter === this.adslist.length) {
          clearInterval(addtime); // Clear the interval when all ads have been emitted
          observer.complete();
          return;
        }
        if (this.adslist[counter] === "") {
          clearInterval(addtime); // Clear the interval in case of an error
          observer.error("Error fetching ad");
          return;
        }
        observer.next(this.adslist[counter]);
        counter++;
      }, time * 1000);
    });
  }
}
