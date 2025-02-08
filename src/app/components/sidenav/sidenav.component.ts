import { Component } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {});
  }
}
