import { Page, Locator } from "playwright";

import { SongInfo } from '../songs/song_info';

export class SongPage {
  readonly page: Page;
  readonly title: Locator;
  readonly artist: Locator;
  readonly genre: Locator;
  readonly album: Locator;
  readonly albumImgUrl: Locator;
  readonly youtubeUrl: Locator;
  readonly tab: Locator;
  readonly lyrics: Locator;
  readonly button: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = this.page.locator('#sngTitle');
    this.artist = this.page.locator('#sngArtist');
    this.genre = this.page.locator('#sngGenre');
    this.album = this.page.locator('#sngAlbum');
    this.albumImgUrl = this.page.locator('#sngAlbumImg');
    this.youtubeUrl = this.page.locator('#sngYoutube');
    this.tab = this.page.locator('#sngTab');
    this.lyrics = this.page.locator('#sngLyrics');
    this.button = this.page.locator('#sngBtn');
  }

  async fillSong(data: SongInfo) {
    await this.title.fill(data.title);
    await this.artist.fill(data.artist);
    await this.genre.fill(data.genre);
    await this.album.fill(data.album);
    await this.albumImgUrl.fill(data.albumImgUrl);
    await this.youtubeUrl.fill(data.youtubeUrl);
    await this.tab.fill(data.tab);
    await this.lyrics.fill(data.lyrics);
  }
}