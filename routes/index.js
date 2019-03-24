module.exports = async (ctx, next) => {
    await ctx.render('index.html', {
        title: 'index'
    });
    await next();
};
