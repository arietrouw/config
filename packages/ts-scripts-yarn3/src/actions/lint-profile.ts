import { runSteps } from '../lib'

export const lintProfile = () => {
  return runSteps('Lint Profile', [['node', ['./node_modules/eslint/bin/eslint.js', '.'], { env: { ...process.env, TIMING: '1' } }]])
}
