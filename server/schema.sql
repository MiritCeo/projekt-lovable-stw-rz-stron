CREATE TABLE IF NOT EXISTS leads (
  id CHAR(36) PRIMARY KEY,
  source VARCHAR(32) NOT NULL,
  organization VARCHAR(255) NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(64) NULL,
  message TEXT NULL,
  consent TINYINT(1) NOT NULL,
  status VARCHAR(32) NOT NULL DEFAULT 'new',
  assigned_to VARCHAR(255) NULL,
  notes TEXT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);
