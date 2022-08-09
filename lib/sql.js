
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function appsInit() {
  const db = await open({
    filename: './database/apps.sqlite',
    driver: sqlite3.Database,
  });
  await db.migrate({ migrationsPath: './apps-migrations-sqlite' });
  return db;
}

const appsDbConn = appsInit();

export async function getApps() {
  const db = await appsDbConn;
  return db.all('SELECT name, link, gitLink, lastUpdated, states.status FROM apps join states on apps.status == states.id ORDER BY apps.lastUpdated DESC');
}
