let arc = require('@architect/functions')
let data = require('@begin/data')
exports.handler = async function http (req) {
    if ('pathParameters' in request&& 'path' in request.pathParameters && request.pathParameters.query!=null ){
        query=request.pathParameters.query
    }
    go =await data.get({table:'links',key:query})
    if (go){
        //建一个info
        info=await data.set({table:'infos',data:req})
        nowsec = (Date.now() / 1000) 
        //取stat
        stat=await data.get({table:'stats',key:query})
        if(!stat){
            stat={table:'stats',key:body.path,data:[],password:'Mzltest@233'}
            console.warn(`{$query} didnt found on stat,so we created a new one.that shouldnt happen.`)
        }
        stat.data=stat.data.append({key:info.key,ts:nowsec})
        res =await data.set(stat)
        return {ok:True,data:go.redir}
    }else{
        return {ok:false,err:'no such key in link'}
    }
}