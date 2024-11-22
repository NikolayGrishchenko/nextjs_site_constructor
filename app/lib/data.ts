import { sql } from '@vercel/postgres';
import {
    LandingTable
} from './definitions.';

const ITEMS_PER_PAGE = 10;

export async function fetchFilteredInvoices(
    query: string,
    currentPage: number,
  ) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const list = await sql<LandingTable>`
        SELECT *
        FROM landing
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
  
      return list.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch landings.');
    }
  }