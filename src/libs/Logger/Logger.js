const LocalStorageKey = 'logger'

// Initialize logger levels support
const loggerLevels = (
  JSON.parse(window?.localStorage.getItem(LocalStorageKey)) || []
).reduce((acc, cur) => {
  acc[cur] = true
  return acc
}, {})

if (loggerLevels['info']) {
  console.info(
    '[Logger]',
    'Logger enabled levels:',
    Object.keys(loggerLevels).join(', '),
  )
}

/**
 * A logging component that wraps console.log. It allows enable/disable logging based on level.
 *
 * @example
 * import { Logger } from '@/libs'
 * const log = Logger('somePrefix')
 *
 * log.info('an info log') // produces info log
 * log.warn('a warn log') // produces warn log
 */
export const Logger = (namespace = '') => {
  return {
    info: (...args) => {
      if (loggerLevels['info']) {
        console.info(`[${namespace}]`, ...args)
      }
    },
    debug: (...args) => {
      if (loggerLevels['debug']) {
        console.debug(`[${namespace}]`, ...args)
      }
    },
    warn: (...args) => {
      if (loggerLevels['warn']) {
        console.warn(`[${namespace}]`, ...args)
      }
    },
    error: (...args) => {
      if (loggerLevels['error']) {
        console.error(`[${namespace}]`, ...args)
      }
    },
  }
}
