# Bot Battlr

A React mini-app to browse, enlist, release, and permanently discharge bots using a JSON Server backend.

## Features

- Fetch & display a list of bots from `db.json`
- Enlist bots into **Your Bot Army** (only once per bot)
- Release enlisted bots back to the pool
- Discharge bots (DELETE from backend and army)
- Loading & error states
- Styled with Tailwind CSS

## Setup

1. **Clone** the repo & `cd` into it.
2. Run `npm install`.
3. Create `db.json` at the project root (see above for sample).
4. Start backend:
   ```bash
   json-server --watch db.json --port 8001
