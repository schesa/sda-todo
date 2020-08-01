import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private url = "http://localhost:8080/todo";

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any> {
    return this.http.get(`${this.url}/all`);
  }

  getTodo(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  createTodo(todo: Object): Observable<Object> {
    return this.http.post(`${this.url}/add`, todo, { responseType: "text" });
  }

  updateTodo(id: number, todo: Object): Observable<Object> {
    console.log(todo);
    return this.http.put(`${this.url}/update`, todo, { responseType: "text" });
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { responseType: "text" });
  }
}
