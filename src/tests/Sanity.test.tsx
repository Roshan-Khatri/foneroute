
import { describe, it, expect } from 'vitest';

describe('Sanity environment variables', () => {
  it('should have a project ID and dataset', () => {
    expect(import.meta.env.VITE_SANITY_PROJECT_ID).toBeDefined();
    expect(import.meta.env.VITE_SANITY_DATASET).toBeDefined();
  });
});
