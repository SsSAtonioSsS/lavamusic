import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import type { PgliteDatabase } from "drizzle-orm/pglite";

import type * as schema from "./../database/schemas";

export enum DatabaseType {
	Postgres = "postgres",
	PGLite = "pglite",
}

export type LavaDatabase = PgliteDatabase<typeof schema> | NodePgDatabase<typeof schema>;
