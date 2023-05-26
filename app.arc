@app
mboard

@http
get /api/go/:path
post /api/stat/:path
get /api/info/:id
post /api/create


@tables
data
  scopeID *String
  dataID **String
  ttl TTL

@aws
timeout 30