import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDataAddEditComponent } from './list-data-add-edit.component';

describe('ListDataAddEditComponent', () => {
  let component: ListDataAddEditComponent;
  let fixture: ComponentFixture<ListDataAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDataAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDataAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
