import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
=======
<<<<<<< HEAD:src/app/components/info/info.component.spec.ts
import { InfoComponent } from './info.component';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoComponent ]
=======
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071
import { TimeComponent } from './time.component';

describe('TimeComponent', () => {
  let component: TimeComponent;
  let fixture: ComponentFixture<TimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeComponent ]
<<<<<<< HEAD
=======
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071:src/app/components/time/time.component.spec.ts
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD
    fixture = TestBed.createComponent(TimeComponent);
=======
<<<<<<< HEAD:src/app/components/info/info.component.spec.ts
    fixture = TestBed.createComponent(InfoComponent);
=======
    fixture = TestBed.createComponent(TimeComponent);
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071:src/app/components/time/time.component.spec.ts
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
