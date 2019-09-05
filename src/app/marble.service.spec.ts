// import { TestBed } from '@angular/core/testing';
//
// import { MarbleService } from './marble.service';
// import { TestScheduler } from './scheduler';
// import { tap, throttleTime } from 'rxjs/operators';
//
// describe('MarbleService', () => {
//   let service: MarbleService;
//   let testScheduler: TestScheduler;
//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.get(MarbleService);
//     testScheduler = new TestScheduler((actual, expected) => {
//       expect(actual).toEqual(expected);
//     });
//   });
//
//
//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
//
//   // it('should work', () => {
//   //   testScheduler.run(helpers => {
//   //     const { cold, expectObservable, expectSubscriptions, flush } = helpers;
//   //     const source$ = cold('a|', { a: 5 });
//   //     const asub = '^-!';
//
//   // expectObservable(service.test()).toBe('a|', {a: 5});
//   // expectSubscriptions(service.test()).toBe('a|', { a: 5 });
//   //   });
//   // });
//
//   it('a', () => {
//     service.test2().subscribe((data) => {
//       expect(data).toEqual([1, 2, 3, 4]);
//     });
//   });
//
//   it('b', () => {
//     service.test3().subscribe((data) => {
//       expect(data).toEqual(10);
//     });
//   });
//
//   // it('c', () => {
//   //   service.test4().subscribe((data) => {
//   //     console.log(data, 'with timeout');
//   //     expect(data).toEqual(1043);
//   //   });
//   // });
//
//   it('d', () => {
//     testScheduler.run(helpers => {
//       const { cold, expectObservable, expectSubscriptions, flush } = helpers;
//       const source$ = cold('a|', { a: 5 });
//
//       expectObservable(service.test5(source$)).toBe('b|', { b: 6 });
//     });
//   });
//
//   // !todo [lbs] hot ? subscriptions ?
//
//   it('e', () => {
//     // testScheduler.run(helpers => {
//     //   const { cold, expectObservable, expectSubscriptions, flush } = helpers;
//     //   const source$ = cold('a', { a: 5 });
//     //
//     //   expectObservable(service.test6(source$)).toBe('b|', { b: 223 });
//     // });
//   });
// });
