import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutDeleteApiComponent } from './put-delete-api.component';

describe('PutDeleteApiComponent', () => {
  let component: PutDeleteApiComponent;
  let fixture: ComponentFixture<PutDeleteApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutDeleteApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutDeleteApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
