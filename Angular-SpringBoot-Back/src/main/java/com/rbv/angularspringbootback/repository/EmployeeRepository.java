package com.rbv.angularspringbootback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rbv.angularspringbootback.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
