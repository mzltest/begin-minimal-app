let arc = require('@architect/functions')
let data = require('@begin/data')
exports.handler = async function http (req) {
    let parseBody = arc.http.helpers.bodyParser
    body=parseBody(req)
    old =await data.get({table:'links',key:body.path})
    if (old){
        if (old.password!=body.password){
            return {ok:false,err:'Existing link but wrong password'}
        }
    }
    resdata = await data.set({table:'links',key:body.path,redir:body.url,password:body.password})
    resdata = await data.set({table:'stats',key:body.path,data:[],password:body.password})
    return {ok:true,data:resdata}
}