printjson(db.people.insertOne({
    sex: 'Male',
    first_name: 'Aleksander',
    last_name: 'Bella',
    job: 'Software Engineer',
    email: 's24254@pjwstk.edu.pl',
    location: {
        city: 'Warsaw',
        address: {streetname: 'plac Defilad', streetnumber: '1'}
   },
    description: 'data science student',
    height: '195.00',
    weight: '100.00',
    birth_date: '1995-08-30T09:35:37Z',
    nationality: 'Poland',
    credit: [
        {
            type: 'jcb',
            number: '1234660999441234',
            currency: 'PLN',
            balance: '10000.00'
       }
    ]
}))