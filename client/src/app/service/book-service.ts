import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Library } from '../models/Library';
import { Observable, Subject, pipe } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Book } from 'src/app/models/book';
import { BookInLibrary } from 'src/app/models/book-in-library';

@Injectable()
export class BookService {  

    constructor(private http:HttpClient) { }
    allBooks():any{
        return this.http.get("http://localhost:12345/api/Book/allBooks").pipe(map((response=>response)));
}
allCategories():any{
    return this.http.get("http://localhost:12345/api/Book/allCategories").pipe(map((response=>response)));
}

addNewBook(newBook: Book):Observable<any>  {
    debugger;
    return this.http.post("http://localhost:12345/api/Book/addNewBook",newBook).pipe(map((response:any)=> response.json()));

}
searchBook(book:number,city:number):any{
   
    return this.http.get("http://localhost:12345/api/Book/searchBook/" + book + "/" + city)
  .pipe(map((response => response)));

}
allCities():any{
    debugger;
    return this.http.get("http://localhost:12345/api/Library/allCities").pipe(map((response=>response)));
}
getBook(id:BookInLibrary):any{
    return this.http.get("http://localhost:12345/api/Book/getBook/" + id)
}

getStatus(id:number):any{
    return this.http.get("http://localhost:12345/api/Book/getStatus/" + id)
}

}