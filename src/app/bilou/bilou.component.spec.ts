import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilouComponent } from './bilou.component';

describe('BilouComponent', () => {
  let component: BilouComponent;
  let fixture: ComponentFixture<BilouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
