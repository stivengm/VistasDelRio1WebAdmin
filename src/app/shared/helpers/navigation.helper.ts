import { Router } from "@angular/router";

export function goToPage(router: Router, route: string) {
    router.navigate([route]);
}