import fs from 'fs';
import { parse } from 'csv-parse/sync';

/**
 * Reads product names from a CSV file
 * @param filePath - Absolute path to the CSV file
 * @returns array of product names
 */
export function getProductNamesFromCSV(filePath: string): string[] {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });

  return records.map((row: any) => row.productName.trim());
}
