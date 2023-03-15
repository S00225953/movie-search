export interface IOMDBResponse {
    Title:string;
    Year:string;
    Director:string;
    Poster:string;
    Error:string;
    Ratings:ratingDetails[];
}

interface ratingDetails {
    Source:string;
    Value:string;
}