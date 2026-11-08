import { describe, expect, it } from 'vitest'
import { cn } from '@/lib/utils'

// Placeholder: proves the test runner and the "@/" alias both work.
describe('test setup', () => {
  it('merges class names', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
  })
})
