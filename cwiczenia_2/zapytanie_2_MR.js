printjson(db.people.mapReduce(
  function() {
    this.credit.forEach(function(c) {
      emit(c.currency, parseFloat(c.balance))
    })
  },
  function(key, values) {return Array.sum(values)},
  {out: 'people_balances_sum_by_currency'}))

printjson(db.people_balances_sum_by_currency.find().toArray())
