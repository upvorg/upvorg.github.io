// Response from the server
declare namespace R {
  export interface Response<T> {
    err?: string
    data: T
  }

  export interface Post {
    ID: number
    Cover: string
    Title: string
    Content: string
    Tags: string
    Status: number
    Type: string
    IsPined: number
    IsRecommend: number
    IsOriginal: number
    CreatedAt: string
    UpdatedAt: string
    Meta?: Meta
    Creator: User
    Hits: number
    LikesCount: number
    CommentCount: number
    CollectionCount: number
    IsLiked: number
    IsCollected: number
  }

  export interface Meta {
    TitleJapanese: string
    TitleRomanji: string
    Genre: string
    Region: string
    Episodes: number
    IsEnd: number
    PublishDate: string | null
    UpdatedDate: string | null
  }

  export interface User {
    ID: number
    Level: number
    Status: number
    Name: string
    Nickname: string
    Avatar: string
    Bio: string
    Email: string
    CreatedAt: string
    UpdatedAt: string
  }

  export interface Video {
    ID: number
    Episode: number
    Cover: string
    Title: string
    TitleJapanese: string
    TitleRomanji: string
    VideoUrl: string
    Synopsis: string
    Uid: number
    Pid: number
    CreatedAt: string
    UpdatedAt: string
  }

  export interface Comment {
    ID: number
    ParentID: number
    TargetID: number
    Uid: number
    Pid: number
    Vid: number
    Content: string
    Color: string
    CreatedAt: string
    Creator: User
    Post?: Post
    children: Comment[]
  }

  export interface Tag {
    ID: number
    Name: string
    Synopsis: string
    CreatedAt: Date
  }

  export interface Feedback {
    ID: number
    Ip: string
    Name: string
    DisplayName: string
    Email: string
    Message: string
    CreatedAt: string
  }
}
