let arc = require('@architect/functions')
let data = require('@begin/data')
exports.handler = async function http (req) {
    if ('pathParameters' in request&& 'id' in request.pathParameters && request.pathParameters.query!=null ){
        query=request.pathParameters.query
    }
    stat =await data.get({table:'infos',key:query})
    if (stat){
        return {ok:true,data:stat}
    }else{
        return {ok:false,err:'no such key in info'}
    }
}