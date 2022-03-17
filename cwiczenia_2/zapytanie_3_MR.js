printjson(db.people.mapReduce(
  function() {emit(this.job, 1)},
  function(key, values) {return Array.sum(values)},
  {out: 'people_job_distinct_with_count'}))

printjson(db.people_job_distinct_with_count.find().toArray())
