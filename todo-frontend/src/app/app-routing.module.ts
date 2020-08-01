import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { UpdateTodoComponent } from "./update-todo/update-todo.component";
import { CreateTodoComponent } from "./create-todo/create-todo.component";

const routes: Routes = [
  { path: "", redirectTo: "todos", pathMatch: "full" },
  { path: "todos", component: TodoListComponent },
  { path: "add", component: CreateTodoComponent },
  { path: "update/:id", component: UpdateTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
