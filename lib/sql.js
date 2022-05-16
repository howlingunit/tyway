
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function init() {
  const db = await open({
    filename: './database/apps.sqlite',
    driver: sqlite3.Database,
  });
  await db.migrate({ migrationsPath: './migrations-sqlite' });
  return db;
}
const dbConn = init();

export async function getApps() {
  const db = await dbConn;
  return db.all('SELECT name, link, gitLink, states.status FROM apps join states on apps.status == states.id ORDER BY apps.status');
}
