import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdCatComponent } from './post-ad-cat.component';

describe('PostAdCatComponent', () => {
  let component: PostAdCatComponent;
  let fixture: ComponentFixture<PostAdCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostAdCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAdCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
