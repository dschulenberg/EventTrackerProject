import { BudgetService } from './../../services/budget.service';
import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/model/budget';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private budgetService: BudgetService, private http: HttpClient) {}
  private baseUrl = 'http://localhost:8083/api/budgets';

  title = 'Budgeter App';

  selected: Budget | null = null;

  newBudget = new Budget();

  editBudget: Budget | null = null;

  budgets: Budget[] = [];

  addBudget() {
    this.budgetService.create(this.newBudget).subscribe({
      next: (result) => {
        this.newBudget = new Budget();
        this.reload();
      },
      error: (prob) => {
        console.error('TodoListHttpComponent.addTodo(): error creating todo:');
        console.error(prob);
      },
    });
  }

  setEditBudget() {
    this.editBudget = Object.assign({}, this.selected);
  }

  updateBudget(updatedBudget: Budget) {
    this.budgetService.update(updatedBudget).subscribe({
      next: (result) => {
        this.selected = result;
        this.editBudget = null;
        this.reload();
      },
      error: (prob) => {
        console.error('HomeHttpComponent.addBudget(): error creating todo:');
        console.error(prob);
      },
    });
  }

  updateCompleted(updatedBudget: Budget) {
    this.budgetService.update(updatedBudget).subscribe({
      next: (result) => {
        this.reload();
      },
      error: (prob) => {
        console.error(
          'HomeHttpComponent.updateCompleted(): error updating budget:'
        );
        console.error(prob);
      },
    });
  }

  deleteBudget(id: number) {
    this.budgetService.destroy(id).subscribe({
      next: () => {
        this.reload();
      },
      error: (prob) => {
        console.error('HomeHttpComponent.addTodo(): error deleting budget:');
        console.error(prob);
      },
    });
  }

  getNumberOfBudgets() {
    return this.budgets.length;
  }

  displayBudget(budget: Budget) {
    console.log(Budget);
  }

  displayTable() {
    this.selected = null;
  }

  getBadgeColor(): string {
    let count = this.getNumberOfBudgets();
    if (count > 10) {
      return 'bg-danger';
    } else if (count > 5) {
      return 'bg-warning';
    } else {
      return 'bg-success';
    }
  }

  reload(): void {
    this.budgetService.index().subscribe({
      next: (budgets) => {
        this.budgets = budgets;
      },
      error: (problem) => {
        console.error('HomeHttpComponent.reload(): error loading budget:');
        console.error(problem);
      },
    });
  }

  ngOnInit(): void {
    this.reload();
  }
}
