import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
  })
  export class StudentService {
  
    private basepath = "https://localhost:7061";
  
    constructor(private http:HttpClient) { }
  
    public getAllStudents():Observable<any>
    {
      return this.http.get(this.basepath + "/api/Student");
    }
  
  
    public getStudentsById(id:number):Observable<any>
    {
      var path = this.basepath + "/api/Student" + id;
      console.log(path)
      return this.http.get(path);
    }
  
    public AddNewStudent(student : any):Observable<any>
    {
      return this.http.post(this.basepath + "/api/Student", student);
    }
  
  }