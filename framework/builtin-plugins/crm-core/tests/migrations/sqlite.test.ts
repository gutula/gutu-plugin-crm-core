import { describe, expect, it } from "bun:test";

import {
  buildCrmCoreSqliteMigrationSql,
  buildCrmCoreSqliteRollbackSql,
  getCrmCoreSqliteLookupIndexName,
  getCrmCoreSqliteStatusIndexName
} from "../../src/sqlite";

describe("crm-core sqlite helpers", () => {
  it("creates the business tables and indexes", () => {
    const sql = buildCrmCoreSqliteMigrationSql().join("\n");

    expect(sql).toContain("CREATE TABLE IF NOT EXISTS crm_core_primary_records");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS crm_core_secondary_records");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS crm_core_exception_records");
    expect(sql).toContain(getCrmCoreSqliteLookupIndexName("crm_core_"));
    expect(sql).toContain(getCrmCoreSqliteStatusIndexName("crm_core_"));
  });

  it("rolls the sqlite tables back safely", () => {
    const sql = buildCrmCoreSqliteRollbackSql({ tablePrefix: "crm_core_preview_" }).join("\n");
    expect(sql).toContain("DROP TABLE IF EXISTS crm_core_preview_exception_records");
  });
});
