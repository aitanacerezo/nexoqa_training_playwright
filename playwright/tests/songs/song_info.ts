export class SongInfo {
  title: string;
  artist: string;
  genre: string;
  album: string;
  albumImgUrl: string;
  youtubeUrl: string;
  tab: string;
  lyrics: string;

  constructor() {
    this.title = "Song 1";
    this.artist = "Artist 1";
    this.genre = "Genre 1";
    this.album = "Album 1";
    this.albumImgUrl = "https =//is1-ssl.mzstatic.com/image/thumb/Music123/v4/a2/97/55/a2975589-3fdd-ea7f-afe3-a012cb99961b/197338933862.jpg/1200x1200bf-60.jpg";
    this.youtubeUrl = "https =//www.youtube.com/watch?v=k740hisrk_k";
    this.tab = "TAB";
    this.lyrics = "lyrics"
  }
}