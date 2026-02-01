## CRM Setup (Leads)

### 1) MySQL schema
Run:
```
server/schema.sql
```

### 2) Env variables (server)
Set environment variables before running the API:
- `PORT=4000`
- `DB_HOST=localhost`
- `DB_PORT=3306`
- `DB_USER=root`
- `DB_PASSWORD=`
- `DB_NAME=e_odpady`
- `ADMIN_PASSWORD=twoje_haslo`
- `ADMIN_TOKEN=dlugi_losowy_token`

### 3) Start API
```
npm run server
```

### 4) Start frontend
```
npm run dev
```

The frontend proxies `/api` to `http://localhost:4000`.
