app.factory('app_factory', function() {

    return {

        // ------------------------------------------
        // Init
        // ------------------------------------------
        edit_mode: false,


        // ------------------------------------------
        // Firebase
        // ------------------------------------------
        firebase_root: 'https://optinomix.firebaseio.com/',



        // ------------------------------------------
        // Some Data-Arrays
        // ------------------------------------------

        patients: [{
            "address1": "Haldenstrasse 7",
            "address2": " ",
            "age": 35,
            "birthdate": "1979-01-01T00:00:00.000Z",
            "birthday": "1979-01-01",
            "cisPid": 2346323,
            "city": "Oberrieden",
            "country": "CH",
            "email": "beat@ottiger.org",
            "firstName": "Beat",
            "fourLetterCode": "BOTO",
            "gender": "male",
            "lastName": "Ottiger",
            "notes": "Just me myself and I",
            "phoneHome": "043 - 305 78 80",
            "phoneMobile": "079 - 635 85 84",
            "title": "Dipl. Psych.",
            "zipCode": "8942"
        }, {
            "address1": "Somewhere",
            "address2": " ",
            "age": 45,
            "birthdate": "1979-01-01T00:00:00.000Z",
            "birthday": "1979-01-01",
            "cisPid": 2346323,
            "city": "Oberrieden",
            "country": "CH",
            "email": "beat@ottiger.org",
            "firstName": "Martina",
            "fourLetterCode": "MSZI",
            "gender": "female",
            "lastName": "Hingis",
            "notes": "Once I played tennis.",
            "phoneHome": "043 - 305 78 80",
            "phoneMobile": "079 - 635 85 84",
            "title": "",
            "zipCode": "8942"
        }],

        messages_array: [{
            "datum": "07.07.2014",
            "message": "Ein wunderschöner Tag",
            "name": "Beat Ottiger"
        }, {
            "datum": "08.07.2014",
            "message": "So ein schöner Tag",
            "name": "Tom"
        }, {
            "datum": "18.07.2014",
            "message": "Testnachricht",
            "name": "Ottiger"
        }, {
            "datum": "07.08.2014",
            "message": "Love me tender",
            "name": "Elvis Presley"
        }],

        modules_array: [{
            "name": "Beck-Depressions-Inventar (BDI-II)",
            "description": "Schweregrad depressiver Symptomatik im klinischen Bereich, 21 Aussagen."
        }, {
            "name": "Stress- und Coping-Inventar (SCI)",
            "description": "Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping). Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien"
        }]




    };
});