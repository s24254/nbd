printjson(db.people.mapReduce(
  function() {emit(this.nationality, Math.pow(parseFloat(this.weight) / parseFloat(this.height), 2))},
  function(key, values) {
    return {
      'bmi_avg': Array.avg(values),
      'bmi_min': Math.min.apply(Math, (values)),
      'bmi_max': Math.max.apply(Math, (values))
    }
  },
  {out: 'people_bmi_avg_min_max_by_nationality'}))

printjson(db.people_bmi_avg_min_max_by_nationality.find().toArray())
