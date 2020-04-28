import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearsetComponent } from './gearset.component';

describe('GearsetComponent', () => {
  let component: GearsetComponent;
  let fixture: ComponentFixture<GearsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
