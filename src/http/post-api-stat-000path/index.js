let arc = require('@architect/functions')
let data = require('@begin/data')
exports.handler = async function http (req) {
    if ('pathParameters' in request&& 'path' in request.pathParameters && request.pathParameters.query!=null ){
        query=request.pathParameters.query
    }
    let parseBody = arc.http.helpers.bodyParser
    body=parseBody(req.body)
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