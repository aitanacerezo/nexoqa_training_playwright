import { test, expect } from '@playwright/test';
import { HomePage } from '../page_objects/home_page';
import { addSong } from './song_helper';
import { SongInfo } from './song_info';

test("Add new song", async ({ page }) => {
  await page.goto("http://192.168.0.18:8080/");

  const songInfo: SongInfo = new SongInfo();
  
  await addSong(page, songInfo);

  const homePage: HomePage = new HomePage(page);

  await expect(homePage.songs.last().locator(".song-title")).toContainText(songInfo.title);
});