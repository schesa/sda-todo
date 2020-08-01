package sda.schesa.todo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sda.schesa.todo.model.Todo;
import sda.schesa.todo.repository.TodoJpaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    @Autowired
    private TodoJpaRepository todoJpaRepository;

    public List<Todo> getAllTodos(){
        return todoJpaRepository.findAll();
    }

    public Optional<Todo> getTodo(Long id){
        return todoJpaRepository.findById(id);
    }

    public Todo saveTodo(Todo todo){
        return todoJpaRepository.save(todo);
    }

    public boolean deleteTodo(Long id) {
        boolean deleted = true;
        Optional<Todo> todo = todoJpaRepository.findById(id);
        if (todo.isPresent()) {
            todoJpaRepository.deleteById(id);
        } else {
            System.out.println("Todo not exist");
            deleted = false;
        }
        return deleted;
    }
}
