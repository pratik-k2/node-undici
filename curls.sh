# ================
# Curls for params
# ================

#POST request
curl -X POST -H 'Content-Type: application/json' -d '{"name": "Subject1", "age": 30}' 'http://localhost:3000/records/1'

#GET request
curl 'http://localhost:3000/records/1'

#PUT request
curl -X PUT -H 'Content-Type: application/json' -d '{"name": "Subject1", "age": 35}' 'http://localhost:3000/records/1'

#DELETE request
curl -X DELETE 'http://localhost:3000/records/1'


# ===============
# Curls for query
# ===============

#POST request
curl -X POST -H 'Content-Type: application/json' -d '{"name": "Subject2", "age": 50}' 'http://localhost:3000/records-query?id=2'

#GET request
curl 'http://localhost:3000/records-query?id=2'

#PUT request
curl -X PUT -H 'Content-Type: application/json' -d '{"name": "Subject2", "age": 55}' 'http://localhost:3000/records-query?id=2'

#DELETE request
curl -X DELETE 'http://localhost:3000/records-query?id=2'