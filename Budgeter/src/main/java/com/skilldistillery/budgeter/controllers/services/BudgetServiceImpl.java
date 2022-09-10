package com.skilldistillery.budgeter.controllers.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.budgeter.entities.Budget;
import com.skilldistillery.budgeter.repositories.BudgetRepository;

@Service
public class BudgetServiceImpl implements BudgetService {
	   
    @Autowired
    private BudgetRepository budgetRepo;

	@Override
	public List<Budget> getAllBudgets() {
		return budgetRepo.findAll();
	}
	
	@Override
	public Budget findByBudgetId(Integer id) {
		Optional<Budget> budgetOpt = budgetRepo.findById(id);
		Budget budget = null;
		if (budgetOpt.isPresent()) {
		  budget = budgetOpt.get();
		  return budget;
		}
		return budget;
		
	}


	@Override
	public Budget createBudget(Budget budget) {	
        	budgetRepo.saveAndFlush(budget);
            return budget;
	}

	@Override
	public boolean deleteBudget(int id) {
        Optional<Budget> budgetOpt = budgetRepo.findById(id);
        if (budgetOpt.isPresent()) {
        	budgetRepo.deleteById(id);
        }
        return ! budgetRepo.existsById(id);
    }
	
	 @Override
	 public Budget updateBudget(Integer id, Budget budget) {
	        Optional<Budget> budgetOpt = budgetRepo.findById(id);
	        Budget updated = null;

	        if (budgetOpt.isPresent()) {
	            updated = budgetOpt.get();
	            if(budget.getCategory() != null) {
	                updated.setCategory(budget.getCategory());
	            }
	            if(budget.getDescription() != null) {
	                updated.setDescription(budget.getDescription());
	            }
	            if(budget.getAmount() != 0) {
	                updated.setAmount(budget.getAmount());
	            }
	            if(budget.getDate() != null) {
	            	updated.setDate(budget.getDate());
	            }
	            updated.setVariance(budget.isVariance());
	            
	            budgetRepo.saveAndFlush(updated);
	        }
	        return updated;
	    } 
	 
	 
}
