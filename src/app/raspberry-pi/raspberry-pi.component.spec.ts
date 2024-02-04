import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspberryPiComponent } from './raspberry-pi.component';

describe('RaspberryPiComponent', () => {
  let component: RaspberryPiComponent;
  let fixture: ComponentFixture<RaspberryPiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaspberryPiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaspberryPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
