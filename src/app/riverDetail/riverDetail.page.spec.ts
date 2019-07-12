import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverDetailPage } from './riverDetail.page';

describe('RiverDetailPage', () => {
  let component: RiverDetailPage;
  let fixture: ComponentFixture<RiverDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RiverDetailPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
