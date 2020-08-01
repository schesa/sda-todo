package sda.schesa.todo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import sda.schesa.todo.model.Todo;
import sda.schesa.todo.service.TodoService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/todo")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping(value = "/all")
    public List<Todo> findAll(){
        return todoService.getAllTodos();
    }

    @GetMapping(value = "/{id}")
    public Optional<Todo> findAll(@PathVariable ("id") Long id){
        return todoService.getTodo(id);
    }

    @PostMapping(path = "/add")
    public String saveTodo(@RequestBody Todo todo){
        todoService.saveTodo(todo);
        return "Todo added";
    }

    @PutMapping(path = "/update")
    public String updateTodo(@RequestBody Todo todo){
        todoService.saveTodo(todo);
        return "Todo updated";
    }

    @DeleteMapping("/{id}")
    public String deleteTodo(@PathVariable ("id") Long id){
        boolean deleted = todoService.deleteTodo(id);
        if(deleted){
            return "Todo deleted";
        }else{
            return "Todo could not be deleted";
        }
    }

}
