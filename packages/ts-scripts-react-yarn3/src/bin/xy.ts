#!/usr/bin/env node

import { xyReact } from '../lib'

xyReact()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
