// import getPokemon from 'json-pokemon/getPokemon';
import pokemon from 'json-pokemon';

export default (req, res) => {
    let result = [{"error": "Could not find Pokemon with that type."}];

    // let pokemon = getPokemon(req.query.type);

    for(let i = 0; i < pokemon.length; i++) {
        for(let k = 0; k < pokemon[i].typeList.length; k++) {
            if(pokemon[i].typeList[k] == req.query.type) {
                result.push(pokemon[i]);
            }
        }
    }

    // pokemon.forEach((value) => {
    //     if(value.type == req.query.type) {
    //         result = value;
    //     }
    // });

    res.json(result);
}