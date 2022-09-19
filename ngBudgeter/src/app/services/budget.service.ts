import { Budget } from './../model/budget';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  // private baseUrl = 'http://localhost:8083/api/budgets';
  private baseUrl = environment.baseUrl + 'api/budgets';

  constructor(private http: HttpClient) {}

  editBudget: Budget | null = null;

  index(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.baseUrl).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('BudgetService.index(): error retrieving budget' + err)
        );
      })
    );
  }

  create(budget: Budget) {
    return this.http.post<Budget>(this.baseUrl, budget).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
          () =>
            new Error('BudgetService.create(): error creating Budget: ' + err)
        );
      })
    );
  }

  update(updatedBudget: Budget) {
    return this.http
      .put<Budget>(this.baseUrl + '/' + updatedBudget.id, updatedBudget)
      .pipe(
        catchError((err: any) => {
          console.error(err);
          return throwError(
            () =>
              new Error('BudgetService.update(): error updating Budget: ' + err)
          );
        })
      );
  }

  destroy(id: number) {
    return this.http.delete<void>(this.baseUrl + '/' + id).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
          () =>
            new Error('BudgetService.delete(): error deleting Budget: ' + err)
        );
      })
    );
  }
}
