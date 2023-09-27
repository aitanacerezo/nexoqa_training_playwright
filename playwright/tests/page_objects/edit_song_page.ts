import { Page, Locator } from "playwright";

import { SongInfo } from '../songs/song_info';

export class EditSongPage {
  readonly page: Page;
  readonly title: Locator;
  readonly artist: Locator;
  readonly genre: Locator;
  readonly album: Locator;
  readonly albumImgUrl: Locator;
  readonly youtubeUrl: Locator;
  readonly tab: Locator;
  readonly lyrics: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = this.page.getByLabel('Title');
    this.artist = this.page.getByLabel('Artist');
    this.genre = this.page.getByLabel('Genre');
    this.album = this.page.getByLabel('Album', { exact: true });
    this.albumImgUrl = this.page.getByLabel('Album Image Url', { exact: true });
    this.youtubeUrl = this.page.getByLabel('Youtube ID');
    this.tab = this.page.getByLabel('Tab');
    this.lyrics = this.page.getByLabel('Lyrics');
    this.saveButton = this.page.locator('button.btn');
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