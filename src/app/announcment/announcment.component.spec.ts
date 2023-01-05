import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncmentComponent } from './announcment.component';

describe('AnnouncmentComponent', () => {
  let component: AnnouncmentComponent;
  let fixture: ComponentFixture<AnnouncmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
