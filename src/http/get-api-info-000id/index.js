let arc = require('@architect/functions')
let data = require('@begin/data')
exports.handler = async function http (request) {
    if ('pathParameters' in request&& 'id' in request.pathParameters && request.pathParameters.id!=null ){
        query=request.pathParameters.id
    }
    stat =await data.get({table:'infos',key:query})
    if (stat){
        return {ok:true,data:stat}
    }else{
        return {ok:false,err:'no such key in info'}
    }
}