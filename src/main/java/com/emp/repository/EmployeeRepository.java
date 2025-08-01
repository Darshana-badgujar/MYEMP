package com.emp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.emp.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Employee findByEmail(String email);
    boolean existsByEmail(String email);
}
