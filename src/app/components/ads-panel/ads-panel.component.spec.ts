import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsPanelComponent } from './ads-panel.component';

describe('AdsPanelComponent', () => {
  let component: AdsPanelComponent;
  let fixture: ComponentFixture<AdsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
