import { getHeapStatistics } from 'v8'

import { runSteps } from '../../lib'

export const packageCompileCjs = () => {
  const pkg = process.env.INIT_CWD

  if (process.argv.find((arg) => arg === '-v')) {
    console.log(`Heap Size: ${getHeapStatistics().total_available_size.toLocaleString()}`)
  }

  return runSteps('Package Compile [CJS]', [['tsc', ['--build', `${pkg}/.tsconfig.build.cjs.json`]]])
}
