import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
  
  export function readCsv(filePath: string): Record<string, string>[] {
    const content = readFileSync(resolve(filePath), 'utf-8');
    
    const [headerLine, ...rows] = content.trim().split('\n');
    const headers = headerLine.split(',').map(h => h.trim());
  
    return rows.map(row => {
      const values = row.split(',').map(v => v.trim());
      return Object.fromEntries(headers.map((h, i) => [h, values[i]]));
    });
  }
  