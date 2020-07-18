const connection = require( '../database/connection' );
module.exports = {
    async list( request, response ) {
        const ong_atual = request.headers.authorization;
        const listagem = await connection( 'incidents' ).where( 'ong_id', ong_atual )
            .select( '*' );

        return response.json( listagem );

    }

}