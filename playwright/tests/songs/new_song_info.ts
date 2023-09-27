export class NewSongInfo {
  title: string;
  artist: string;
  genre: string;
  album: string;
  albumImgUrl: string;
  youtubeUrl: string;
  tab: string;
  lyrics: string;

  constructor() {
    this.title = "Song 2";
    this.artist = "Artist 2";
    this.genre = "Genre 2";
    this.album = "Album 2";
    this.albumImgUrl = "https =//is1-ssl.mzstatic.com/image/thumb/Music123/v4/a2/97/55/a2975589-3fdd-ea7f-afe3-a012cb99961b/197338933862.jpg/1200x1200bf-60.jpg";
    this.youtubeUrl = "https =//www.youtube.com/watch?v=k740hisrk_k";
    this.tab = "TAB";
    this.lyrics = "lyrics"
  }
}