const connection = require( '../database/connection' );
const { andWhereRaw } = require( '../database/connection' );

module.exports = {
    async create( request, response ) {
        const { id } = request.body;

        const ongs = await connection( 'ongs' )
            .where( 'id', id )
            .select( 'name' )
            .first();

        if ( !ongs ) {
            return response.status( 400 ).json( { error: "Não existe uma ong com essa id" } );
        }
        return response.json( ongs );
    }



}