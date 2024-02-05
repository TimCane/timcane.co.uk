import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveCodeBlockComponent } from './interactive-code-block.component';

describe('InteractiveCodeBlockComponent', () => {
  let component: InteractiveCodeBlockComponent;
  let fixture: ComponentFixture<InteractiveCodeBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteractiveCodeBlockComponent]
    });
    fixture = TestBed.createComponent(InteractiveCodeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
