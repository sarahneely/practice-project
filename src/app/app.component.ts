import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public query: string;
  public queryString: string;
  public postList;
  title = 'WTT';

constructor(
  private http: HttpClient,
) {}


ngOnInit() {
}

searchPosts() {
  console.log('bound!', this.query);
  this.queryString = `https://www.reddit.com/r/all/search.json?q=${this.query}&limit=5`;
  console.log('queryString!', this.queryString);
  this.getPosts();
}

getPosts(): void {
  this.http.get<Post>(this.queryString)
      .subscribe(result=> {
      this.postList = result.data.children;
      console.log('this.postList', this.postList);
      this.postList.forEach(post=> {
        post.data.created = post.data.created * 1000;
      })
    });
  }
}


export class Post {
  kind: string;
  data: PostData;
}

export class PostData {
  children: PostChildren[];
}

export class PostChildren {
  data: PostChildrenData;
}

export class PostChildrenData {

}
