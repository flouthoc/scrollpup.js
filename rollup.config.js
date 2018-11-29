import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify-es'
import pkg from './package.json'

export default [{
  entry: 'src/index.js',
  targets: [{
    dest: pkg.main,
    format: 'umd',
    name: 'scrollpup'
  }],
  plugins: [
    buble({
      exclude: ['node_modules/**']
    })
  ]
}, {
  entry: 'src/index.js',
  targets: [{
    dest: pkg.min,
    format: 'umd',
    name: 'scrollpup'
  }],
  plugins: [
    resolve(),
    commonjs(),
    buble({
      exclude: ['node_modules/**']
    }),
    uglify()
  ]
}]
