import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbiImporterComponent } from './abi-importer.component';

describe('AbiImporterComponent', () => {
  let component: AbiImporterComponent;
  let fixture: ComponentFixture<AbiImporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbiImporterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbiImporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
