printjson(db.people.aggregate([
  {$match: {sex: 'Female', nationality: 'Poland'}},
  {$unwind: '$credit'},
  {$group: {
    _id: '$credit.currency',
    balance_avg: {$avg: {$toDouble: '$credit.balance'}},
    balance_sum: {$sum: {$toDouble: '$credit.balance'}}
  }}
]).toArray())
