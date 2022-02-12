import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ParsedFunction } from 'app/config/types';
import { FileImportAbstractComponent } from 'app/models/file-import.abstract';
import { DocWeb3WriterService } from 'app/services/doc-web3-writer.service';
import { debounceTime, map, Observable, startWith, Subject, takeUntil } from 'rxjs';

// TODO! add search to search fn/events by name
// TODO! fix color
@Component({
  selector: 'app-doc-web3',
  templateUrl: './doc-web3.component.html',
  styleUrls: ['./doc-web3.component.css']
})
export class DocWeb3Component extends FileImportAbstractComponent implements OnInit, OnDestroy {
  public result: { fList: ParsedFunction[]; eList: ParsedFunction[] };
  public filteredOptions: Observable<ParsedFunction[]>;
  public searchCtrl = new FormControl();

  private destroy$ = new Subject();

  constructor() {
    super();
  }

  override ngOnInit(): void {
    this.filteredOptions = this.searchCtrl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        takeUntil(this.destroy$),
        map((value: string) => value ? this.filter(value) : this.result.fList)
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  public writeDoc(): void {
    if (!this.abiInput) { return; }
    const parsedContract = JSON.parse(this.abiInput);
    // this.unitTestWriterService.test(parsedContract);
    this.result = DocWeb3WriterService.writeDoc(parsedContract);
  }

  // public filterBy(array: any[], prop: string): any[] {
  //   return array.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  // }

  public trackByFn(index: number): number {
    return index;
  }

  private filter(search: string): ParsedFunction[] {
    return this.result.fList.filter((e) => e.name.includes(search));
  }
}
