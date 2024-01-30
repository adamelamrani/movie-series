/* {
    "id": 240,
    "results": [
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Trailer",
            "key": "9O1Iy9od7-A",
            "published_at": "2012-06-01T17:52:58.000Z",
            "site": "YouTube",
            "size": 720,
            "type": "Trailer",
            "official": true,
            "id": "58fa2a55c3a3687c7300cdc6"
        }
    ]
} */

export default interface Video {
  id: string;
  results: VideoResult[];
}

export interface VideoResult {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  published_at: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  id: string;
}
