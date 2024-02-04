import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliCommandsComponent } from './cli-commands.component';

describe('CliCommandsComponent', () => {
  let component: CliCommandsComponent;
  let fixture: ComponentFixture<CliCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliCommandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
