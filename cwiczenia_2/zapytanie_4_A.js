printjson(db.people.aggregate([
  {$set: {bmi: {$pow: [{$divide: [{$toDouble: '$weight'}, {$toDouble: '$height'}]}, 2]}}},
  {$group: {
    _id: '$nationality',
    bmi_avg: {$avg: '$bmi'},
    bmi_min: {$min: '$bmi'},
    bmi_max: {$max: '$bmi'}
  }}
]).toArray())
