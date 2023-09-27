import { Page, Locator } from "playwright";

import { HomePage } from "../page_objects/home_page";
import { SongPage } from "../page_objects/song_page";
import { SongInfo } from './song_info';

export async function addSong(page: Page, data: SongInfo) {
  let homePage: HomePage = new HomePage(page);
  await homePage.addButton.click();

  let addSongPage: SongPage = new SongPage(page);
  await addSongPage.fillSong(data);
  await addSongPage.button.click();
}