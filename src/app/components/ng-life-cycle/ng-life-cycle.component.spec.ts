import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLifeCycleComponent } from './ng-life-cycle.component';

describe('NgLifeCycleComponent', () => {
  let component: NgLifeCycleComponent;
  let fixture: ComponentFixture<NgLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgLifeCycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
