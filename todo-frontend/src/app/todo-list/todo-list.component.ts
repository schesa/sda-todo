import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "../todo";
import { TodoService } from "../todo.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  todos: Observable<Todo[]>;

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(
      (data) => {
        console.log(data);
        this.loadData();
      },
      (error) => console.log(error)
    );
  }

  updateTodo(id: number) {
    this.router.navigate(["update", id]);
  }
}
