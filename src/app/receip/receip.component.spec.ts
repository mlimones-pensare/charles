import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipComponent } from './receip.component';

describe('ReceipComponent', () => {
  let component: ReceipComponent;
  let fixture: ComponentFixture<ReceipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
