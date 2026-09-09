import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'
import { spawnSync } from 'node:child_process'

const require = createRequire(import.meta.url)
const root = fileURLToPath(new URL('../', import.meta.url))
const output = mkdtempSync(join(tmpdir(), 'literalkrishu-cloud-test-'))
let status = 1
try {
    const compilation = spawnSync(process.execPath, [require.resolve('typescript/lib/tsc.js'),
        'components/interactive/cloud-physics.ts', 'components/interactive/cloud-physics.test.ts',
        '--outDir', output, '--module', 'commonjs', '--target', 'es2020', '--esModuleInterop', '--skipLibCheck'],
        { cwd: root, stdio: 'inherit' })
    if (compilation.error) throw compilation.error
    status = compilation.status ?? 1
    if (status === 0) {
        const result = spawnSync(process.execPath, [resolve(output, 'cloud-physics.test.js')], { cwd: root, stdio: 'inherit' })
        if (result.error) throw result.error
        status = result.status ?? 1
    }
} finally {
    rmSync(output, { recursive: true, force: true })
}
process.exitCode = status
