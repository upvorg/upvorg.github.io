// Response from the server
declare namespace R {
  export interface Response<T> {
    err?: string
    data: any
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
    CreatedAt: Date
    UpdatedAt: Date
    Meta: Meta
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
    PublishDate?: any
    UpdatedDate?: any
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
    CreatedAt: Date
    UpdatedAt: Date
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
    CreatedAt?: Date
    UpdatedAt?: Date
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
    CreatedAt: Date
    Creator: User
    children: Comment[]
  }

  export interface FeedBack {
    Id: number
    Ip: string
    Name: string
    DisplayName: string
    Email: string
    Message: string
    CreatedAt: Date
  }
}
