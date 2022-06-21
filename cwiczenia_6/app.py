import riak

client = riak.RiakClient(pb_port=8087)
bucket = client.bucket("s24254")

print('ADD DOCUMENT')
w = {"city": "Warszawa", "price": 1000000, "surroundings": ["school", "shop", "shopping_center"], "isAvailable": False}
print(bucket.new("w", data=w).store().key)

print('GET DOCUMENT')
doc = bucket.get("w")
print(doc.data)

print('UPDATE DOCUMENT')
doc.data["isAvailable"] = True
print(doc.store().key)

print('GET DOCUMENT')
doc = bucket.get("w")
print(doc.data)

print('DELETE DOCUMENT')
print(doc.delete().key)

print('GET DELETED DOCUMENT')
doc = bucket.get("w")
print(doc.data)
