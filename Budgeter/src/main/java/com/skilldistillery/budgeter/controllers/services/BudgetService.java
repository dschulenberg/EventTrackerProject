package com.skilldistillery.budgeter.controllers.services;

import java.util.List;

import com.skilldistillery.budgeter.entities.Budget;

public interface BudgetService {
    List<Budget> getAllBudgets();
    Budget findByBudgetId(Integer id);
    Budget updateBudget(Integer id, Budget budget);
    
    Budget createBudget(Budget budget);
    
    boolean deleteBudget(int id);
}
