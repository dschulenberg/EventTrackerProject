package com.skilldistillery.budgeter.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.budgeter.controllers.services.BudgetService;
import com.skilldistillery.budgeter.entities.Budget;

@CrossOrigin({"*", "http://localhost/"})
@RestController
@RequestMapping("api")
public class BudgetController {
    @Autowired
    private BudgetService budgetserv;
    
    @GetMapping("budgets")
    public List<Budget> getAll() {
        return budgetserv.getAllBudgets();
    }
    
	@GetMapping("budgets/{id}")
	public Budget show(
			@PathVariable int id,
			HttpServletResponse res
			) {
		Budget budget = budgetserv.findByBudgetId(id);
		if(budget == null) {
			res.setStatus(404);
		}
		return budget;
	}
	
	@PostMapping("budgets")
	public Budget add(
			@RequestBody Budget budget, 
			HttpServletRequest req,
			HttpServletResponse resp
			) {
		budget = budgetserv.createBudget(budget);
		if (budget == null) {
			resp.setStatus(404);
		} else {
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(budget.getId());
			resp.setHeader("Location", url.toString());
		}
		return budget;
	}
	
	@PutMapping(path = "budgets/{id}")
	public Budget update(
			@RequestBody Budget budget,
			@PathVariable int id,
			HttpServletResponse res
			) {
		Budget updated =null;
		try {
			updated = budgetserv.updateBudget(id,budget);
		}catch(Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		return updated;
	}
	@DeleteMapping("budgets/{id}")
	public boolean delete(
			@PathVariable int id,
			HttpServletResponse resp) {
		boolean result = budgetserv.deleteBudget(id); 
		if (result) {
			resp.setStatus(204);
		}
		return result;
	}
	
}
