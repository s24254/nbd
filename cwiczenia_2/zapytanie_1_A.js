printjson(db.people.aggregate([
  {$group: {
    _id: '$sex',
    weight_avg: {$avg: {$toDouble: '$weight'}},
    height_avg: {$avg: {$toDouble: '$height'}}
  }}
]).toArray())
