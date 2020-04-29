import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearSelectionComponent } from './gear-selection.component';

describe('GearSelectionComponent', () => {
  let component: GearSelectionComponent;
  let fixture: ComponentFixture<GearSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
