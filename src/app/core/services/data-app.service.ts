import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataAppService {

    //#region evento namePage para pintar el nombre de la página actual en el header
    private $user = new BehaviorSubject<string>("");

    public setIsUser(val: string): void {
        this.$user.next(val);
    }

    public getIsUser(): Observable<any> {
        return this.$user.asObservable();
    }

    public getCurrentIsUser(): string {
        return this.$user.getValue();
    }
    //#endregion


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