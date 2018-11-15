import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';


export default {
  external: ['for-each', 'warning', 'has', 'string.prototype.trim'],
  plugins: [
    nodeResolve(),
    commonjs()
  ]
};
