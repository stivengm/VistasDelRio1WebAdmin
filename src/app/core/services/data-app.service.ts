import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EventsResponse } from '../models/response/events-response.model';

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

    //#region Events donde se encuentran todos los próximos eventos
    private $events = new BehaviorSubject<EventsResponse[] | null>(null);

    public setIsEvents(val: EventsResponse[]): void {
        this.$events.next(val);
    }

    public getIsEvents(): Observable<any> {
        return this.$events.asObservable();
    }

    public getCurrentIsEvents(): EventsResponse[] | null {
        return this.$events.getValue();
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