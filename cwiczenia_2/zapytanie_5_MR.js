printjson(db.people.mapReduce(
  function() {
    this.credit.forEach(function(c) {
      emit(c.currency, parseFloat(c.balance))
    })
  },
  function(key, values) {
    return {
      'balance_avg': Array.avg(values),
      'balance_sum': Array.sum(values)
    }
  },
  {
    query: {sex: 'Female', nationality: 'Poland'},
    out: 'people_balance_sum_avg_grouped_by_currency_filtered_by_sex_nationality'
  }
))

printjson(db.people_balance_sum_avg_grouped_by_currency_filtered_by_sex_nationality.find().toArray())
