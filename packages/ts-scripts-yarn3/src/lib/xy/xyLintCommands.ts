import chalk from 'chalk'
import yargs from 'yargs'

import { cycle, fix, lint, lintProfile, publint, relint, sonar } from '../../actions'

export const xyLintCommands = (args: yargs.Argv) => {
  return args
    .command(
      'cycle [package]',
      'Cycle - Check for dependency cycles',
      (yargs) => {
        return yargs.positional('package', {
          describe: 'Specific package to check',
        })
      },
      (argv) => {
        const start = Date.now()
        if (argv.verbose) console.log('Cycle')
        process.exitCode = cycle()
        console.log(chalk.blue(`Finished in ${Date.now() - start}ms`))
      },
    )
    .command(
      'lint [package]',
      'Lint - Run Eslint',
      (yargs) => {
        return yargs.positional('package', {
          describe: 'Specific package to check',
        })
      },
      async (argv) => {
        if (argv.verbose) console.log('Lint')
        const start = Date.now()
        process.exitCode = argv.fix ? fix() : argv.profile ? lintProfile() : await lint({ pkg: argv.package as string })
        console.log(chalk.blue(`Finished in ${Date.now() - start}ms`))
      },
    )
    .command(
      'fix [package]',
      'Fix - Run Eslint w/fix',
      (yargs) => {
        return yargs.positional('package', {
          describe: 'Specific package to check',
        })
      },
      (argv) => {
        const start = Date.now()
        if (argv.verbose) console.log('Fix')
        process.exitCode = fix()
        console.log(chalk.blue(`Finished in ${Date.now() - start}ms`))
      },
    )
    .command(
      'relint [package]',
      'Relint - Clean & Lint',
      (yargs) => {
        return yargs.positional('package', {
          describe: 'Specific package to relint',
        })
      },
      (argv) => {
        if (argv.verbose) console.log('Relinting')
        const start = Date.now()
        process.exitCode = relint()
        console.log(chalk.blue(`Finished in ${Date.now() - start}ms`))
      },
    )
    .command(
      'publint [package]',
      'Publint - Run Publint',
      (yargs) => {
        return yargs.positional('package', {
          describe: 'Specific package to publint',
        })
      },
      async (argv) => {
        if (argv.verbose) console.log('Publint')
        const start = Date.now()
        process.exitCode = await publint({ pkg: argv.package as string, verbose: !!argv.verbose })
        console.log(chalk.blue(`Finished in ${Date.now() - start}ms`))
      },
    )
    .command(
      'sonar',
      'Sonar - Run Sonar Check',
      (yargs) => {
        return yargs
      },
      (argv) => {
        const start = Date.now()
        if (argv.verbose) console.log('Sonar Check')
        process.exitCode = sonar()
        console.log(chalk.blue(`Finished in ${Date.now() - start}ms`))
      },
    )
}
