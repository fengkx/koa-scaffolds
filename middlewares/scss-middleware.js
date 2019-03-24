const path = require('path');
const sass = require('sass');

module.exports = async (ctx, next) => {
    if (/\.css$/.test(ctx.path)) {
        const { css } = sass.renderSync({
            file: path.join(
                __dirname,
                '../public/css',
                ctx.path.match(/\w+\.css/)[0].replace('css', 'scss')
            )
        });
        ctx.type = 'text/css';
        ctx.body = css.toString();
    }

    await next();
};
