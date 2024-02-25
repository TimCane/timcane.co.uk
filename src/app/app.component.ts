import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { RouteData } from './shared/interfaces/route-data.interface';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly titleService: Title,
    private readonly metaService: Meta
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        let data = this.getNestedRouteData();

        data = data.reverse();

        this.titleService.setTitle(data.map((d) => d.title).join(' | '));

        for (let i = 0; i < data.length; i++) {
          for (const key in data[i].metaTags) {
            if (Object.prototype.hasOwnProperty.call(data[i].metaTags, key)) {
              this.metaService.addTag(
                { name: key, content: data[i].metaTags[key] },
                false
              );
            }
          }
        }
      });
  }

  getNestedRouteData(): RouteData[] {
    let currentRoute = this.router.routerState.root.firstChild;
    const routes: RouteData[] = [];

    while (currentRoute) {
      if (currentRoute.snapshot.routeConfig?.data) {
        let data = currentRoute.snapshot.routeConfig?.data;

        routes.push({
          title: data['title'] ?? '',
          metaTags: data['tags'] ?? [],
        });
      }

      currentRoute = currentRoute.firstChild;
    }

    return routes;
  }
}
