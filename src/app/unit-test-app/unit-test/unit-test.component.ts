import { ApiParserService } from './../../services/api-parser.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css']
})
export class UnitTestComponent implements OnInit {

  constructor(private abiParserService: ApiParserService) { }

  ngOnInit() {
  }

  test(): void {
    console.log('in');
    const a = this.abiParserService.parseABIForElements();
    console.log(a);

  }

}
