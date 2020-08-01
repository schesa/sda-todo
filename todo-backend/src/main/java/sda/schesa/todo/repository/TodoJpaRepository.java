package sda.schesa.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import sda.schesa.todo.model.Todo;

@Component
public interface TodoJpaRepository extends JpaRepository<Todo, Long> {
}
