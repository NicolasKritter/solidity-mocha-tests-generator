import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxDecoderComponent } from './tx-decoder.component';

describe('TxDecoderComponent', () => {
  let component: TxDecoderComponent;
  let fixture: ComponentFixture<TxDecoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxDecoderComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxDecoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
