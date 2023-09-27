import { test, expect } from '@playwright/test';
import { HomePage } from '../page_objects/home_page';
import { SongViewPage } from '../page_objects/song_view_page';
import { SongPage } from '../page_objects/song_page';
import { addSong } from './song_helper';
import { SongInfo } from './song_info';
import { NewSongInfo } from './new_song_info';
import { EditSongPage } from '../page_objects/edit_song_page';

test("Edit song", async ({ page }) => {
  await page.goto("http://192.168.0.18:8080/");

  const songInfo: SongInfo = new SongInfo();
  await addSong(page, songInfo);

  let homePage: HomePage = new HomePage(page);
  await homePage.songs.last().locator("a.btn").click();

  let songViewPage: SongViewPage = new SongViewPage(page);
  await songViewPage.editButton.click();

  let editSongPage: EditSongPage = new EditSongPage(page);
  const newSongInfo: NewSongInfo = new NewSongInfo();
  await editSongPage.fillSong(newSongInfo);

  await editSongPage.saveButton.click();

  await expect(songViewPage.title).toContainText(newSongInfo.title);
});