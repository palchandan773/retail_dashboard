import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDataFilterSortComponent } from './list-data-filter-sort.component';

describe('ListDataFilterSortComponent', () => {
  let component: ListDataFilterSortComponent;
  let fixture: ComponentFixture<ListDataFilterSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDataFilterSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDataFilterSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
