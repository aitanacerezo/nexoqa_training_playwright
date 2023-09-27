import { test, expect } from '@playwright/test';
import { HomePage } from '../page_objects/home_page';
import { AddSong } from '../page_objects/add_song_page';

test("Add new song", async ({ page }) => {
  await page.goto("http://192.168.0.18:8080/");

  let homePage: HomePage = new HomePage(page);
  await homePage.addButton.click();

  let addSongPage: AddSong = new AddSong(page);
  await addSongPage.fillSong("Song 1", "Artist 1", "Genre 1", "Album 1", "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a2/97/55/a2975589-3fdd-ea7f-afe3-a012cb99961b/197338933862.jpg/1200x1200bf-60.jpg", "https://www.youtube.com/watch?v=k740hisrk_k", "TAB", "Lyrics");
  await addSongPage.button.click();


  await expect(homePage.songs.last()).toContainText("Song 1");
});