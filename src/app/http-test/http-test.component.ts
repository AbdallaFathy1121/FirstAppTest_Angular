import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  loadedPosts!: Post[];
  isFetching = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'https://angular-test-10285-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(posts => {
        console.log(posts);
      })
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = true;
    this.http
      .get<{[key: string]: Post}> (
        'https://angular-test-10285-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map(responseData => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ id: key, ...responseData[key as keyof typeof responseData] });
            }
          }
          return postArray;
        })
      )
      .subscribe(posts => {
        this.isFetching =false;
        this.loadedPosts = posts;
      });
  }


}
