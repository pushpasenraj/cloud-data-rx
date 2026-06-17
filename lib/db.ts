import sql from "mssql";

export type ContactSubmissionInput = {
  fullName: string;
  companyName: string;
  email: string;
  service: string;
  message: string;
};

const globalForDb = globalThis as unknown as {
  __mssqlPool?: sql.ConnectionPool;
};

function getConfig(): sql.config {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const server = process.env.DB_SERVER;
  const database = process.env.DB_DATABASE;

  if (!user || !password || !server || !database) {
    throw new Error(
      "Database configuration incomplete. Set DB_USER, DB_PASSWORD, DB_SERVER, and DB_DATABASE in .env.local.",
    );
  }

  const port = process.env.DB_PORT
    ? parseInt(process.env.DB_PORT, 10)
    : 1433;

  if (Number.isNaN(port)) {
    throw new Error("DB_PORT must be a number.");
  }

  const encrypt =
    process.env.DB_ENCRYPT === "true" || process.env.DB_ENCRYPT === "1";

  const trustServerCertificate =
    process.env.DB_TRUST_SERVER_CERTIFICATE !== "false" &&
    process.env.DB_TRUST_SERVER_CERTIFICATE !== "0";

  return {
    user,
    password,
    server,
    database,
    port,
    options: {
      encrypt,
      trustServerCertificate,
    },
  };
}

/**
 * Returns a shared connection pool (one per Node process).
 * Safe to call from Next.js route handlers; reuse avoids opening many connections.
 */
export async function getMssqlPool(): Promise<sql.ConnectionPool> {
  const existing = globalForDb.__mssqlPool;
  if (existing) {
    return existing;
  }

  const pool = new sql.ConnectionPool(getConfig());
  await pool.connect();
  globalForDb.__mssqlPool = pool;
  return pool;
}

export async function insertContactSubmission(
  data: ContactSubmissionInput,
): Promise<void> {
  const pool = await getMssqlPool();

  await pool
    .request()
    .input("fullName", sql.NVarChar(500), data.fullName)
    .input("companyName", sql.NVarChar(500), data.companyName)
    .input("email", sql.NVarChar(320), data.email)
    .input("service", sql.NVarChar(200), data.service)
    .input("message", sql.NVarChar(sql.MAX), data.message)
    .query(`
      INSERT INTO ContactSubmissions (
        FullName,
        CompanyName,
        Email,
        Service,
        Message
      )
      VALUES (
        @fullName,
        @companyName,
        @email,
        @service,
        @message
      )
    `);
}
