// TODO: implementation of schematics that generate this boilerplate.

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentSuite, ComponentSuiteElements } from '@github-search/test-kit';
import { AppComponent } from '@user-search-app/containers/app/app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let els: ComponentSuiteElements<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        els = new ComponentSuite<AppComponent>(fixture).elements;
      });
  }));

  it('should create', () => {
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
