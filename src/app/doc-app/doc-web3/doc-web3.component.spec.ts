import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocWeb3Component } from './doc-web3.component';

describe('DocWeb3Component', () => {
  let component: DocWeb3Component;
  let fixture: ComponentFixture<DocWeb3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocWeb3Component ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocWeb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
