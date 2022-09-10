package com.skilldistillery.budgeter.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Budget {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String category;
	
	private String description;
	
	private int amount;
	
	private LocalDate date;
	
	private boolean variance;


	public boolean isVariance() {
		return variance;
	}

	public void setVariance(boolean variance) {
		this.variance = variance;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}


	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	

	public Budget(int id, String category, String description, int amount, LocalDate date, boolean variance) {
		super();
		this.id = id;
		this.category = category;
		this.description = description;
		this.amount = amount;
		this.date = date;
		this.variance = variance;
	}

	public Budget() {
		super();
	}
	
	
}
