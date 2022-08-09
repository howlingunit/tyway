
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function appsInit() {
  const db = await open({
    filename: './database/apps.sqlite',
    driver: sqlite3.Database,
  });
  await db.migrate({ migrationsPath: './sql/apps-migrations-sqlite' });
  return db;
}
async function updatesInit() {
  const db = await open({
    filename: './database/updates.sqlite',
    driver: sqlite3.Database,
  });
  await db.migrate({ migrationsPath: './sql/updates-migrations-sqlite' });
  return db;
}

const appsDbConn = appsInit();
const updateDbConn = updatesInit();

export async function getApps() {
  const db = await appsDbConn;
  return db.all('SELECT name, link, gitLink, lastUpdated, states.status FROM apps join states on apps.status == states.id ORDER BY apps.lastUpdated DESC');
}
export async function getUpdates() {
  const db = await updateDbConn;
  return db.all('SELECT description, Link, date, services.service FROM updates join services on updates.service == services.id ORDER BY updates.date DESC');
}
