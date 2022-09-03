package com.skilldistillery.budgeter.entities.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.budgeter.entities.Budget;

class BudgetTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Budget Budget;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	    emf = Persistence.createEntityManagerFactory("BudgeterJPA");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		 em = emf.createEntityManager();
		 Budget = em.find(Budget.class,1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		Budget = null;
	}

	@Test
	void test_Budget_entity_amount_mappings() {
		assertNotNull(Budget);
		assertEquals(200,Budget.getAmount());
	}
	@Test
	void test_Budget_entity_description_mappings() {
		assertNotNull(Budget);
		assertEquals("Monthly Subscription",Budget.getDescription());
	}
	@Test
	void test_Budget_entity_date_mappings() {
		assertNotNull(Budget);
		assertEquals(2022,Budget.getDate().getYear());
	}
	@Test
	void test_Budget_entity_category_mappings() {
		assertNotNull(Budget);
		assertEquals("Netflix",Budget.getCategory());
	}


}
