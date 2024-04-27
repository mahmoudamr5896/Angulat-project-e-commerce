import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductformComponent } from './addproductform.component';

describe('AddproductformComponent', () => {
  let component: AddproductformComponent;
  let fixture: ComponentFixture<AddproductformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproductformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
