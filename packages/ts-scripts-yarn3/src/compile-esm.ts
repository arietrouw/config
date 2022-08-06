#!/usr/bin/env node

import { runSteps } from './lib'

runSteps('Compile [ESM]', [['yarn', 'workspaces foreach -ptA exec tsc -p ./tsconfig.build.esm.json']])
