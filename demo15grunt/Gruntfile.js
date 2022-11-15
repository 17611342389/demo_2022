module.exports = function(grunt) {
    // 任务配置
    grunt.initConfig({
        // 配置concat任务
        concat: {
            options: {
                // 配置合并的文件内容之间的分隔符
                separator: ';'
            },
            dist: {
                // 要合并的文件
                src: ['src/a.js', 'src/b.js', 'src/c.js'],
                // 合并为哪个文件
                dest: 'dist/all.js'
            }
        }
    });
    // 加载插件
    grunt.loadNpmTasks('grunt-contrib-concat');
}