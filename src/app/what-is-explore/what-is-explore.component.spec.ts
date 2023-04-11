import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsExploreComponent } from './what-is-explore.component';

describe('WhatIsExploreComponent', () => {
  let component: WhatIsExploreComponent;
  let fixture: ComponentFixture<WhatIsExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsExploreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
