import { Observable, BehaviorSubject } from 'rxjs';

export function observeProperty<T, K extends keyof T>
    (target: T, key: K): Observable<T[K]> {
 
    const subject = new BehaviorSubject<T[K]>(target[key]);
 
    Object.defineProperty(target, key, {
        get(): T[K] { return subject.getValue(); },
        set(newValue: T[K]): void {
            if (newValue !== subject.getValue()) {
                subject.next(newValue);
            }
        }
    });
 
    return subject.asObservable();
}