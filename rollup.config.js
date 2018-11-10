import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/index.js',
    output: {
        indent: '\t',
        format: 'umd',
        name: 'XType',
        file: 'dist/xtype-svg.js'
    },
    treeshake: true,
    external: [],
    plugins: [
        resolve({
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        })
    ]
};
