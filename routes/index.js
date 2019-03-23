module.exports = async (ctx, next) => {
    ctx.type = 'text/html';
    ctx.body = 'Hello index';
    await next();
};
