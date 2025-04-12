import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualScrollComponent } from './manual-scroll.component';

describe('ManualScrollComponent', () => {
  let component: ManualScrollComponent;
  let fixture: ComponentFixture<ManualScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
