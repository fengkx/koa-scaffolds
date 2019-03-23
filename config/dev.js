module.exports = {
    port: process.env.PORT || 3000,
    listenInaddrAny: process.env.ANYADDR || true,
    appKeys: process.env.APP_KEYS || ['some secret']
};
