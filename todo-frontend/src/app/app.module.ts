import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { HttpClientModule } from "@angular/common/http";
import { UpdateTodoComponent } from "./update-todo/update-todo.component";
import { CreateTodoComponent } from "./create-todo/create-todo.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    UpdateTodoComponent,
    CreateTodoComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
