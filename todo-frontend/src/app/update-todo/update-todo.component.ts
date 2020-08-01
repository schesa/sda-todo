import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TodoService } from "../todo.service";
import { Todo } from "../todo";

@Component({
  selector: "app-update-todo",
  templateUrl: "./update-todo.component.html",
  styleUrls: ["./update-todo.component.css"],
})
export class UpdateTodoComponent implements OnInit {
  id: number;
  todo: Todo;
  submitted: boolean = false;
  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.todo = new Todo();

    this.id = this.route.snapshot.params["id"];

    this.todoService.getTodo(this.id).subscribe(
      (data) => {
        console.log(data);
        this.todo = data;
      },
      (error) => console.log(error)
    );
  }
  updateTodo() {
    this.todoService.updateTodo(this.id, this.todo).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.todo = new Todo();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updateTodo();
  }

  gotoList() {
    this.router.navigate(["/todos"]);
  }
}
