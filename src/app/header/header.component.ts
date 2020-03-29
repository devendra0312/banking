import { Component, OnInit } from '@angular/core';
import * as freeSolidSvgIcons from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  filmIcon = freeSolidSvgIcons.faFax;
  constructor() { }

  ngOnInit(): void {
  }

}
