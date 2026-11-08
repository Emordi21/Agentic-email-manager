import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Placeholder tests: prove the test runner and the "@/" alias work.
describe('test setup', () => {
  it('merges conflicting class names', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
  })

  it('Button lets a custom class override the default (uses our cn)', () => {
    const html = renderToStaticMarkup(createElement(Button, { className: 'h-20' }, 'Hi'))
    expect(html).toContain('h-20')
    expect(html).not.toMatch(/\bh-8\b/) // default height class was merged away
  })
})
