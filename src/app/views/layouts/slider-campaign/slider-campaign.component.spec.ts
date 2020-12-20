import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCampaignComponent } from './slider-campaign.component';

describe('SliderCampaignComponent', () => {
  let component: SliderCampaignComponent;
  let fixture: ComponentFixture<SliderCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
