printjson(db.people.aggregate([
  {$unwind: '$credit'},
  {$group: {
    _id: '$credit.currency',
    balance_sum: {$sum: {$toDouble: '$credit.balance'}}
  }}
]).toArray())
