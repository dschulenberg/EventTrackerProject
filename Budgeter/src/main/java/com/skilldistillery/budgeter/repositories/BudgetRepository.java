package com.skilldistillery.budgeter.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.budgeter.entities.Budget;

public interface BudgetRepository extends JpaRepository<Budget, Integer> {

}
