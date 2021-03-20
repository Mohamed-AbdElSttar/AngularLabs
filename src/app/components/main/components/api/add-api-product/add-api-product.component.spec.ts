import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApiProductComponent } from './add-api-product.component';

describe('AddApiProductComponent', () => {
  let component: AddApiProductComponent;
  let fixture: ComponentFixture<AddApiProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddApiProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApiProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
