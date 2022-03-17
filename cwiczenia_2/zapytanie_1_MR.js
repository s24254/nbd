printjson(db.people.mapReduce(
  function() {
    emit(this.sex,
      {
        'weight': parseFloat(this.weight),
        'height': parseFloat(this.height)
      })
  },
  function(key, values) {
    return {
      'weight_avg': Array.avg(values.map(function({weight, _}) {return weight})),
      'height_avg': Array.avg(values.map(function({_, height}) {return height}))
    }
  },
  {out: 'people_weight_and_height_avg_by_sex'}))

printjson(db.people_weight_and_height_avg_by_sex.find().toArray())
