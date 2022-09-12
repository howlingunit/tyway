import * as sql from './sql.js';

export async function appsData(req, res) {
  const apps = await sql.getApps();
  res.json(apps);
}

export async function latestApp(req, res) {
  const apps = await sql.getApps();


  for (let i = 0; i < apps.length; i++) {
    if (apps[i].status === 'Released' && apps[i].name !== 'Tyway') {
      res.json(apps[i].Link);
      return;
    }
  }
}

export async function updateData(req, res) {
  const updates = await sql.getUpdates();
  res.json(updates);
}
