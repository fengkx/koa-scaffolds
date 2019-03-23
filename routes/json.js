module.exports = async (ctx, next) => {
    ctx.type = 'application/json';
    ctx.body = ctx.request.body;
    await next();
};
