import * as sql from './sql.js';

export async function appsData(req, res) {
  const apps = await sql.getApps();
  res.json(apps);
}
