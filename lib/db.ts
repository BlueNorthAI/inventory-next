import 'server-only';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import {
  pgTable,
  text,
  numeric,
  integer,
  timestamp,
  pgEnum,
  serial
} from 'drizzle-orm/pg-core';
import { count, eq, ilike } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';

export const db = drizzle(neon(process.env.POSTGRES_URL!));

export const statusEnum = pgEnum('status', ['active', 'inactive', 'archived']);

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  imageUrl: text('image_url').notNull(),
  name: text('name').notNull(),
  status: statusEnum('status').notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  stock: integer('stock').notNull(),
  availableAt: timestamp('available_at').notNull()
});

export type SelectProduct = typeof products.$inferSelect;
export const insertProductSchema = createInsertSchema(products);


export const scenarios = pgTable('scenarios', {
  id: serial('id').primaryKey(),
  scenario_id: text('scenario_id'),
  description: text('description'),
  CreatedAt: timestamp('CreatedAt').defaultNow(),
  UpdatedAt: timestamp('UpdatedAt').defaultNow(),
  module: text('module').default('Sales & Operations Planning'),
  Status: text('Status'),
  customer: text('customer').notNull(),
  site: text('site').notNull(),
  sku: text('sku').notNull(),
  Jan: integer('Jan'),
  Feb: integer('Feb'),
  Mar: integer('Mar'),
  Apr: integer('Apr'),
  May: integer('May'),
  Jun: integer('Jun'),
  Jul: integer('Jul'),
  Aug: integer('Aug'),
  Sep: integer('Sep'),
  Oct: integer('Oct'),
  Nov: integer('Nov'),
  Dec: integer('Dec'),
  material_cost_pu: integer('material_cost_pu'),
  inv_hold_cost_pupm: integer('inv_hold_cost_pupm'),
  stockout_cost_pupm: integer('stockout_cost_pupm'),
  hiring_cost_pw: integer('hiring_cost_pw'),
  firing_cost_pw: integer('firing_cost_pw'),
  labor_hrs_pu: integer('labor_hrs_pu'),
  worker_cost_pm: integer('worker_cost_pm'),
  overtime_cost_phr: integer('overtime_cost_phr'),
  outsourcing_cost_pu: integer('outsourcing_cost_pu'),
  max_work_hrs_pwpm: integer('max_work_hrs_pwpm'),
  max_overtime_hrs_pwpm: integer('max_overtime_hrs_pwpm'),
  inventory_start: integer('inventory_start'),
  inventory_end: integer('inventory_end'),
  backlog_start: integer('backlog_start'),
  backlog_end: integer('backlog_end'),
  num_workers_start: integer('num_workers_start'),
  min_end_workers: integer('min_end_workers'),
  max_end_workers: integer('max_end_workers')
});


export async function getAllScenarios(
  search: string,
  offset: number | null
): Promise<{
  scenarios: SelectScenario[]; // Replace SelectScenario with the appropriate type for your scenarios
  newOffset: number | null;
  totalScenarios: number;
}> {
  // If there's a search term, search the entire table
  if (search) {
    return {
      scenarios: await db
        .select()
        .from(scenarios)
        .where(ilike(scenarios.name, `%${search}%`)) // Adjust field name based on your schema
        .limit(1000),
      newOffset: null,
      totalScenarios: 0
    };
  }

  // If offset is null, return empty results
  if (offset === null) {
    return { scenarios: [], newOffset: null, totalScenarios: 0 };
  }

  // Get the total count of scenarios
  let totalScenariosResult = await db
    .select({ count: count() })
    .from(scenarios);
  let totalScenarios = totalScenariosResult[0]?.count || 0;

  // Get the paginated scenarios
  let paginatedScenarios = await db
    .select()
    .from(scenarios)
    .limit(5)
    .offset(offset);

  // Determine the new offset for the next page
  let newOffset = paginatedScenarios.length >= 5 ? offset + 5 : null;

  return {
    scenarios: paginatedScenarios,
    newOffset,
    totalScenarios
  };
}

// export async function getAllScenarios() {
//   return [
//     {
//       id: 'SCEN-1',
//       title: "You can't compress the program without quantifying the open-source SSD pixel!",
//       status: 'in progress',
//       label: 'documentation',
//       priority: 'medium'
//     }
//   ];
// }
export async function getProducts(
  search: string,
  offset: number
): Promise<{
  products: SelectProduct[];
  newOffset: number | null;
  totalProducts: number;
}> {
  // Always search the full table, not per page
  if (search) {
    return {
      products: await db
        .select()
        .from(products)
        .where(ilike(products.name, `%${search}%`))
        .limit(1000),
      newOffset: null,
      totalProducts: 0
    };
  }

  if (offset === null) {
    return { products: [], newOffset: null, totalProducts: 0 };
  }

  let totalProducts = await db.select({ count: count() }).from(products);
  let moreProducts = await db.select().from(products).limit(5).offset(offset);
  let newOffset = moreProducts.length >= 5 ? offset + 5 : null;

  return {
    products: moreProducts,
    newOffset,
    totalProducts: totalProducts[0].count
  };
}

export async function deleteProductById(id: number) {
  await db.delete(products).where(eq(products.id, id));
}
