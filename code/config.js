const config = {
    //dbUrl: process.env.DB_URL || 'mongodb+srv://ups:12345@cluster0.pjyad.gcp.mongodb.net/ups?retryWrites=true&w=majority',
    dbUrl: process.env.DB_URL || 'mongodb+srv://ups:ups2021@clusteru3taller02.rakpv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/',
    filesRoute: process.env.FILES_ROUTE || 'files'
}

module.exports = config