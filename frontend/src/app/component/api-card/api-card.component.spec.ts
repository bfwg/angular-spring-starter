import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiCardComponent } from './api-card.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ApiCardComponent', () => {
  let component: ApiCardComponent;
  let fixture: ComponentFixture<ApiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiCardComponent);
    component = fixture.componentInstance;
    component.responseObj = { status: 200, data: 'test' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit api click event', () => {
    spyOn(component.apiClick, 'next');
    component.apiText = 'test-api';
    component.onButtonClick();
    expect(component.apiClick.next).toHaveBeenCalledWith('test-api');
    expect(component.expand).toBe(true);
  });
});

