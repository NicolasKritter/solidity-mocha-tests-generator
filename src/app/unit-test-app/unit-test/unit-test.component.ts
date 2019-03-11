import { UnitTestWriterService } from './../../services/unit-test-writer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css']
})
export class UnitTestComponent implements OnInit {
  result: string;
  events: string;
  constructor(private unitTestWriterService: UnitTestWriterService) { }

  ngOnInit() {
  }

  test(): void {
    const a = UnitTestWriterService.writeTest();
    this.unitTestWriterService.test();
    this.result = a;

  }

}
