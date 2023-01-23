import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  opened: boolean = false;
  panelOpenState: boolean = false;

  active: string = 'Tarjetas Visa en dispensadores';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches), shareReplay());

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

  isOpened() {
    this.opened = !this.opened;
  }

}
