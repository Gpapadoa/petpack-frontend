import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
=======
<<<<<<< HEAD:src/app/components/feed-page/comments/comments.component.spec.ts
import { CommentsComponent } from './comments.component';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsComponent ]
=======
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071
import { FeedPageComponent } from './feed-page.component';

describe('FeedPageComponent', () => {
  let component: FeedPageComponent;
  let fixture: ComponentFixture<FeedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedPageComponent ]
<<<<<<< HEAD
=======
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071:src/app/components/feed-page/feed-page.component.spec.ts
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD
    fixture = TestBed.createComponent(FeedPageComponent);
=======
<<<<<<< HEAD:src/app/components/feed-page/comments/comments.component.spec.ts
    fixture = TestBed.createComponent(CommentsComponent);
=======
    fixture = TestBed.createComponent(FeedPageComponent);
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071:src/app/components/feed-page/feed-page.component.spec.ts
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
