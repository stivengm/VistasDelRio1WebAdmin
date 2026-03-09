import { Injectable } from '@angular/core';
import { HttpAppService } from './http.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataAppService {

    //#region evento namePage para pintar el nombre de la página actual en el header
    private $namePage = new BehaviorSubject<string>("");

    public setIsNamePage(val: string): void {
        this.$namePage.next(val);
    }

    public getIsNamePage(): Observable<any> {
        return this.$namePage.asObservable();
    }

    public getCurrentIsNamePage(): string {
        return this.$namePage.getValue();
    }
    //#endregion
}