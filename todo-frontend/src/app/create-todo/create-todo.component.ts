import { Component, OnInit } from "@angular/core";
import { TodoService } from "../todo.service";
import { Todo } from "../todo";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-todo",
  templateUrl: "./create-todo.component.html",
  styleUrls: ["./create-todo.component.css"],
})
export class CreateTodoComponent implements OnInit {
  constructor(private todoService: TodoService, private router: Router) {}

  todo: Todo = new Todo();
  submitted = false;

  ngOnInit() {}

  save() {
    this.todoService.createTodo(this.todo).subscribe(
      (data) => {
        console.log("success");
        console.log(data);
      },
      (error) => console.log(error)
    );
    this.todo = new Todo();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(["/todos"]);
  }
}
