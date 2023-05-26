let arc = require('@architect/functions')
let data = require('@begin/data')
exports.handler = async function http (request) {
    if ('pathParameters' in request&& 'path' in request.pathParameters && request.pathParameters.path!=null ){
        query=request.pathParameters.path
    }
    let parseBody = arc.http.helpers.bodyParser
    body=parseBody(request)
    stat =await data.get({table:'stats',key:query})
    if (stat){
        if (stat.password!=body.password){
            return {ok:false,err:'Existing stat but wrong password'}
        }
        return {ok:true,data:stat}
    }else{
        return {ok:false,err:'no such key in stat'}
    }
}