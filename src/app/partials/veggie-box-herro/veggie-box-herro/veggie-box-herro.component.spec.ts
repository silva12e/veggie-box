import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeggieBoxHerroComponent } from './veggie-box-herro.component';

describe('VeggieBoxHerroComponent', () => {
  let component: VeggieBoxHerroComponent;
  let fixture: ComponentFixture<VeggieBoxHerroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeggieBoxHerroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeggieBoxHerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
