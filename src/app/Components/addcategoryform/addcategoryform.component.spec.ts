import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcategoryformComponent } from './addcategoryform.component';

describe('AddcategoryformComponent', () => {
  let component: AddcategoryformComponent;
  let fixture: ComponentFixture<AddcategoryformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcategoryformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcategoryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
