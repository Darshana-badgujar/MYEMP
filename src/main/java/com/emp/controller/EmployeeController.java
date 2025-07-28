
package com.emp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emp.model.Employee;
import com.emp.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    private EmployeeRepository repo;

    // POST /register - Register a new employee
    @PostMapping("/register")
    public Employee registerEmployee(@RequestBody Employee emp) {
        return repo.save(emp);
    }

    // GET /all - Get all employees
    @GetMapping("/all")
    public List<Employee> getAllEmployees() {
        return repo.findAll();
    }

    // POST /login - Login using email and password
    @PostMapping("/login")
    public Employee loginEmployee(@RequestBody Employee emp) {
        Employee existingEmp = repo.findByEmail(emp.getEmail());
        if (existingEmp != null && existingEmp.getPassword().equals(emp.getPassword())) {
            return existingEmp;
        } else {
            throw new RuntimeException("Invalid email or password");
        }
    }
}
