import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map } from "rxjs";

@Injectable()
export class PostService {

    constructor(private http: HttpClient) {}

    createAndStorePost(title: string, content: string) {
        const postData: Post = {title: title, content: content};
        this.http
        .post<{ name: string }> (
          'https://angular-test-10285-default-rtdb.firebaseio.com/posts.json',
          postData
        )
        .subscribe(posts => {
          console.log(posts);
        }
      );
    }

    fetchPosts() {
        return this.http
            .get<{ [key: string]: Post }> (
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
            );
    }

    deletePosts() {
        return this.http.delete('https://angular-test-10285-default-rtdb.firebaseio.com/posts.json');
    }

}