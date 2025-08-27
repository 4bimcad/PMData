
  // ==== SAMPLE DATA ====
  const PROJECTS = [
  {
    "name": "Gold Project in Cusco PAN KOTSKYI",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.2030105,
    "lng": -70.3842483,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios MARUMI I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.4471497,
    "lng": -68.9447903,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios DON CARLO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.5375404,
    "lng": -69.1564763,
    "area": "100.01 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios ANA LUCIA IV",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.5375349,
    "lng": -69.1656867,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios NUEVO TRIUNFO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.5918213,
    "lng": -69.1104811,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios CRESPIN",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.4742445,
    "lng": -69.1472413,
    "area": "200.01 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios RONY GONZALO UNO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.4832823,
    "lng": -69.1564492,
    "area": "200.01 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios ORION 6",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.483271,
    "lng": -69.174855,
    "area": "100.01 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios KELY 1",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.4956356,
    "lng": -69.2041942,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios KELY 1-A",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.4956286,
    "lng": -69.2133962,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios GEDEON OTILIANO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.5013445,
    "lng": -69.1932741,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CHIMBOYA LC",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.814728623999995,
    "lng": -70.84100178800003,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco SUMAC PAMPA DORADA II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.211427077999986,
    "lng": -70.49501781200001,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash SEN SEN B",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.631276114000002,
    "lng": -77.90630011799999,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa TAMBOJASA MINING",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.636517181999976,
    "lng": -73.96443509699998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno YANETRC 01",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.74146922,
    "lng": -70.61470613699998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MNA MACUSAN LA 3",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.024421754999992,
    "lng": -70.58345680399998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Junin DIANA 1980",
    "mineral": [
      "Cu"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.623295084000006,
    "lng": -76.16005244600001,
    "area": "5.9897 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huancavelica DON CARLOS",
    "mineral": [
      "Zn"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -11.995627019999972,
    "lng": -75.036956444,
    "area": "40.0001 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Lima LA NEGRATINA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -11.767388185000016,
    "lng": -76.85557158699999,
    "area": "60 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Pasco TK COL 4",
    "mineral": [
      "Cu"
    ],
    "region": "PASCO",
    "status": "Active",
    "lat": -10.418270388999986,
    "lng": -76.52941340500001,
    "area": "5.9915 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Lima JUAN JOSE 11111",
    "mineral": [
      "Pb"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -10.813165334000018,
    "lng": -77.41649224600002,
    "area": "299.9995 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huancavelica ROBIN3",
    "mineral": [
      "Cu"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -13.740076535000014,
    "lng": -75.29599077300003,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in San Martin CANTERA PACHIZA 1",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "SAN MARTIN",
    "status": "Active",
    "lat": -7.287745803000007,
    "lng": -76.76613551399998,
    "area": "0.5816 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Junin LA GREGORIA I",
    "mineral": [
      "Cu"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.64219013799999,
    "lng": -75.247704452,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ica PAMPA DE MAGALLANES 8",
    "mineral": [
      "Cu"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -14.30070490600002,
    "lng": -75.26889390100001,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Ayacucho DAVID UTCUNI",
    "mineral": [
      "Pb"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -15.248310288000027,
    "lng": -74.07809573399999,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ayacucho SUYAMARCA 78",
    "mineral": [
      "Cu"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -14.801382316000002,
    "lng": -73.36459880500001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ica PAMPA DE MAGALLANES 6",
    "mineral": [
      "Cu"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -14.255451795,
    "lng": -75.30592131200001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Piura SYS IV",
    "mineral": [
      "Cu"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -6.209483766999995,
    "lng": -80.77630624300002,
    "area": "999.99 ha",
    "verified": true
  },
  {
    "name": "Other Project in Ancash GUADALUPE UNO",
    "mineral": [
      "Other"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.35205355300002,
    "lng": -78.196112089,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios BRUNO ALCIDES I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.56802514399999,
    "lng": -69.13060090900001,
    "area": "300.014 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco PUÑO DE ORO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.47268674899999,
    "lng": -71.91260408300002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Cajamarca GRAN TANTAHUATAY",
    "mineral": [
      "Pb"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -6.683463214000028,
    "lng": -78.677647745,
    "area": "11754.4241 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ISABEL MARGOT",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.264427134000016,
    "lng": -71.95620802799999,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TICAPATA DORADO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.902623808999977,
    "lng": -69.435036115,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco YOLITA UNO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.339967253999989,
    "lng": -71.679278511,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco XIN YI CALDERON",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.209004581999976,
    "lng": -70.86403379799998,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa DAMLA 1",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.610126834000027,
    "lng": -71.173128233,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno FORTALEZA DE ORO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.002131540999985,
    "lng": -69.40744298300001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Moquegua DEL CARMEN",
    "mineral": [
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.74999815000001,
    "lng": -71.026228204,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ESTRELLITA III",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.409477317999972,
    "lng": -71.91178116100002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa CAMILA PRIMERA 2019",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.600907472000015,
    "lng": -71.19167594499999,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad HUACRACANCHA 04",
    "mineral": [
      "Zn"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.09993268300002,
    "lng": -78.26217766000002,
    "area": "899.9835 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CORI 32",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.65647484599998,
    "lng": -70.09102570499999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MACUSANÃ YELLOWCAKE LÃTÃO CORANÃ 1",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.04237682500002,
    "lng": -70.60209719300002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa VALE729",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.187609208000026,
    "lng": -71.48203324299999,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Gold Project in TIERRA HERMOSA 2020",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "/ PUNO",
    "status": "Active",
    "lat": -15.186853394000025,
    "lng": -69.16757651199998,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ROSALINDA HC",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.75686853899998,
    "lng": -69.851009621,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SALVIANI 2",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.001373311000007,
    "lng": -70.47396042899999,
    "area": "800.0245 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MOSERVIN MINING",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.19558569100002,
    "lng": -70.66802080299999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Loreto ELIANA JOSABET",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LORETO",
    "status": "Active",
    "lat": -4.456322423000017,
    "lng": -77.396979353,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CORANI U2",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.847074609000003,
    "lng": -70.57474740200001,
    "area": "1000.0305 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Ancash SANTA MARINA 2",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.088696981999988,
    "lng": -77.97450317699997,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno JS SANTAMARIA I",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.607392650000008,
    "lng": -69.64065022199998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ucayali ALECORI",
    "mineral": [
      "Cu"
    ],
    "region": "UCAYALI",
    "status": "Active",
    "lat": -9.199980455999992,
    "lng": -75.500663186,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PAMPILLA LINDO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.993024735999995,
    "lng": -69.44446506600002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Apurimac COBREORCO 004",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -14.241466542000012,
    "lng": -73.43357467800001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco FRANK MINERO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.444172677999973,
    "lng": -71.81665576900002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa COLORADO DEL SUR 1",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.610603511000022,
    "lng": -71.39017683499998,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno JULIETA 20",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.595367527999997,
    "lng": -69.881201439,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa VETA ORION III",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.170299849999992,
    "lng": -71.735967975,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash PASHPAP SEIS",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -8.736271810000005,
    "lng": -78.01018903599999,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Piura KORINA 1 2023",
    "mineral": [
      "Cu"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -5.832966641999974,
    "lng": -79.37423782500002,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Piura CHURRE CINCO 2025",
    "mineral": [
      "Cu"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.649837962999982,
    "lng": -80.269705348,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa LA REYNA DEL SUR",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.623385282000015,
    "lng": -71.81189516699999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Lambayeque BARITINA 2 2023",
    "mineral": [
      "Cu"
    ],
    "region": "LAMBAYEQUE",
    "status": "Active",
    "lat": -6.800608951000015,
    "lng": -79.398354219,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huancavelica CANTERA RAUMA",
    "mineral": [
      "Cu"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -12.690855746000013,
    "lng": -74.59163121400002,
    "area": "0.7351 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Ancash CANTERA VESIQUE",
    "mineral": [
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.196449464000011,
    "lng": -78.473311658,
    "area": "7.7447 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa PERRICHOLI ESTE",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.195634298000016,
    "lng": -74.61828433300002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa CERRO VERDE DOS",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.322320751999996,
    "lng": -74.69258052200001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in La Libertad LAJAS NEGRAS DE LAJON",
    "mineral": [
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.736897327000008,
    "lng": -78.53403679799999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash MACATE IV",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -8.826672135000024,
    "lng": -78.018546286,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Piura DON SEBASTIAN XI",
    "mineral": [
      "Pb"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -5.554835910000008,
    "lng": -80.783307659,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA KM 39+400 RUTA18",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.85496611100001,
    "lng": -69.82033862499998,
    "area": "0.1971 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MINERA JAPUMAYO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.344226330000026,
    "lng": -70.91121568599999,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Junin MARITA CATALINA",
    "mineral": [
      "Cu"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.849848183999995,
    "lng": -75.50495652500001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Moquegua VALE741",
    "mineral": [
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.999947213999974,
    "lng": -71.31056741399999,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno HERRADURA 1",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.264218328000029,
    "lng": -70.35030755899999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in La Libertad RVK 10",
    "mineral": [
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.76385043800002,
    "lng": -78.50669657100002,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MINAT GOLD 5",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.219163891999983,
    "lng": -71.96487643,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno HUAÃ‘ARAYA DE ORO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.246509839999987,
    "lng": -69.21321001199999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa SAN FRANCISCO MRH",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.64716843399998,
    "lng": -71.08027102800003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno FLOR DE LIZ DE ORO ARMAPAMPA 7",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.16479900600001,
    "lng": -69.4540637,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco PUNTO AZUL I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.006455690999983,
    "lng": -71.32332041299998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PATARANI I MILAGROS",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.793127684000012,
    "lng": -69.82338790699998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno NUEVO AMANECER DE ORO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.738880327999992,
    "lng": -69.82319817400003,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ANQASMAYO II",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.29163001500001,
    "lng": -70.68009318700001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa SABANCAYA 5",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.40839930300001,
    "lng": -71.67779123000003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Junin DON MARIO 007",
    "mineral": [
      "Zn"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -12.410510939999996,
    "lng": -75.50601289399998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Lambayeque EL PEROL I",
    "mineral": [
      "Au"
    ],
    "region": "LAMBAYEQUE",
    "status": "Active",
    "lat": -6.665678091000018,
    "lng": -79.633954216,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios JEANNE LINDA XXXIII-A",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.719959657000004,
    "lng": -69.98730857700002,
    "area": "400.0165 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Cajamarca AAAASA",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.175469447000012,
    "lng": -78.33811410099997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ayacucho AURISUR",
    "mineral": [
      "Zn"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -15.611531789000026,
    "lng": -74.06345620899998,
    "area": "3.6609 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PAULA 25006",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.521887033999974,
    "lng": -70.12448818299998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Amazonas CANTERA MITOPAMPA",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AMAZONAS",
    "status": "Active",
    "lat": -6.445618466999974,
    "lng": -78.09120010999999,
    "area": "0.3446 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PAULA 25007",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.52208545899998,
    "lng": -70.08701016499998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad ROCA ANTIGUA",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.875467528999991,
    "lng": -79.11340735200002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno HALISA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.237511213999994,
    "lng": -69.157583923,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Cajamarca ENERGIAS VERDES III",
    "mineral": [
      "Zn"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -5.495766876999994,
    "lng": -78.59925433500001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno FORTUNATA MAYRA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.237498302000006,
    "lng": -69.176123152,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco LA ARENOSA DE GUADALUPE UNO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO / APURIMAC",
    "status": "Active",
    "lat": -13.512332085000024,
    "lng": -72.66263483400002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco LA ARENOSA DE GUADALUPE DOS",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO / APURIMAC",
    "status": "Active",
    "lat": -13.53014125200002,
    "lng": -72.63475730900001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Other Project in Piura EL PAPAYO I 2018",
    "mineral": [
      "Other"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.857768924000027,
    "lng": -80.161269393,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad COTRA",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.972184473000027,
    "lng": -78.58704310000002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Piura ACUARIO VIII",
    "mineral": [
      "Cu"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.912392481999973,
    "lng": -80.51294417499997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Ancash EL TESORO DE JULIETA I",
    "mineral": [
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -10.00170678500001,
    "lng": -78.09957860700001,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Amazonas CANTERA COPALLIN",
    "mineral": [
      "Zn",
      "Pb",
      "Ag"
    ],
    "region": "AMAZONAS",
    "status": "Active",
    "lat": -5.465204230999973,
    "lng": -78.44115689900002,
    "area": "0.9807 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Piura PERU MINA",
    "mineral": [
      "Zn"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.414314221999973,
    "lng": -79.99056153599997,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Amazonas CANTERA BOLIVAR",
    "mineral": [
      "Cu"
    ],
    "region": "AMAZONAS",
    "status": "Active",
    "lat": -5.708517312000026,
    "lng": -78.30142277499999,
    "area": "0.4721 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad HUAYLAS",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.990099810999993,
    "lng": -78.55973887900001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Cajamarca NAMORA 3-2018",
    "mineral": [
      "Cu"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.175521827000011,
    "lng": -78.347161551,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Piura NAPTAMI06",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.821850841000014,
    "lng": -80.41381068700002,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Piura NAPTAMI08",
    "mineral": [
      "Cu"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.722215086999995,
    "lng": -80.27864670600002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Piura NAPTAMI10",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.812674730000026,
    "lng": -80.27855233000002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Piura POECHOS 21",
    "mineral": [
      "Pb"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.523346503000028,
    "lng": -80.44110116500002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa TOÃ‘O I 2025",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.40767602400001,
    "lng": -71.73392287299998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa SOL DE AMPATO",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.061435630000005,
    "lng": -72.03736869900001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Apurimac ALVA",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -14.300829727999997,
    "lng": -72.923420481,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Piura VIRGEN DEL CARMEN 2019 A",
    "mineral": [
      "Zn"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.9125224179999805,
    "lng": -80.747450243,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad AURIFERA VALENTINA TA2",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.019292155000016,
    "lng": -78.94042603999998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash GUADALCANAL 777",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.766693529000008,
    "lng": -78.08342539,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Cajamarca CERRO SHOGO ORCO",
    "mineral": [
      "Cu"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.471630439000023,
    "lng": -78.01951843199998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Piura EL Ã‘AÃ‘ITO",
    "mineral": [
      "Pb"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.5404217710000125,
    "lng": -79.66592201700001,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Cajamarca MINERA ADELBERTH",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.273822531999997,
    "lng": -78.165607024,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash EL INGENIERO",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -8.700494489999983,
    "lng": -78.055868546,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Piura FILONES DORADOS II",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.514101337,
    "lng": -80.224774352,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad RIO SECO",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.255874855000002,
    "lng": -78.85622330000001,
    "area": "30.3419 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Cajamarca MAMA VICKY I",
    "mineral": [
      "Pb"
    ],
    "region": "CAJAMARCA / LA LIBERTAD",
    "status": "Active",
    "lat": -7.468357917999981,
    "lng": -79.051793707,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tumbes LAS PEÃ‘AS DE SAN JACINTO",
    "mineral": [
      "Zn"
    ],
    "region": "TUMBES",
    "status": "Active",
    "lat": -3.663948097999992,
    "lng": -80.45970601200003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Junin CALIZA TUPIN",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.343054107,
    "lng": -75.68732927899998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa SUMAQ III",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.314766659999975,
    "lng": -73.137195126,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Loreto PLATANAL 1",
    "mineral": [
      "Cu"
    ],
    "region": "LORETO",
    "status": "Active",
    "lat": -3.933938461000025,
    "lng": -73.378806365,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Cajamarca EL NOSHO",
    "mineral": [
      "Pb"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.426704777999987,
    "lng": -78.056024176,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad HUARAUYAS NÂ°1",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.20339379500001,
    "lng": -78.02337087000001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Cajamarca SAGRADO CORAZON",
    "mineral": [
      "Cu"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.279354076999994,
    "lng": -79.26087828099998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in GUADALUPITO 7",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "",
    "status": "Active",
    "lat": -9.138224659999992,
    "lng": -78.61606367899998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ZARINA IV 2016",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.824799637000012,
    "lng": -70.794473074,
    "area": "399.9965 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SEÃ‘OR DE LOS MILAGROS 2017 I",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.905788248000022,
    "lng": -69.53858819700002,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PLANTA METALURGICA UEA ANA MARIA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.645467226999983,
    "lng": -69.44566717800001,
    "area": "44.8314 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ATENEA 12",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.445501078999996,
    "lng": -69.10206027599997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Other Project in Moquegua CUAJONE NW 2",
    "mineral": [
      "Other"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.981435169999997,
    "lng": -70.79570987699998,
    "area": "999.985 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua ELISA SUR 04",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.052419901999997,
    "lng": -70.93728232799998,
    "area": "899.9855 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua ELISA SUR 03",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.025227341999994,
    "lng": -70.946393742,
    "area": "299.9975 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MI PEQUEÃ‘O YESWILL 2016",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.15042455600002,
    "lng": -70.67165413499998,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios FUNDO GUTIERREZ",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.913921875000028,
    "lng": -70.34577528699998,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Other Project in Tacna GRUPO MORAN I",
    "mineral": [
      "Other"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.858518715999992,
    "lng": -70.28357630900001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Ica BUENA VISTA DE ICA 2024 I",
    "mineral": [
      "Pb"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -14.11960921100001,
    "lng": -75.44470940999997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Ica MAGALLANES III",
    "mineral": [
      "Au"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -14.291768881999984,
    "lng": -75.14834973199999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huancavelica SORASORA",
    "mineral": [
      "Cu"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -13.740145704999977,
    "lng": -75.23124321699999,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno NURIA II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.345878939999976,
    "lng": -69.29676973900001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad DAFARO 2",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.646472915000004,
    "lng": -78.525500577,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huanuco SHARLYN IV",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -8.542628390000004,
    "lng": -77.234831213,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Other Project in Moquegua ELISA SUR 01",
    "mineral": [
      "Other"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.01592158599999,
    "lng": -70.974469898,
    "area": "999.984 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Junin MAGDALA 68",
    "mineral": [
      "Au"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.859040214000004,
    "lng": -75.41316170200002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Moquegua PAULA 25001",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "MOQUEGUA / PUNO",
    "status": "Active",
    "lat": -16.512323711000022,
    "lng": -70.21812409500001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Tacna CANTERA LAJAS SECTOR 1",
    "mineral": [
      "Au"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.412818250999976,
    "lng": -69.599025283,
    "area": "2.9263 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Cajamarca CENTELLA 3",
    "mineral": [
      "Cu"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.400650621000011,
    "lng": -78.21911056900001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SAN JOSE ROY",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.957022521999988,
    "lng": -69.342556538,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PAULA 25002",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.48547725200001,
    "lng": -70.17111726399997,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PAULA 25005",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.52162961900001,
    "lng": -70.17133489700001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Amazonas CANTERA KM. 17+400",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AMAZONAS",
    "status": "Active",
    "lat": -5.885418250999976,
    "lng": -78.26270872100002,
    "area": "0.1513 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Amazonas CANTERA KM. 9+380",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "AMAZONAS",
    "status": "Active",
    "lat": -5.895216106000021,
    "lng": -78.23115323500002,
    "area": "0.4433 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ARCE MINING CORPORATION",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.390166819,
    "lng": -69.72350430799997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Piura PAIMAS THREE",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.649371855000027,
    "lng": -79.90910295100002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Lambayeque ISMAEL ONE",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "LAMBAYEQUE",
    "status": "Active",
    "lat": -6.919425020000006,
    "lng": -79.83233971599998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Piura NICOLLE I",
    "mineral": [
      "Pb"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -5.066360436000025,
    "lng": -81.05413037599999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Iron Project in Junin HUANCAMANTA 2003",
    "mineral": [
      "Fe"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.807748865000008,
    "lng": -75.60791412399999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa ZARAHEMLA",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.052030471000023,
    "lng": -71.48962469499997,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Other Project in La Libertad GUADALUPITO IV",
    "mineral": [
      "Other"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.89433587000002,
    "lng": -78.63583953699998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa LLUTA 2023 7",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.00000066199999,
    "lng": -72.16898517499999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco AURORA II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -12.96509703700002,
    "lng": -71.84800619999999,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GOLDEN STONE",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.39121421599998,
    "lng": -69.166967027,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios LIRIOS IX",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.940651731000004,
    "lng": -70.41965419600001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa QORI ANKA",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA / AYACUCHO",
    "status": "Active",
    "lat": -15.294639904999997,
    "lng": -74.41319184499997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Ancash YANA QURI VII",
    "mineral": [
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.368634199999974,
    "lng": -77.98594781499997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna QORI Ã‘USTA",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.567966340999988,
    "lng": -70.47935792300001,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PICHACANI MBM 33",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.943075067999985,
    "lng": -70.18660149599998,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa CORIO I 2016",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.15344392100002,
    "lng": -71.596055568,
    "area": "999.984 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa TIABAYA 162",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.654850232,
    "lng": -71.73914411999999,
    "area": "999.9905 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa TIABAYA 164",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.663630959999978,
    "lng": -71.758006932,
    "area": "999.99 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa TIABAYA 168",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.485883573000024,
    "lng": -71.530811782,
    "area": "99.9995 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco FLOR DE FORTUNA C",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.349533797999982,
    "lng": -71.35424429199998,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ARIANAI",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.571892854999987,
    "lng": -69.31563656600002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in MINERA BASTIDAS CRUZ 3",
    "mineral": [
      "Zn"
    ],
    "region": "/ PIURA",
    "status": "Active",
    "lat": -4.278810077999992,
    "lng": -80.134909687,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ancash MI BELLA DURMIENTE",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.16240839300002,
    "lng": -77.793292543,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa VIRGEN DEL ROSARIO 1987 2",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.760093411000014,
    "lng": -72.48944752199998,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Junin CAPETILLO IV",
    "mineral": [
      "Cu"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -10.991097368999988,
    "lng": -75.16476385800001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad MINERAL DEL NORTE I",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.69191791999998,
    "lng": -78.57053658799998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco DIANA MILAGROS CUATRO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.191390770999988,
    "lng": -70.79932906099998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA PILCOPATA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.13046013600001,
    "lng": -69.27396483400003,
    "area": "0.7317 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA PAJCHANI",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.193533929000012,
    "lng": -69.08070455900003,
    "area": "1.9513 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA PUTINA PUNCO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.118259426999998,
    "lng": -69.05076197300002,
    "area": "0.3871 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco HEGAFE I",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.03228431399998,
    "lng": -71.46179353100001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa MINERA FORTALEZA II",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA / AYACUCHO",
    "status": "Active",
    "lat": -15.420911753999974,
    "lng": -74.310322488,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SEÑOR DE FURUNTANI",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.302145272000018,
    "lng": -70.015276745,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ASUYAN",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.644046322000008,
    "lng": -69.42717533299998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa CECILIA 2A 2024",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.455895863000023,
    "lng": -72.76327737100002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MONTES DE ORO B",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.974733700999993,
    "lng": -69.546275977,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LOS DORADOS DE CHAVITA V",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.33122090400002,
    "lng": -69.25210535899998,
    "area": "300.01 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa CECILIA 3",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.437544468,
    "lng": -72.73553011899998,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua ALEXIS XX",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.764031819000024,
    "lng": -71.14279835999997,
    "area": "99.998 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua PUENTE BELLO",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.541839709999977,
    "lng": -70.37935262399998,
    "area": "99.9985 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa TORO 4A 2024",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.78130373099998,
    "lng": -72.778404271,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa MARKOWA I",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.519412654000007,
    "lng": -71.46396411,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Ancash LLYRE",
    "mineral": [
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -10.39413297599998,
    "lng": -77.42027889899998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad DANALIA",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.880385765000028,
    "lng": -77.648067061,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Other Project in Lima ISCAY XVIII",
    "mineral": [
      "Other"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -10.878343315999984,
    "lng": -76.61936649699999,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PINAPINA JRL",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.61149648700001,
    "lng": -69.59689749799998,
    "area": "570.1593 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CORAZON DE ORO 2",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.122725714000012,
    "lng": -69.56688622799999,
    "area": "200.006 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco LUNIPATA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.927566094999976,
    "lng": -71.378481303,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Apurimac SAYWAS DE PAYANCCA UNO",
    "mineral": [
      "Pb"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.774600028000007,
    "lng": -72.68778427900003,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua APACHE 3",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.88305188099997,
    "lng": -71.26222680299998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ISRAEL SUNA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.158525868000028,
    "lng": -70.81006533200002,
    "area": "200.008 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa SAHUARQUE 2024",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.430054857000016,
    "lng": -72.09306087599998,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa VIRGEN DE GUADALUPE I",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.536846717999993,
    "lng": -71.78428660100002,
    "area": "999.991 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa MANANTIAL CRUZ DE MAYO",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.394307544000014,
    "lng": -71.63255256999997,
    "area": "199.9985 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa DEL CARMEN I",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.045795037000005,
    "lng": -71.53822997399999,
    "area": "299.996 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco BARRIONUEVO 2016",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.205707501000006,
    "lng": -71.56657354100003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco SELVA ALEGRE 2016 DOS",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.308687720000025,
    "lng": -70.82787826200001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa BELLA ZARITA",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.999334126999996,
    "lng": -71.10255936800002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Other Project in Apurimac HUAMPUYLLA I",
    "mineral": [
      "Other"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -14.463554606000002,
    "lng": -72.93119005800003,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa VIRGEN DEL CARMEN UNO 2016",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.345033235000017,
    "lng": -71.46828730200002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno REPTIL I",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.689083562999995,
    "lng": -69.51085583100001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Ayacucho MINA LA ESCONDIDA",
    "mineral": [
      "Pb"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -14.49037785600001,
    "lng": -74.59168014199997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno HUARACOPA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.959532330000002,
    "lng": -69.73313265799999,
    "area": "300.0115 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LUCILA I 2016",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.978534345000014,
    "lng": -69.29801748699998,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Lead Project in San Martin FORTALEZA UNO SHUNTE",
    "mineral": [
      "Pb"
    ],
    "region": "SAN MARTIN",
    "status": "Active",
    "lat": -8.444341219000023,
    "lng": -77.025455943,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa CECILIA 10",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.408874614000013,
    "lng": -72.58683434199997,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua ANTA 03",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.216510538000023,
    "lng": -70.77916014599998,
    "area": "599.989 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua ANTA 02",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.154227411000022,
    "lng": -70.66578062100001,
    "area": "399.9935 ha",
    "verified": true
  },
  {
    "name": "Other Project in Huanuco ROGER GOLD 02",
    "mineral": [
      "Other"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -9.288132639000024,
    "lng": -76.37478081900002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa CECILIA 9",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.399841772999991,
    "lng": -72.586938573,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Other Project in Arequipa CECILIA 7",
    "mineral": [
      "Other"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.418997164000018,
    "lng": -72.68916298099998,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa CECILIA 5",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.391702371000008,
    "lng": -72.670840065,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MARCOS MINING",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.07423215900002,
    "lng": -69.52798621400001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa CECILIA 4",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.464454449000016,
    "lng": -72.71660627400001,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno VIRGEN DEL CARMEN 2019",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.408359479000012,
    "lng": -69.68645876599999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CAPAC 18 2018",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.911039458000005,
    "lng": -69.70347834699999,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Lima MONICA KIARA",
    "mineral": [
      "Zn"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -10.678865013999996,
    "lng": -76.72798525399998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MINERA BRITTANY",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -12.924556516999983,
    "lng": -71.38704252000002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Moquegua VALE761",
    "mineral": [
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.06422011799998,
    "lng": -71.21743945600002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua VALE747",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.028089306000027,
    "lng": -71.21701316000002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Other Project in Arequipa VIZUA I\"\"",
    "mineral": [
      "Other"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.622616504999996,
    "lng": -71.868082533,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LUCHO 03",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.81476160599999,
    "lng": -70.47526044900002,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Moquegua CLAFERREY Q III",
    "mineral": [
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.67744510900002,
    "lng": -71.30964276999998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CHAQUIMAYO 2018 C",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.210813958000015,
    "lng": -70.59650442399999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco LITIO PERU I",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO / PUNO",
    "status": "Active",
    "lat": -13.850808637,
    "lng": -70.85053541399998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Tacna SAN EXPEDITO FILOMENA I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.859616014999972,
    "lng": -70.10427957899998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LA PACHAMAMA-04",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.82082158100002,
    "lng": -69.994853487,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LA PACHAMAMA-06",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.875096871999972,
    "lng": -69.98574994799998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco NAWI DE ORO 1",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.127866607999977,
    "lng": -71.83143909900002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Cajamarca HUAMBORCO 01",
    "mineral": [
      "Zn"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.472931217999985,
    "lng": -77.781344779,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Iron Project in Arequipa NORMAS DE JESUS III",
    "mineral": [
      "Fe"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.436390315999972,
    "lng": -73.72313467999999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco BUENA FORTUNA MONCERRAT",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.601974446999977,
    "lng": -71.41214003099998,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Tacna EMILIO MIGUEL V",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.58380493300001,
    "lng": -70.75270295799999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna BORATO 2",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.78339039100001,
    "lng": -70.66032619499998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINERA LEON DORADO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.040987174999998,
    "lng": -69.70560645299997,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MEYBEL I",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.05098050800001,
    "lng": -69.186963262,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Apurimac TORO RUMI",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.941111594000006,
    "lng": -73.13949384400001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huancavelica ANDAGAMA 1",
    "mineral": [
      "Cu"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -13.134412096999997,
    "lng": -75.01845312799998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno OROMIN PIQUITIRI",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.44170406500001,
    "lng": -70.331937417,
    "area": "200.0075 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ica COCAYACO III",
    "mineral": [
      "Zn"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -14.092165350000016,
    "lng": -75.592870855,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CORICUNCA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.665635877,
    "lng": -70.06333171799997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna CANTERA ARENA 1",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.384484961999988,
    "lng": -69.53593763700002,
    "area": "0.6805 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno RIGOMIN DAMI ALYSA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.951045747000023,
    "lng": -69.60446207199999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in San Martin MULATAMBO",
    "mineral": [
      "Zn"
    ],
    "region": "SAN MARTIN / LA LIBERTAD",
    "status": "Active",
    "lat": -8.39890675700002,
    "lng": -77.070609289,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Ayacucho EDMUNDO6",
    "mineral": [
      "Au"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -15.04132524900001,
    "lng": -74.348769419,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CONDORANI 1 2018",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.090033608,
    "lng": -70.71200576000001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 109",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.701975999000013,
    "lng": -71.61868082000001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco VIRGEN DE COPACABANA 2018",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.392095751,
    "lng": -71.85596183899997,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 47",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.448974765000004,
    "lng": -71.62496230699998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ancash QULLQUI MINA 2",
    "mineral": [
      "Zn"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -10.077994332999992,
    "lng": -77.399644722,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 114",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.658342005999998,
    "lng": -71.47897583399998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 115",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.711733138,
    "lng": -71.55382987299998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 49",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.467551679999984,
    "lng": -71.57882712999998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SAN FELIPE 2020",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.680082561999996,
    "lng": -69.49225950200002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Other Project in Ayacucho HUINCHUBAM",
    "mineral": [
      "Other"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -14.44168552299999,
    "lng": -73.65479252799997,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua TURNOX 2019 1",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.770877342000006,
    "lng": -70.71693764000003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Moquegua TURNOX 2019 3",
    "mineral": [
      "Au"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.770798948999982,
    "lng": -70.72631672400001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Piura LAGUNA LA RESBALOSA",
    "mineral": [
      "Cu"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -5.654218011000012,
    "lng": -80.557515007,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Lima KAYSER",
    "mineral": [
      "Pb"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -10.669723436000028,
    "lng": -76.74621334,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Tacna CANTERA SONDOR",
    "mineral": [
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.87525723599998,
    "lng": -70.47244361700001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SAN FELIPE 2019",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.529658117999986,
    "lng": -70.14588551600002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno RIO BRAVO II",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.508910908000018,
    "lng": -70.24002147300001,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TUMARUMA 2019 3",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.498062831000029,
    "lng": -70.528915531,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TUMARUMA 2019 8",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.589366670999992,
    "lng": -70.38971274099998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TUMARUMA 2019 10",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.525303957999997,
    "lng": -70.51047210600001,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno DINA 1",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.486170094999977,
    "lng": -70.03996876500003,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GOLD COPPER VL 2024",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.867704661000005,
    "lng": -70.65305607800002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ARABES DORADOS",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.020132735000004,
    "lng": -69.45377782700001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Lima SUNSPIRIT 4",
    "mineral": [
      "Au"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -11.664573464,
    "lng": -76.39559742699998,
    "area": "818.4234 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ANGLO ANTA 22",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -15.208352251999996,
    "lng": -71.02181153599997,
    "area": "999.996 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa PLUTO",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.049016618999985,
    "lng": -71.724310054,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MINAT GOLD 4",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.346039253000017,
    "lng": -71.92948624600001,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco LAS DOS PERDICES 2020",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.147154230000012,
    "lng": -71.945429891,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SERPIENTEDEOROXL",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.993283114999995,
    "lng": -69.26853284999999,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TUMARUMA AUSTRAL 2",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.607142873999976,
    "lng": -70.43646272500001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TUMARUMA AUSTRAL 8",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.64341579500001,
    "lng": -70.418060287,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno EXPLORACIONES VIKI 3",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.520489284000009,
    "lng": -70.17356016600002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CAPAC 11 2018",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.883833810999988,
    "lng": -69.73116054500002,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINING JHOJANNA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.658604801000024,
    "lng": -70.809926308,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno VILANOVA III 2018",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.631482802999983,
    "lng": -69.89074169899999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ANTAÃ‘AS I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.97556457600001,
    "lng": -70.24619789299999,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KELLO KELLO 05",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.760083946999998,
    "lng": -70.54019377399999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Moquegua TALABAYA 08",
    "mineral": [
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.023223796000025,
    "lng": -70.79436004000002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MSG RISH 1",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.97483331799998,
    "lng": -69.49998271300001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Piura GRUPO PROGRESO II",
    "mineral": [
      "Cu"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.504716717999997,
    "lng": -79.95438628599999,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ancash ECOMINER TRADING SRL",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -8.123505951000027,
    "lng": -77.77658137600002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa VITOR 1 2025",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.297458049,
    "lng": -71.87265362400001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Tacna MELISSA",
    "mineral": [
      "Au"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -18.19240818999998,
    "lng": -70.352179723,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno NORCA I",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.16939060599998,
    "lng": -70.12247316999998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ayacucho QORPA 20",
    "mineral": [
      "Cu"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -15.109121258000016,
    "lng": -73.427387554,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno QUELLO QUELLO 12 2018",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.714897271999972,
    "lng": -70.539853478,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa TORO 8",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.907871494999997,
    "lng": -72.78635521299998,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa TORO 5",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.78111230799999,
    "lng": -72.75974562900001,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco DA3008",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.318605231999982,
    "lng": -71.95691632,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 118",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.694374492999998,
    "lng": -71.48866286999998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 122",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.737998441000002,
    "lng": -71.628392894,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 52",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.468254261000029,
    "lng": -71.513937726,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 123",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.738313215000003,
    "lng": -71.60055070800001,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 56",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.469131252000013,
    "lng": -71.43050346000001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MINA LAURA",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.410517325,
    "lng": -71.58556886999997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa FONTANA 3",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.439781547999983,
    "lng": -74.645803838,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno VICTOJUL2018",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.586768300000015,
    "lng": -70.75335325600003,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LA PODEROSA INAMBARI IV",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.711662578000016,
    "lng": -69.85084649999999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad DADIVA DE DIOS",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.772887419000028,
    "lng": -78.506643252,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno APORAMITA 14 2018",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.974625268000011,
    "lng": -69.59256889099998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CAMANTI DORADO III",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.165386511999998,
    "lng": -70.63310726600002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TUMARUMA MBP 10",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.697459810999987,
    "lng": -70.44642363899999,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco DIANA MILAGROS SEIS",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.25522971800001,
    "lng": -70.71675270100002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno BUENA VISTA 2018",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.047638120999975,
    "lng": -69.14819127099997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Other Project in Ancash LIBELULA MBP 03",
    "mineral": [
      "Other"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.732068917999982,
    "lng": -77.73414208999998,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco LA PANTERA DE PAN DE AZUCAR",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.255353350000007,
    "lng": -70.69829878899998,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna FITO 2018A",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.785451946000023,
    "lng": -70.396246287,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna SILVIA YOLANDA DE TACNA V",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.584216949999984,
    "lng": -70.70560280299998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno APORAMITA 19 2018",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.001919428999996,
    "lng": -69.51856086200002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco PAUL 2018",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.263095369999974,
    "lng": -70.882899184,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huancavelica SANTA ROSA DE LIMA",
    "mineral": [
      "Cu"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -12.781525466999994,
    "lng": -74.65909933500001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ANGLO REJTOCR",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.153778100000013,
    "lng": -70.64738331699999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Other Project in Arequipa SABANCAYA 4",
    "mineral": [
      "Other"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.417548579000027,
    "lng": -71.66855887000003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco PLAYA DE LOS REYES II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.812932804000011,
    "lng": -71.95042030600001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna SAN CARLOS V",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.73054178199999,
    "lng": -70.49011556800002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINA ELENA I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.60756203699998,
    "lng": -69.57565917099998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Tacna DIOS CONMIGO",
    "mineral": [
      "Au"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -18.092946079,
    "lng": -70.360864322,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KELLO KELLO 07",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.769446516000016,
    "lng": -70.493598862,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MIRAIZ2",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.094274896999991,
    "lng": -70.00497818999997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco SUMAC ORCCO YOLITA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.336386548000007,
    "lng": -70.74501513500002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno JHOVANITA 13",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.689162328000007,
    "lng": -69.47370361200001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CHILLEMANI",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.993250777000014,
    "lng": -69.29631185599999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TRANSMONEY GOLD 2018 III",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.444654155000023,
    "lng": -69.64018180599999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad INGEOMINECO I",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.691072298999984,
    "lng": -78.42559119399999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno HUACHANE 20 2018",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.047413827000014,
    "lng": -69.36121406199999,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco TESORO DEL INCA FL",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.456615542000009,
    "lng": -71.49375692299998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CCORI CHASKA",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.246129028999974,
    "lng": -70.72591591399998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco PAN DIVINO I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.244034836000026,
    "lng": -71.353972424,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa ACUMULACION NUEVA ESPINAL 2018",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.59706036,
    "lng": -71.425254344,
    "area": "71.6332 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PAUSAT DAMI ALYSA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.951272787999985,
    "lng": -69.51147080599998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua QUINISTAQUILLAS 2018 1",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.643082585000002,
    "lng": -70.86576745000002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco SUMAC ALLPA 2018",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.301821535999975,
    "lng": -70.49557012499997,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Other Project in Moquegua TITIRE 3",
    "mineral": [
      "Other"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.547906834000003,
    "lng": -70.31205294900002,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco FRANK UNO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.467667033999987,
    "lng": -71.28153591099999,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno COLQUESULLO II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.813971572000014,
    "lng": -70.58727570000002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco LIWI DE ORO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.96463791299999,
    "lng": -71.556801355,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno FAMILIA CCORI",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.417826882999975,
    "lng": -69.519508911,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco KENNETH D",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.145740138000008,
    "lng": -70.863554814,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MINAT GOLD",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.291169191999984,
    "lng": -71.98433973800002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PATAQUEÃ‘A 10 2018",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.888635689000012,
    "lng": -70.22364043200002,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco QOYLLUR JG 1",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.485987695000006,
    "lng": -71.254009585,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINERA CHAPARRO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.758079442999986,
    "lng": -70.80147371499999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINERALES AURIFEROS",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.156014832999972,
    "lng": -69.287255421,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa ALIMAVA IV",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.470515041999988,
    "lng": -71.76288189600001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ELIAS MI TESORITO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.056412529999989,
    "lng": -69.38901455500002,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno JHOVANITA V",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.743638949,
    "lng": -69.34375427700002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua VALE539",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.813050765000014,
    "lng": -71.04565779400002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno AURIFERA HUANCANE 3",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.047399868000014,
    "lng": -69.37047582500003,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ROYZIÃ‘O DOS",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.435909485000025,
    "lng": -69.51955083899998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno VIRGEN DEL ROSARIO 2018",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.011323093999977,
    "lng": -69.305595418,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINING LAGOON BLUE",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.208783831000003,
    "lng": -69.88974237299999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco HERMANOS HUALLPA",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.56511254100002,
    "lng": -71.48565024499999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa ANGELICA I",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.895678971999985,
    "lng": -71.50289386100002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco GRANDE CAMANTI",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.27330669600002,
    "lng": -70.71687967499997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa BERITH II",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.940620394000009,
    "lng": -72.47787704500001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco QORI APU HUAYLLA",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.501320726000015,
    "lng": -71.54038303200002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Lima SOL NACIENTE DE QUIPAN",
    "mineral": [
      "Cu"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -11.662597530000028,
    "lng": -76.98142074600003,
    "area": "30 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KOLTAN",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.347896221999974,
    "lng": -70.33890821699998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ANJASI 2018",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.923725547000004,
    "lng": -70.76783823400001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno NUÃ‘OA QUINCE",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.178257438000005,
    "lng": -70.55672628899998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huancavelica CHACRA CORIPALMA 06",
    "mineral": [
      "Cu"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -13.722113572000012,
    "lng": -75.16648258800001,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Apurimac TRES COMPAÃ‘EROS 2023",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.932214999999983,
    "lng": -73.15807119099998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco SARITA COLONIA 18",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.210342696999987,
    "lng": -70.67030950600002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno HIAM RM1",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.983816278000006,
    "lng": -69.52777935799998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa HASRET FE28A",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.334421634000023,
    "lng": -72.97810723499998,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINERA AYSUM",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.489834024999992,
    "lng": -69.64959083600002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Junin HUACRAVILCA N3",
    "mineral": [
      "Au"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -12.40169036200001,
    "lng": -75.367999053,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Apurimac LUANA 05",
    "mineral": [
      "Au"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -14.217738785999984,
    "lng": -72.72965949299999,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Tacna ARUNTA IV",
    "mineral": [
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.88683335600001,
    "lng": -70.08557008899999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna VALE467",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.396890043999974,
    "lng": -70.39326495099999,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna VALE471",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.360678129999997,
    "lng": -70.402401564,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Tacna VALE474",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.37868486399998,
    "lng": -70.41195012700001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna VALE476",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.288051810000013,
    "lng": -70.44888431499999,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ESPERANZA LOS ROSALES UNO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.245748701000023,
    "lng": -70.781274263,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TRINIDAD UNO SRL",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.074211718000017,
    "lng": -69.53724877600001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa JULIO 49",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.525184132999982,
    "lng": -71.72620927499997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Tacna VALE608",
    "mineral": [
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.55115023899998,
    "lng": -70.30023427700002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Amazonas ARENA FINA YUNGUILLA",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AMAZONAS",
    "status": "Active",
    "lat": -6.426500077000014,
    "lng": -77.449972941,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco BENJAMIN ELIAS I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.272200976000022,
    "lng": -70.87374205200001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SALLAPATA 11",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.467410788999985,
    "lng": -70.97597612700002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huancavelica SOL NACIENTE II",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "HUANCAVELICA / ICA",
    "status": "Active",
    "lat": -13.604023211000026,
    "lng": -75.54541462899999,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Tacna ROCKEFELLER III",
    "mineral": [
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.86780000599998,
    "lng": -70.24589365100002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LEONELA II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.46003377400001,
    "lng": -70.78023696000002,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua FRANCISCA TWO",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.194117123000012,
    "lng": -70.880602179,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa TORCONTA",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.297458049,
    "lng": -71.87265362400001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno VALERIA 2019",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.190997453000024,
    "lng": -69.80627117300003,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua OMATE 2018 2",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.606168344000025,
    "lng": -70.94974909899997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ANCHAQUI 12 2018",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.19543589,
    "lng": -70.30969802800001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna RICARDITO JUANCITO II",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.858518715999992,
    "lng": -70.28357630900001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua VALE534",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.923164900000017,
    "lng": -70.86850421600002,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa VALE536",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.062631796000005,
    "lng": -71.35829408299998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MATHIUS I",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.956425034000006,
    "lng": -69.63881155199999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa SM 2405",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "AREQUIPA / CUSCO",
    "status": "Active",
    "lat": -14.833993662000012,
    "lng": -72.09189945499998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno EMERSON DEYVIS",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.329960778999975,
    "lng": -70.31111435499997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios QUISPE I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.708662374000028,
    "lng": -69.62633315199997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CAMANTI MARCABAMBAS I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.020166709000025,
    "lng": -69.435256675,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CAMANTI MARCABAMBAS II",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.038282749000018,
    "lng": -69.41676809500001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huanuco ANDROMEDA 2023",
    "mineral": [
      "Cu"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -9.25459043699999,
    "lng": -74.927164194,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno COASA 20",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.036833866999984,
    "lng": -69.93537733800002,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash VALE1028A",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -10.096909195000023,
    "lng": -77.281225044,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa MATHEO 2022",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.23336034800002,
    "lng": -72.06284807200001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno T&R",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.720858668999997,
    "lng": -69.804638958,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua AGRIPINA I",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.20375505200002,
    "lng": -70.81489368199999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KIMO 23",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.065423743999986,
    "lng": -69.40755472199999,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Tacna COLPAR 3",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.405455413000027,
    "lng": -70.459219088,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios JAYAVI",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.692430016999992,
    "lng": -69.88630379799997,
    "area": "1000.041 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huancavelica COBREHUANCA 2024",
    "mineral": [
      "Cu"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -13.803540680000026,
    "lng": -74.935234304,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Moquegua LA PACHAMAMA-07",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "MOQUEGUA / PUNO",
    "status": "Active",
    "lat": -16.847460194999996,
    "lng": -70.08885075199998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco JAWY CUATRO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.387483567999992,
    "lng": -71.15155955699998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco JAWY SEIS",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.255475531999991,
    "lng": -70.67984464199998,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco JULIO EL PIRATA II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.128315826999994,
    "lng": -70.77120189599998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huancavelica DON ABRAHAM DE MUTANGA",
    "mineral": [
      "Cu"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -13.504958074,
    "lng": -75.31417941199999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Moquegua CANTERA KM 86+120",
    "mineral": [
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.758392051999977,
    "lng": -71.00154783200003,
    "area": "6.6453 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ARTEMISA 8",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.354953774000023,
    "lng": -69.268958597,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huanuco CORZOGUILLEN",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -8.615092897000011,
    "lng": -77.20800892800003,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno COASA 18",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.100046352999982,
    "lng": -69.954160253,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GABAN 21",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.465114067999991,
    "lng": -70.39497762500002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SALLAPATA 8",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.431515893999972,
    "lng": -70.947688266,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna VALE459",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.233765425,
    "lng": -70.457864186,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Tacna STRATTON",
    "mineral": [
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.86780000599998,
    "lng": -70.24589365100002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco APU CAMANTI",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.227926923999972,
    "lng": -70.744240262,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno COASA 19",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.027757108000005,
    "lng": -69.944600606,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco KCORI LLAQTA I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.203756516999988,
    "lng": -71.48194402399997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CONDORANI 2 2018",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.107966189000024,
    "lng": -70.73075491600002,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CAPAC 9 2018",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.965314164999995,
    "lng": -69.69438460999999,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash PROYECTO PLANTA DE BENEF. DE MINERALES LAS GALIAS",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.193356021999987,
    "lng": -78.23647120099997,
    "area": "53.3924 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Ica MICONAGRI",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -14.03714235000001,
    "lng": -75.85203372400002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Piura HUAYABAL DOS",
    "mineral": [
      "Au"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.495864229000006,
    "lng": -80.09860696300001,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in DIANA LA COLORADA",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "/ PIURA",
    "status": "Active",
    "lat": -4.478048424000008,
    "lng": -80.36001337599998,
    "area": "876.3433 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad SHALOM 08",
    "mineral": [
      "Zn"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.487144795999995,
    "lng": -78.55669002399998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Piura CALABAZA UNO",
    "mineral": [
      "Cu"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.495929166999986,
    "lng": -80.15268636899998,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash BALBIS 2024",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -8.981860616000006,
    "lng": -78.22627909099998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa ALTA MINA IV",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.268112153000004,
    "lng": -74.72059939799999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Cajamarca CURUN 7 2018",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.366267121000021,
    "lng": -78.518032388,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad NUEVA FORTALEZA 2024",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.906789290000006,
    "lng": -77.7569871,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad LA RINCONADA 26",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.007848803000002,
    "lng": -78.50523417900001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa MISHAL I",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.257768522999982,
    "lng": -71.960368582,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Piura ROCKAS",
    "mineral": [
      "Pb"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.785903538000014,
    "lng": -80.86473024499998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad LEDA 2",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.98106246399999,
    "lng": -78.55979248900002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Cajamarca POSHAN III",
    "mineral": [
      "Cu"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.313892205000002,
    "lng": -78.88043681200003,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Piura ESPERANZA 3272",
    "mineral": [
      "Cu"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.52304505699999,
    "lng": -80.134627712,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ancash SIETE MOROS",
    "mineral": [
      "Zn"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.117307093000022,
    "lng": -78.21614985500003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Other Project in Ancash EL BOSQUE CINCO",
    "mineral": [
      "Other"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.05307716499999,
    "lng": -78.08940552399997,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad SHACOLCA",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.223805878999997,
    "lng": -78.35876990700001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad INCANATO-I",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.784897716999978,
    "lng": -79.077555163,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno BERLIN",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.43600705,
    "lng": -69.47316353399998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ancash FUNDO SIBERIA",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -8.764147791000028,
    "lng": -77.890145658,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Cajamarca CHAMIS 6 2018",
    "mineral": [
      "Cu"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.104706338000028,
    "lng": -78.61898844199999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Lima IVS I",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -12.90738178800001,
    "lng": -75.70978242500001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in La Libertad ARCHEAN ANTHRACITE XLVII",
    "mineral": [
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.682305023000026,
    "lng": -78.47093834399999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad ARCHEAN ANTHRACITE XLVIII",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.697591389000024,
    "lng": -78.03607392100002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in La Libertad ARCHEAN ANTHRACITE L",
    "mineral": [
      "Au"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.806557117000011,
    "lng": -78.11684007999997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MIS TRES AMORES CCH",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.174087031,
    "lng": -69.29654508499999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua ALEJANDRO DAVID",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.301717972999995,
    "lng": -70.96634193300002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CRISTO REY 2018 Z",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.201717230999977,
    "lng": -70.60567113000002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in CANTERA KM 31+100 RUTA18",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "/ PUNO",
    "status": "Active",
    "lat": -15.817269199999998,
    "lng": -69.84237747600002,
    "area": "0.2375 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA KM 26+000 RUTA18",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.79143992600001,
    "lng": -69.817221362,
    "area": "0.2263 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA ISCA YAURECA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.341265761999978,
    "lng": -69.46415347599998,
    "area": "2.9624 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna VALE607",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.515003345000025,
    "lng": -70.29997676199997,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna VALE601",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.45168424100001,
    "lng": -70.30894249200003,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Other Project in Tacna VALE599",
    "mineral": [
      "Other"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.451559514999985,
    "lng": -70.327772536,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa AURIAM II 2022",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.295331770000018,
    "lng": -74.81370854699998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa JULIO 49 2019",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.525061543999982,
    "lng": -71.73556996399998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Cajamarca LCF 2018",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.340211953999983,
    "lng": -78.71734046099999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash ARCHEAN ANTHRACITE LIV",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -8.420866530000012,
    "lng": -78.11245477699998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash YUBIRIT LINE 1",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.39656383099998,
    "lng": -78.11387741800002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Ancash ALEX ANALI II",
    "mineral": [
      "Au"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.488351492999982,
    "lng": -78.29511759299999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in San Martin NEYRAL SEIS",
    "mineral": [
      "Pb"
    ],
    "region": "SAN MARTIN",
    "status": "Active",
    "lat": -8.42792934900001,
    "lng": -76.671264705,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Piura LA MANUELA 2018",
    "mineral": [
      "Pb"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.7768586149999805,
    "lng": -80.873749928,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad ARCHEAN ANTHRACITE LII",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.6463161679999985,
    "lng": -78.498325943,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in La Libertad ARCHEAN ANTHRACITE LIII",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.715907999000024,
    "lng": -78.07217312099999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in San Martin NEYRAL OCHO",
    "mineral": [
      "Cu"
    ],
    "region": "SAN MARTIN",
    "status": "Active",
    "lat": -8.473214072000019,
    "lng": -76.653296576,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huanuco CHANCAKUNI II",
    "mineral": [
      "Cu"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -9.677092432999984,
    "lng": -76.33987803000002,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cajamarca ENERGIAS VERDES I",
    "mineral": [
      "Au"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -5.486692065999989,
    "lng": -78.59027072600003,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ayacucho QORIORCO",
    "mineral": [
      "Cu"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -15.32077956400002,
    "lng": -74.115037815,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad ADOLFO TRES",
    "mineral": [
      "Zn"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.867223648999982,
    "lng": -78.63601326100002,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in La Libertad ARCHEAN ANTHRACITE 85",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.683724215999973,
    "lng": -78.72460672099999,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad ARCHEAN ANTHRACITE 87",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.611836412000002,
    "lng": -78.80652243600002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Other Project in Ancash RENZITO I",
    "mineral": [
      "Other"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.00903228300001,
    "lng": -78.23516016100001,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Piura MORRINSON",
    "mineral": [
      "Pb"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -5.256332978999978,
    "lng": -81.09926868999997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad 150 PECES",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.964963576999992,
    "lng": -78.92256254699998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Cajamarca VALE562",
    "mineral": [
      "Cu"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -6.555555493999975,
    "lng": -79.13694930100002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Cajamarca CHAMIS 1 2018",
    "mineral": [
      "Cu"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.104376645000002,
    "lng": -78.555654291,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Lead Project in La Libertad DON DIEGO III",
    "mineral": [
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.142125883999995,
    "lng": -78.30489924699998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad DON DIEGO X",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.807869922999998,
    "lng": -78.31614890100002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in La Libertad URUGANDA I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.023118855999996,
    "lng": -78.079078401,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Apurimac RUBIA II",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -14.008782793000025,
    "lng": -72.61143146900002,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Cajamarca ZAPALLAL X",
    "mineral": [
      "Cu",
      "Au"
    ],
    "region": "CAJAMARCA / LA LIBERTAD",
    "status": "Active",
    "lat": -7.690349314999992,
    "lng": -78.30783538600002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Junin CIA MINERA PAULINA",
    "mineral": [
      "Cu"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.651315550999982,
    "lng": -74.880730739,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco SOLITARIO IV",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.191519653,
    "lng": -70.78088075900001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Cajamarca ARCHEAN ANTHRACITE 77",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.50227873099999,
    "lng": -78.59877045100001,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa FQE GOLD 2025",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.306103319999977,
    "lng": -71.90083225199999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Piura LOMAS DE CAMILA CUATRO",
    "mineral": [
      "Cu"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.74068321499999,
    "lng": -80.98196510000002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Apurimac FELIX I",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.614468439999996,
    "lng": -72.97575575399998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Other Project in Huancavelica HUANQUILCA I 2025",
    "mineral": [
      "Other"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -12.14870012199998,
    "lng": -74.87132251499997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Lambayeque VALE560",
    "mineral": [
      "Cu"
    ],
    "region": "LAMBAYEQUE",
    "status": "Active",
    "lat": -6.239968558999976,
    "lng": -79.40013316800002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Cajamarca DORADO CAÃ‘ARIS",
    "mineral": [
      "Zn"
    ],
    "region": "CAJAMARCA / LAMBAYEQUE",
    "status": "Active",
    "lat": -6.19426959499998,
    "lng": -79.24667011700001,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco EL DORADO MINA ORO 2025",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.491203403999975,
    "lng": -71.87576720599998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash EXPLOMAX III 2018",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.254644806999975,
    "lng": -78.460644177,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Piura ANABEL DOS 2025",
    "mineral": [
      "Cu"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.8395598170000085,
    "lng": -80.07111563799998,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Gold Project in La Libertad ARCHEAN ANTHRACITE 59",
    "mineral": [
      "Au"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.797646100000009,
    "lng": -78.13501912499999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno INTICAL VI QUECHI CO II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.135606105000022,
    "lng": -69.457826243,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco COOPERATIVA TORRES",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.33619958600002,
    "lng": -72.00580239300001,
    "area": "123.9909 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad MECHINONCIA",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.798718948999976,
    "lng": -77.70191347600002,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa QORI INTI 2025",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.170291005000024,
    "lng": -71.92687350099999,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa COLCA",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.610139720999996,
    "lng": -72.053263372,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco LA UNION PUKIRI II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.230567412000028,
    "lng": -70.847499734,
    "area": "200.008 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios YEFERSON UNO 2011 A",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.567895118000024,
    "lng": -69.296310114,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios SANTA ROSITA 2007",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.836786598999993,
    "lng": -70.16283370899998,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ayacucho DON CLAUDIO",
    "mineral": [
      "Cu"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -14.22851099799999,
    "lng": -74.92584575900003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios LUDARES V",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.52282296200002,
    "lng": -68.90966942099999,
    "area": "200.009 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa MILAGROS SOFIA I",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.378722406999998,
    "lng": -71.426498842,
    "area": "199.9975 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINERA BENDITANI H M 2007",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.97747143700002,
    "lng": -69.779482374,
    "area": "100.003 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios LUIGE",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.801230300999975,
    "lng": -70.01526326700002,
    "area": "200.008 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ayacucho LAS TRES MARIAS 2024",
    "mineral": [
      "Cu"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -14.210432373999993,
    "lng": -75.055611268,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ayacucho SEÃ‘OR DE LOS MILAGROS 2023",
    "mineral": [
      "Zn"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -12.771595548999985,
    "lng": -74.23532327100003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huancavelica ROSARIO UNO 2024",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -12.39289609399998,
    "lng": -74.981600549,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa GEMENES",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.762948805999995,
    "lng": -72.75061561299998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios VALIENTE UNO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.007232148000014,
    "lng": -70.43099805100002,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios MENJA X",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.002381078999974,
    "lng": -70.559206228,
    "area": "16.0006 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios EXPLORADOR MN",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.522789237999971,
    "lng": -69.16739614699998,
    "area": "400.018 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno COLIBRI XXV",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.84633631700001,
    "lng": -70.685751359,
    "area": "600.0185 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno COLIBRI XXIX",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.117351976000007,
    "lng": -70.70624580999998,
    "area": "700.0195 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios JHADE LUHANA II",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.618933626,
    "lng": -70.34595958199998,
    "area": "100.0045 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios PRISCILA 1",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.593165460000025,
    "lng": -70.04205527699997,
    "area": "300.012 ha",
    "verified": true
  },
  {
    "name": "Iron Project in Arequipa LOS CUATRO AMIGOS II",
    "mineral": [
      "Fe"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.304808176999984,
    "lng": -71.56588528999998,
    "area": "99.9995 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios TUMI DE ORO I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.648324204000003,
    "lng": -69.77524932199998,
    "area": "200.008 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa POSTRERO 2007",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.522570626999993,
    "lng": -71.48447099999998,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios DANIELA DOS",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.522838084,
    "lng": -69.02932841699999,
    "area": "100.005 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios YASMANI SAMUEL",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.609263956000008,
    "lng": -70.46557427599998,
    "area": "400.017 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno HAARIANA II",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.674348323999991,
    "lng": -70.64113625599998,
    "area": "131.8264 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa TIABAYA 129",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.55637720300001,
    "lng": -71.67220043399999,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa TIABAYA 131",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.53831706400001,
    "lng": -71.671951611,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios FREDY 2008 UNO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.80062200399999,
    "lng": -70.16266779300003,
    "area": "200.0075 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios KERIGMA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.592038881999995,
    "lng": -70.2997957,
    "area": "100.0045 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco COLIBRI XXXIII",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO / PUNO",
    "status": "Active",
    "lat": -14.071351323999975,
    "lng": -70.81701446800002,
    "area": "100.002 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco COLIBRI XXXVIII",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO / PUNO",
    "status": "Active",
    "lat": -13.93585665400002,
    "lng": -70.80669751200003,
    "area": "1000.03 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ayacucho NEW PROYECT 2023",
    "mineral": [
      "Cu"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -15.381430997999985,
    "lng": -73.602359476,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios LAURA IV",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.998441743,
    "lng": -70.384851976,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios KATIUSKA 2007",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.819619831000011,
    "lng": -69.932411414,
    "area": "100.0045 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua TASSA 1",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.159973524999998,
    "lng": -70.69461193900003,
    "area": "199.998 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios MANU FCA I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.764845960999992,
    "lng": -70.07038857399999,
    "area": "100.0045 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios MARC ANTONY",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.684881253000016,
    "lng": -69.62800526799998,
    "area": "100.0045 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa DELIA ESPERANZA 1",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.097912844000007,
    "lng": -71.69858753,
    "area": "999.9865 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios ORION 2011 UNO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.628675876999978,
    "lng": -70.19871177200002,
    "area": "200.008 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios ROCKY BALBOA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.60251664499998,
    "lng": -69.95923869799998,
    "area": "500.021 ha",
    "verified": true
  },
  {
    "name": "Gold Project in REFLEJOS DE ORO 2011",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "/ PUNO",
    "status": "Active",
    "lat": -14.82837144299998,
    "lng": -69.356165181,
    "area": "67.9464 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno FREJOLITO DE ORO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.801976668999998,
    "lng": -69.87892657999998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINERA NAVAR 99",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.67483249999998,
    "lng": -70.026389644,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ISLA BRILLANTE DE ORO II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.743726380999988,
    "lng": -69.27872032599998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad MINERA VASQUEZ I",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.777242418000014,
    "lng": -78.70018317300003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Cajamarca CHILEL 4 2018",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -6.708723050999993,
    "lng": -79.00072494300002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Amazonas RIVERA E HIJOS",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AMAZONAS",
    "status": "Active",
    "lat": -5.658421678000025,
    "lng": -78.58957013600002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MILENIOS 32",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.678896441000006,
    "lng": -70.644176743,
    "area": "329.5685 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SAN ANTONIO DE PADUA 2008",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.448476438,
    "lng": -69.44708147799997,
    "area": "400.014 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios TRANSOCEANICO III",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.513761380999997,
    "lng": -69.13977786499999,
    "area": "400.0165 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios HUACAMAYO CHICO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.765706131000002,
    "lng": -69.830879342,
    "area": "300.012 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad LA PIEDRA DEL DINOSAURIO",
    "mineral": [
      "Zn"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.135115139999982,
    "lng": -79.37911241199998,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Pasco IRON HEART",
    "mineral": [
      "Cu"
    ],
    "region": "PASCO",
    "status": "Active",
    "lat": -10.372854878999988,
    "lng": -76.45232933199998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SAGITARIO 28",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.047127475000025,
    "lng": -69.51866240599998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa CANTERA LA JOYA 3",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.487713352000014,
    "lng": -71.88901784400002,
    "area": "57.5943 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa LLUTA I",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.070204321999995,
    "lng": -72.01856064399999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ayacucho CCORIBARR",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AYACUCHO / HUANCAVELICA",
    "status": "Active",
    "lat": -12.473642142000015,
    "lng": -74.411045221,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna ALFA III",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.826354095,
    "lng": -70.19075248899998,
    "area": "999.979 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINASTHIRI",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.495695263000016,
    "lng": -70.37842631000001,
    "area": "500.0165 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINASTHIRI II",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.48665540799999,
    "lng": -70.37837443699999,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno COASA II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.757083572,
    "lng": -69.78626339499999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Tacna VM 366",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.408911079000006,
    "lng": -70.45158715299999,
    "area": "699.9875 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa PIRHUA 5",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.03247012899999,
    "lng": -71.44780025,
    "area": "899.9985 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco QORI SOLDADO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.424104364000016,
    "lng": -71.46749288699999,
    "area": "300.0085 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa ORION PERU",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.295663291999972,
    "lng": -71.57511862899997,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Apurimac CHAPERAL II",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -14.293191320999997,
    "lng": -73.09029597099999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Huanuco RUMIBAMBA 194",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -9.549589825999988,
    "lng": -76.558002294,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua CHILCAPAMPA 1",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.599059372,
    "lng": -71.101340918,
    "area": "399.9945 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huancavelica VILCA 7-2024",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "HUANCAVELICA / JUNIN",
    "status": "Active",
    "lat": -12.465165694999996,
    "lng": -75.202449494,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Tacna QUEMADO 13",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.383373129999995,
    "lng": -70.216090576,
    "area": "599.9875 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ESPERANZA 2023-1",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.35210624199999,
    "lng": -70.714125105,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ancash CERRO NEGRO NORTE XIV",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -10.329604795000025,
    "lng": -77.58404449400001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TRIPULANTE ESPACIAL G300 GOLD",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.074649465999984,
    "lng": -69.27789052999998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CONSTANCIA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.459561784000016,
    "lng": -71.78062455000003,
    "area": "2010.3943 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Tacna VM 364",
    "mineral": [
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.381733763,
    "lng": -70.46078420200001,
    "area": "99.9985 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna VALE68",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA / MOQUEGUA",
    "status": "Active",
    "lat": -16.956141194999987,
    "lng": -70.42508062500002,
    "area": "998.108 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco PRIMAVERA 872",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO / APURIMAC",
    "status": "Active",
    "lat": -13.54740977900002,
    "lng": -72.551472171,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ATENEA 1 2011",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.168151737000017,
    "lng": -69.46506461000001,
    "area": "900.0315 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ATENEA 3",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.150136883000016,
    "lng": -69.42796389799997,
    "area": "200.006 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ATENEA 4",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.19525872700001,
    "lng": -69.47438733899997,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SANTA LUCIA 01",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.38544034199998,
    "lng": -69.27999280799997,
    "area": "300.0115 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno VANESSA I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.855496232999997,
    "lng": -69.35556620599999,
    "area": "299.4725 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa PIRHUA 6",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA / CUSCO",
    "status": "Active",
    "lat": -15.024226,
    "lng": -71.37334240199999,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MINAS CRUZ",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.60505923400001,
    "lng": -71.44164366299998,
    "area": "600.0145 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa TIABAYA 160",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.647630289000006,
    "lng": -71.59851097699999,
    "area": "699.992 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno INTICAL SAN ANTON II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.445764173999976,
    "lng": -70.21710703000002,
    "area": "1000.0295 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno YOKOUNO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.430648801000018,
    "lng": -69.28004872399998,
    "area": "800.0275 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad CAMPANA LAGUNA VERDE",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.013630442000022,
    "lng": -77.98429571700001,
    "area": "393.6842 ha",
    "verified": true
  },
  {
    "name": "Copper Project in ARGOS 01",
    "mineral": [
      "Cu"
    ],
    "region": "/ PIURA",
    "status": "Active",
    "lat": -4.387141063000001,
    "lng": -79.963563486,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINA CRUCERO 2007",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.158044367999992,
    "lng": -69.85421861399999,
    "area": "1000.0335 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios PLAYA CHOQUE",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.979203255000016,
    "lng": -70.58754463600002,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios GATOPARDO I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.468427124000016,
    "lng": -68.71643428800002,
    "area": "100.005 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios MATT",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.666125264000016,
    "lng": -69.86739058199998,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios CARUSSO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.531742185999974,
    "lng": -69.277859272,
    "area": "200.008 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MARLLORY II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.164405072000022,
    "lng": -70.78068454999999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Tacna QUEMADO 9",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "TACNA / MOQUEGUA",
    "status": "Active",
    "lat": -17.24410653299998,
    "lng": -70.72300513699997,
    "area": "999.9825 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna REVELACION 13 SJ",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.42889502700001,
    "lng": -70.15990393300001,
    "area": "999.9825 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa BENJAMIN VI",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.516253733999974,
    "lng": -71.788789076,
    "area": "399.9985 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco GLAMAR",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.502529949999996,
    "lng": -71.745257261,
    "area": "300.0085 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua CHOCAMANE 6",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.04745619099998,
    "lng": -70.44876862299998,
    "area": "499.9925 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios ACUMULACION MARIA EUGENIA 1",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.638549549000004,
    "lng": -69.99620249200001,
    "area": "200.008 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Ica INTERNACIONAL 2",
    "mineral": [
      "Pb"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -14.056227970000007,
    "lng": -75.49089690599999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Cajamarca EZMERALDA 1",
    "mineral": [
      "Zn"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -6.609527226000012,
    "lng": -79.06441525299999,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Other Project in Piura LOMA VERDE",
    "mineral": [
      "Other"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.658730463999973,
    "lng": -80.134464251,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad BONDADOSO VEINTICUATRO",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.950332695999975,
    "lng": -77.99289750600002,
    "area": "156.0407 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios MISTER PLATEADO II",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.765526951000028,
    "lng": -69.88615230599999,
    "area": "100.0045 ha",
    "verified": true
  },
  {
    "name": "Other Project in Huancavelica TAMBO 06",
    "mineral": [
      "Other"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -13.097846118999996,
    "lng": -75.45203061199999,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa CALDERO 1",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.920171229000005,
    "lng": -71.47085882200003,
    "area": "599.992 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco RIO TINTO XX",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.603613137000025,
    "lng": -71.23664206000001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna ACM 21",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.88102095199997,
    "lng": -70.11561026700002,
    "area": "299.9925 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios SACACHISPAS",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.826724148999972,
    "lng": -70.37469406399998,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa CANTERA LA JOYA 2",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.528858818999993,
    "lng": -71.79867191300002,
    "area": "27.687 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna CARLINA IVONNE 19",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.678977429999975,
    "lng": -70.08431525999998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in SIRENA DORADA 2",
    "mineral": [
      "Au"
    ],
    "region": "/ PUNO",
    "status": "Active",
    "lat": -14.729710925000006,
    "lng": -69.23225230000003,
    "area": "95.9051 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Junin DON MARIO 002",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -12.401501853000012,
    "lng": -75.48759608,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Ancash DIAMANTE M&N",
    "mineral": [
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -8.700424128999998,
    "lng": -77.95321000400003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ACHASIRI 2 B",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.071943583000008,
    "lng": -70.17631987499999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa LAZO1",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.11027513099998,
    "lng": -71.86606354499997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno JUAN JOSE TRES",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.733965531000024,
    "lng": -69.64101851599997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GAUTAMA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.607515485000022,
    "lng": -69.59422809799997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PROYECTO ASIS",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.255462443999988,
    "lng": -69.29665108900002,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GOLDEN VIZCACHANI I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.59905308399999,
    "lng": -69.287821786,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua ANCHAQUI 1 2017",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.20412033399998,
    "lng": -70.365878882,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Other Project in Ayacucho LALAJA II",
    "mineral": [
      "Other"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -15.085847199,
    "lng": -74.143930716,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cajamarca MINERAL DEL NORTE II",
    "mineral": [
      "Au"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.44066069500002,
    "lng": -78.92511641499999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco PURIDA 006",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.418621438000002,
    "lng": -71.902633471,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco POSADA HB 6",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.06753851100001,
    "lng": -71.80562082199998,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna REHOBOT 03",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.387313940000013,
    "lng": -70.46848687300002,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa ACUMULACION ELENA DE TROYA",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.527692390000027,
    "lng": -71.793517409,
    "area": "699.992 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno JOSAMIR",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.911560275999989,
    "lng": -69.490590284,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash SWAN 166",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -8.944960782999999,
    "lng": -78.126612422,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad SOLANDES VI",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.99161647699998,
    "lng": -78.83174526599998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco EMPRESA MINERA CARPIO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.15131240400001,
    "lng": -71.58447720100003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ayacucho LOS HEREDEROS DEL MONTE 2",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -15.46485674600001,
    "lng": -73.98393452099998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno AMARU 06",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.172104543999978,
    "lng": -70.01932107599998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ACHASIRI 1 A",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.053818278999984,
    "lng": -70.18548769799997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno THREE FRIENDS GOLD EXPLORERS I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.273721469999998,
    "lng": -69.06489792399998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ARCANGEL MIGUEL UNO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.662461423000025,
    "lng": -71.68067180000003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco VC CONSTRUCCIONES II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.57193906499998,
    "lng": -71.69811990400001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Iron Project in Cajamarca NARANJO NEGRO",
    "mineral": [
      "Fe"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -6.561571346999983,
    "lng": -78.44996468300002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa ARI 2",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.907305549,
    "lng": -71.50648103399999,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa POLO 2",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.718549223000025,
    "lng": -71.429012994,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash ELENITA-I",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -8.266625920000024,
    "lng": -78.02289810600001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash HUGO FERNANDO MALDONADO",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.87524539399999,
    "lng": -78.10069385499997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Moquegua TALIA 2017",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "MOQUEGUA / PUNO",
    "status": "Active",
    "lat": -16.421321491000015,
    "lng": -70.32056490000002,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua TALIA 2017 B",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.45729303799999,
    "lng": -70.34890602399997,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa CELENO 3",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.575732889999983,
    "lng": -71.81580817000003,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno COASA 12",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.05495102399999,
    "lng": -69.92618970799998,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CORI 9",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.62922979199999,
    "lng": -70.118632219,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SAN LUIS DORADO V",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.680121226999972,
    "lng": -69.47368416199998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa FLORITA 2007",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.304579984999975,
    "lng": -71.58458793300002,
    "area": "99.9995 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa LINGA 2007",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.682796767000013,
    "lng": -71.67395060199999,
    "area": "199.9995 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa TAMBO 2007",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.990901886000017,
    "lng": -71.59380781200002,
    "area": "299.995 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa LA APACHETA 2007",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.495140624999976,
    "lng": -71.51220768500002,
    "area": "599.996 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno AFIME 1",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.678942832000018,
    "lng": -70.51159678200003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TRIPULANTE ESPACIAL SORANI 4",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.469969424999988,
    "lng": -69.54338025300001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua ROMEGAN",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.29268403399999,
    "lng": -70.966245948,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CHECACUPE 2019 3",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.92246058500001,
    "lng": -70.93437632000001,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios HENRY SEIS",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.691305225000008,
    "lng": -70.33713083100002,
    "area": "300.0115 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Moquegua MOQUEGUA 02 MBM",
    "mineral": [
      "Au"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.554632532000028,
    "lng": -71.02591810299998,
    "area": "899.993 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Amazonas NUEVA VIDA 1",
    "mineral": [
      "Zn"
    ],
    "region": "AMAZONAS",
    "status": "Active",
    "lat": -4.644496624999988,
    "lng": -78.16106548800002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco LUNAR DE ORO CAMANTI",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.18498746199998,
    "lng": -70.69421295199999,
    "area": "95.0029 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco TAWUA RUMI 2015",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.829876495000008,
    "lng": -71.54566932099999,
    "area": "400.01 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno BERENGUELA 03-18",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.705593663000002,
    "lng": -70.57710366600003,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Other Project in Arequipa EMADSUR XXVII",
    "mineral": [
      "Other"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.289679380999985,
    "lng": -71.77903542500002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ACERO L-4",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.441846805000011,
    "lng": -71.730531627,
    "area": "299.976 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ica SANTA BARBARA 2023 I",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -13.249481383999978,
    "lng": -76.12610216299998,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Cajamarca EL PANAL",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -6.908609812000009,
    "lng": -79.253221473,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Other Project in Arequipa S.P. NÂº 16",
    "mineral": [
      "Other"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.184180568999976,
    "lng": -71.84543012300003,
    "area": "0.1238 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SANTA LUCIA 22 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.646176819000004,
    "lng": -70.60102243300003,
    "area": "338.1627 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa LAJAS CORPORACION",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.18554646199999,
    "lng": -71.71388612599998,
    "area": "99.9995 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco REYES GEM",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.77317758700002,
    "lng": -70.80544181800002,
    "area": "100.0025 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua CELESTE 18",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.183859257999984,
    "lng": -71.32397714000001,
    "area": "999.988 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno NATIVIDAD 2017",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.61076095599998,
    "lng": -70.20173240399998,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa VITORCU 1",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.450558231000002,
    "lng": -71.90297110300003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco SHAMY III",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.182352589000004,
    "lng": -70.79926294699999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ANQASMAYO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.318560984999976,
    "lng": -70.70796839100001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua TORATA 25",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.006887501999984,
    "lng": -70.97437529299998,
    "area": "999.9865 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CISAC XXXIV",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.445811816999992,
    "lng": -70.20783069999999,
    "area": "300.009 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KORI ORCCO 100",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.63126375600001,
    "lng": -70.837662508,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua FITO A 2017",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.997386699000003,
    "lng": -70.64385772700001,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PLANTA METALURGICA JULIA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.398728022,
    "lng": -70.04770506099999,
    "area": "58.6491 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA OSO MAYO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.780769834000012,
    "lng": -69.63135320599997,
    "area": "1.0072 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ORO MIN ALFONZO UGARTE",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.165078036000011,
    "lng": -69.26873360600001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua CANTERA CENIZA 2",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.844175725000014,
    "lng": -70.89017990299999,
    "area": "2.6462 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CONSTANCIAS 9",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.496658394000008,
    "lng": -71.701455845,
    "area": "1000.024 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CONSTANCIAS 10",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.52353876799998,
    "lng": -71.72032646000002,
    "area": "100.002 ha",
    "verified": true
  },
  {
    "name": "Other Project in Tacna SIU KU II",
    "mineral": [
      "Other"
    ],
    "region": "TACNA / MOQUEGUA",
    "status": "Active",
    "lat": -17.746776576000002,
    "lng": -71.06717260200003,
    "area": "599.9895 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno AFC-3",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.67243524700001,
    "lng": -69.49277360399998,
    "area": "8.3918 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno AFC-5",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.67283226699999,
    "lng": -69.48842721199998,
    "area": "9.998 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LA MOCHA-A",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.67469418500002,
    "lng": -69.46786622799999,
    "area": "73.3162 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Cajamarca TUMBADEN 33 2024",
    "mineral": [
      "Cu"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -6.879784159999986,
    "lng": -78.83719640499999,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios LOS TRES HERMANOS 2005",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.834682113999976,
    "lng": -70.56820828299999,
    "area": "200.0085 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa JUAN ANDRES XVIII",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.379849776000015,
    "lng": -71.78966563900002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PATAQUEÃ‘A 4 2018",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.879490787999998,
    "lng": -70.24226333299998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua LA RECUPERADA 2 4",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.076385640000012,
    "lng": -70.54260621200001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MINING CORPORATION SANTA MARTHA III",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.159374970999975,
    "lng": -71.39851688800002,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa VALE332",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA / MOQUEGUA",
    "status": "Active",
    "lat": -17.017033905000005,
    "lng": -71.395277276,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MINERA-FLECHA-DE-ORO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.541095091999978,
    "lng": -71.15293302999999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa TORCONALE",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.216826318000017,
    "lng": -71.824746876,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in La Libertad LETICIA 2023",
    "mineral": [
      "Au"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.017103812000016,
    "lng": -78.54144440699997,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Apurimac PROYECTO NIKOL",
    "mineral": [
      "Pb"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -14.31202455099998,
    "lng": -72.246945364,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa GLADIZ I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.31506528,
    "lng": -71.463129132,
    "area": "199.999 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno BENEDICTA I 2016",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.951373004000004,
    "lng": -69.325757431,
    "area": "200.0065 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ucayali CANTERAS ADA",
    "mineral": [
      "Zn"
    ],
    "region": "UCAYALI",
    "status": "Active",
    "lat": -8.341030234000016,
    "lng": -74.94550690099999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Other Project in La Libertad ALCA II 2025",
    "mineral": [
      "Other"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.947327825000002,
    "lng": -79.01332929,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno JHOVANA II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.996121069000026,
    "lng": -69.57583564800001,
    "area": "500.021 ha",
    "verified": true
  },
  {
    "name": "Other Project in Arequipa VIRGEN DE COPACABANA OCHO",
    "mineral": [
      "Other"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.20538063700002,
    "lng": -71.328838486,
    "area": "199.9995 ha",
    "verified": true
  },
  {
    "name": "Other Project in Piura PIRATA DEL INDIO",
    "mineral": [
      "Other"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -5.247162512999978,
    "lng": -80.593909199,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LA NUEVA FORTALEZA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.987723781,
    "lng": -70.29450244100002,
    "area": "400.296 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa SUMAC MAYO RUMI JAMM",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.541942699000003,
    "lng": -71.372338512,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno HUIQUIZA 3",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.938099238999996,
    "lng": -70.47355868099999,
    "area": "500.017 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios MONTONERO 2005",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.030598011999984,
    "lng": -70.42338709799998,
    "area": "300.0111 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios BETYNA SEIS",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.070763410999971,
    "lng": -70.38525393100002,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios AMAZON STAR II",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.693096089999983,
    "lng": -69.91393475500001,
    "area": "491.6203 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TITAN DE ORO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.914870053000016,
    "lng": -69.520096007,
    "area": "200.0065 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua VIRGENCITA DE CHAPI OMEGA I",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.819218647000014,
    "lng": -71.32666658699998,
    "area": "35.9979 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno JYM ROBERT",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.686584294,
    "lng": -69.882780792,
    "area": "1000.0343 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios EL AMIGO II",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.675749442999972,
    "lng": -69.66482060999999,
    "area": "400.017 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GLADYZ ALICIA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.056699840000022,
    "lng": -69.111147873,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SUMAC SIPAS",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.82496669599999,
    "lng": -69.371764294,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno JHOVANITA III",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.743652580000004,
    "lng": -69.33446368900002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SAN ANTON CUATRO 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.436579420999976,
    "lng": -70.24488549900002,
    "area": "700.019 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua JR 2015",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.57069337500002,
    "lng": -71.22281570299998,
    "area": "99.9985 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco KORI RUMI I 2015",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.532875439000009,
    "lng": -71.43167182899998,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CANTERA 281",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.14178106999998,
    "lng": -71.91172123199999,
    "area": "0.0556 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CANTERA CALCA 1",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.251042100999996,
    "lng": -71.896881426,
    "area": "0.1583 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CANTERA CALCA 2",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.330963783000016,
    "lng": -71.96817879399998,
    "area": "1.8306 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ARTEMISA 1",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.354943089000017,
    "lng": -69.27823292099998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna ZEUS DE TACNA 2018 II",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -18.056463627000028,
    "lng": -70.40781810300001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua ANCHAQUI 9 2018",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.40288573800001,
    "lng": -70.376620457,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco EXPEDITO VIII",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.448688806999996,
    "lng": -71.08897278299997,
    "area": "300.008 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco PROYECTO VIRGENCITA DE FATIMA I",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.285255952,
    "lng": -70.78331509499998,
    "area": "100.003 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco INTI ORCCO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.452355645000011,
    "lng": -71.34777384799997,
    "area": "500.016 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ITUATA UNO 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.011708399999977,
    "lng": -70.242567242,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno DANTON I",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.687081191000004,
    "lng": -70.06516933099999,
    "area": "100.003 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno DANTON II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.705000969000023,
    "lng": -70.10223810399998,
    "area": "300.008 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SUMAC KORI II",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.705241698999998,
    "lng": -70.04675656900002,
    "area": "300.011 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno VALERIA 1 - 2015",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.395253610999989,
    "lng": -70.15724114400001,
    "area": "99.9995 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PLAYA SOL DE ORO 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.905903839000018,
    "lng": -69.48305133299999,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Tacna CANTERA PALCA 13",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.798398238999994,
    "lng": -69.982704426,
    "area": "1.2365 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Tacna CANTERA PALCA 15",
    "mineral": [
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.74023992399998,
    "lng": -69.87325732699998,
    "area": "0.9715 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Piura EL ROBLE IV",
    "mineral": [
      "Cu"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -5.156807968999999,
    "lng": -80.83758563499998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Lima JERUSALEN LINDO 2024 IX",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -11.745212762999984,
    "lng": -76.78937475999999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa LOS GENIALES II",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.61419945099999,
    "lng": -71.37322399200002,
    "area": "99.9985 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios GENESIS DORADA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.033551917000011,
    "lng": -70.56945060200002,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno JESUS 2004 DOS",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.629891438000016,
    "lng": -69.588640037,
    "area": "379.7046 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno JESUS 2004 DOS-2016",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.664784544999977,
    "lng": -69.58978586900002,
    "area": "275.7605 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco DON PAUL VI",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -15.235065206999993,
    "lng": -71.09182823399999,
    "area": "596.2067 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa YARABAMBA 3",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.549552984,
    "lng": -71.49418149000002,
    "area": "299.9975 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINAZPATA 4",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.027036494000017,
    "lng": -70.69631909200001,
    "area": "300.008 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PUTINA CUATRO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.723691906,
    "lng": -69.67519949500002,
    "area": "900.0287 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CARMENCITA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.806602928000018,
    "lng": -69.67118154299999,
    "area": "23.9695 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ATENEA 5",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.150103306000004,
    "lng": -69.44649597400002,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CALIZAYA II",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.014541470999973,
    "lng": -69.409191824,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno DARUBID DOS",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.668999602999977,
    "lng": -70.065088091,
    "area": "600.0205 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PEÃ‘ON DE ORO UNO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.240838596999993,
    "lng": -69.214926161,
    "area": "900.034 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna CURIBAYA VEINTITRES",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.544859175,
    "lng": -70.39614614599998,
    "area": "999.9805 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna CURIBAYA DIECINUEVE",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.526380766999978,
    "lng": -70.452517995,
    "area": "999.9815 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna CANTERA PALCA 3",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.640218300000015,
    "lng": -69.80801399299997,
    "area": "2.0238 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SAN ANTON ONCE",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.500552367000012,
    "lng": -70.10605702499998,
    "area": "800.024 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa CANTERA TURPO 1",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.11913950600001,
    "lng": -71.21466293999998,
    "area": "5.28 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINING ROCK SOLID JR II",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.186510236999991,
    "lng": -69.28901726599997,
    "area": "300.01 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno V GUADALUPE",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.93280729600002,
    "lng": -69.58493631599998,
    "area": "200.008 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KORI CANCHA UPINA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.67819632200002,
    "lng": -70.028144865,
    "area": "300.0105 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna DIABLO FUERTE 75",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.878920885000014,
    "lng": -70.436481002,
    "area": "299.9935 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa TAKANA 2-2021",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.647618045999993,
    "lng": -74.58946746200002,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno FLOR DE ORO SR23",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.155521496000006,
    "lng": -69.565237196,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CAESER IX",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.719786144000013,
    "lng": -69.41046642700002,
    "area": "300.01 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Lima MINING GOLD III 25",
    "mineral": [
      "Zn"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -12.607290852000006,
    "lng": -76.187665762,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ABRIL 23",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.10962865800002,
    "lng": -69.80598438499999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Junin PAULINA 2024",
    "mineral": [
      "Pb"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -12.464990766000028,
    "lng": -75.36808812999999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Lima MINING GOLD 25",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -12.552708619999976,
    "lng": -76.26104248399997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Iron Project in Lima HUAURA 2",
    "mineral": [
      "Fe"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -11.016874782999992,
    "lng": -77.51669211000001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Lima FLOR DORADA 25",
    "mineral": [
      "Cu"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -12.552708619999976,
    "lng": -76.26104248399997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CORANI 100",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.008830085,
    "lng": -70.71469935699997,
    "area": "200.005 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios NATALIA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.48660447499998,
    "lng": -69.18577925599999,
    "area": "100.0055 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ROCIO 106",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.038843929999985,
    "lng": -70.75983836299997,
    "area": "399.9985 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco HATUN RUMI III",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.583614290000014,
    "lng": -71.76465581100001,
    "area": "100.003 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios NADIA 2006",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.750689667000016,
    "lng": -69.78552662599998,
    "area": "60.0027 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SANTA LUCIA 14",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.666129497999975,
    "lng": -70.55945787000002,
    "area": "299.5878 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios MAJU 2006",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.987722964999987,
    "lng": -70.67055974800002,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CORANI I",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.006346190999976,
    "lng": -70.71444944199999,
    "area": "300.0075 ha",
    "verified": true
  },
  {
    "name": "Other Project in Arequipa TIABAYA 96",
    "mineral": [
      "Other"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.549440689999983,
    "lng": -71.503544992,
    "area": "99.9985 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna CANTERA PALCA 7",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.621866206999982,
    "lng": -69.649701338,
    "area": "5.0068 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Tacna GBT100",
    "mineral": [
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.642828167999994,
    "lng": -70.08409873300002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa DADIVA DE DIOS",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.134305288999997,
    "lng": -71.917001556,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Lima AUGUSTA HUAMANTANGA",
    "mineral": [
      "Pb"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -11.546739151999986,
    "lng": -76.72393532699999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco FATIMA 2 2025",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.725753654000016,
    "lng": -71.89737975100002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MIKI CUATRO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.23528569199999,
    "lng": -70.97494161600002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MUNDOREY V",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.699599680999995,
    "lng": -69.442612602,
    "area": "999.982 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno HUAYNA ROKE 03",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.974924208000004,
    "lng": -69.45368912800001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna VICTORIA DEL SUR I",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.867860128000018,
    "lng": -70.236456653,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno JUANITA FLOR CATALEYA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.611659691,
    "lng": -69.99838642499998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad ALCA I 2025",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.929204289999973,
    "lng": -79.00434873400002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Huancavelica HUANQUI LCA II 2025",
    "mineral": [
      "Au"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -12.112522592000005,
    "lng": -74.86214987199997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad ANGEL AVELINO",
    "mineral": [
      "Zn"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.09128401999999,
    "lng": -78.87656733,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco GUERRA 3",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.90467731199999,
    "lng": -70.89722189899999,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco GUERRA 5",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.92267926300002,
    "lng": -70.90662109599998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco GUERRA 10",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.967718375000004,
    "lng": -70.92549943,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua CUAJONE NW 4",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.999670015999982,
    "lng": -70.77710193399997,
    "area": "799.988 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno NUÃ‘OA DOCE",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.218535723999992,
    "lng": -70.43828884300001,
    "area": "900.028 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno NUÃ‘OA CATORCE",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.218755618999978,
    "lng": -70.40122421400002,
    "area": "1000.0305 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua RIVERITA 1",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.215657868999983,
    "lng": -70.87316653200003,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco SALVADOR 2016",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.195558656000005,
    "lng": -70.68118564899999,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa CHILA",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.084223130999987,
    "lng": -71.73805207599997,
    "area": "9.968 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CARMENCITA NÂº 3",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.804084315000011,
    "lng": -69.671624898,
    "area": "79.8992 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno AGUAS NÂº 2",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.827571170999988,
    "lng": -69.68407654399999,
    "area": "159.7987 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ANA MARIA NÂº 2",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.628007545999992,
    "lng": -69.43264363600002,
    "area": "131.6965 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios MINI PALMICHAL 2",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.52607664200002,
    "lng": -69.372190192,
    "area": "272.0132 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios LUISA 3",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.001696960000004,
    "lng": -70.47480832000002,
    "area": "105.6241 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios J.V.-12W",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.646999499000003,
    "lng": -69.95019666299999,
    "area": "986.6402 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ACERO P-1",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.033619686999998,
    "lng": -71.54632107399999,
    "area": "750.8138 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios NAPOLEON II",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.917412850000003,
    "lng": -70.31988977499998,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Junin FELICISIMO",
    "mineral": [
      "Cu"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -10.972981221999987,
    "lng": -75.21051859099998,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna DUNAS DE CORAL",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -18.074672210000017,
    "lng": -70.38906731999998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash EMILIA SOPHIA",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.663933661999977,
    "lng": -77.150719337,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huanuco TULUMAYO 1",
    "mineral": [
      "Cu"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -9.326055363000023,
    "lng": -75.801331576,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Apurimac APU EXALTACION I",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.583180114000015,
    "lng": -72.51416158500001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa MEDALLITA MIA",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.528444192999984,
    "lng": -71.464078658,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash AVENTURA 2 B",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.87777104600002,
    "lng": -77.58954916699997,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MARGARITA FLOR",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.173053062999998,
    "lng": -70.83609029500002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Huanuco ODA 6",
    "mineral": [
      "Pb"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -9.467223900000022,
    "lng": -76.76707577299999,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ayacucho GRAN CRUCERO",
    "mineral": [
      "Cu"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -15.399565785999982,
    "lng": -73.61155526200002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno INDUSTRIAS EL FRANCISCANO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.698446069,
    "lng": -69.33439482900002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna GBT101",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.642879725,
    "lng": -70.07467299199999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Ayacucho GEORGINAII",
    "mineral": [
      "Pb"
    ],
    "region": "AYACUCHO / ICA",
    "status": "Active",
    "lat": -15.060133338000014,
    "lng": -74.69295988699997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua RADCOM 8",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.243193700999996,
    "lng": -70.82643023899999,
    "area": "199.996 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno AURISUR",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.002231763999989,
    "lng": -69.34262336299997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GOLDEN PARADISE",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.659630693999986,
    "lng": -70.13900805899999,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad YACELI 1",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.697778454000002,
    "lng": -77.936758607,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Cajamarca EZMERALDA 2",
    "mineral": [
      "Cu"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -6.618497402999992,
    "lng": -79.04629720700001,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Other Project in Apurimac NIÃ‘O HUANCA 2",
    "mineral": [
      "Other"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.600969340999995,
    "lng": -72.486266699,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Iron Project in Apurimac SOL NACIENTE 1",
    "mineral": [
      "Fe"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.601062431000004,
    "lng": -72.495502107,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SAN ANTON SEIS",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.491244128999996,
    "lng": -70.1616831,
    "area": "900.027 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno JS SANTAMARIA ANCOCALA I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.535210235000022,
    "lng": -69.58475292700001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Junin EL QUINTO VENDAVAL",
    "mineral": [
      "Zn"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.830542262999984,
    "lng": -75.97308911099998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Moquegua PLANTA CONCENTRADORA CHAPI",
    "mineral": [
      "Au"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.767044655000007,
    "lng": -71.35729653499999,
    "area": "117.2484 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno OCACASA 3",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.973250974999983,
    "lng": -70.63113548500002,
    "area": "800.024 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios JOSE VALER 2",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.764956262999988,
    "lng": -70.04275382600002,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios LOS INTOCABLES I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.450377398,
    "lng": -68.75326152399998,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua PORFIDI BOSI 3",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.125138284000002,
    "lng": -70.89105125600003,
    "area": "199.996 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios ABEL 3",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.009221439999976,
    "lng": -70.00688143100001,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KORITONQUI",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.18640254600001,
    "lng": -69.23681314499999,
    "area": "59.9219 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa LA PORFIA",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA / PUNO",
    "status": "Active",
    "lat": -15.560984061999989,
    "lng": -70.99725156099998,
    "area": "899.9935 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco COPORAQUE 17",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.778225630000009,
    "lng": -71.56564701899998,
    "area": "100.002 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CHILLAMI7",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.19622688200002,
    "lng": -71.90154083099998,
    "area": "200.0045 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PULLANI 2015",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.91456052799998,
    "lng": -69.64968516099998,
    "area": "100.003 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MUNDOREY IV",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.530690732999972,
    "lng": -70.18596233400001,
    "area": "399.997 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CIELO AZUL 2015",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.914889545999984,
    "lng": -69.510839551,
    "area": "1000.0335 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno Ã‘ACARIA JESUS 2014",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.62683692600001,
    "lng": -69.510586794,
    "area": "814.2402 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna CANTERA PALCA 10",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.546478322999974,
    "lng": -69.622503145,
    "area": "2.199 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CAPAC SEIS 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.05015894500002,
    "lng": -69.65932600999997,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Cajamarca SANTISIMA VIRGEN DE LOS DOLORES V",
    "mineral": [
      "Cu"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -6.597719734000009,
    "lng": -78.449780229,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno QUELLO QUELLO SEIS 2015 - A",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.754570708000015,
    "lng": -70.523234306,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SANTA LUCIA 24 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.726365265000029,
    "lng": -70.672315927,
    "area": "699.9935 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LETRAN I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.810306611999977,
    "lng": -70.29026901200001,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KOLQUEPARQUE",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.692831187000024,
    "lng": -69.29895311299998,
    "area": "500.016 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Huancavelica ANTIQUIPARA 1",
    "mineral": [
      "Au"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -12.500749620000022,
    "lng": -74.40178082699998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno YESICA 7",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.520086085000004,
    "lng": -69.73493681000002,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CAYPOS II",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.345884583999975,
    "lng": -70.300017728,
    "area": "700.0205 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Apurimac LUANA 04",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -14.199844383000029,
    "lng": -72.74836144,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LIZETH II",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.051657826999984,
    "lng": -70.56512585399997,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Other Project in Arequipa TAMBO 7",
    "mineral": [
      "Other"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.95454148699997,
    "lng": -71.61207683800001,
    "area": "699.9915 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CISAC XVI",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.36473048099998,
    "lng": -70.15175576899998,
    "area": "400.012 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno FENIX 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.933616192999978,
    "lng": -70.74873868200001,
    "area": "199.998 ha",
    "verified": true
  },
  {
    "name": "Other Project in Tacna CANTERA PALCA 16",
    "mineral": [
      "Other"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.713139719000026,
    "lng": -69.83214255299998,
    "area": "2.6071 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Moquegua MILLUNE NÂº 1",
    "mineral": [
      "Au"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.100132340000016,
    "lng": -70.61561860699999,
    "area": "15.981 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua MILLO NÂº 1",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.097633412999983,
    "lng": -70.60402816800001,
    "area": "119.855 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios DORADO NÂº 1",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.997966096000027,
    "lng": -70.54161722200001,
    "area": "60.752 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios DORADO NÂº 1-A",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.997976458999972,
    "lng": -70.53986570400002,
    "area": "28.5013 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios LA ESPERANZA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.011612301000014,
    "lng": -70.52699696799999,
    "area": "20.0004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios LA ESPERANZA-B",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.011596025000015,
    "lng": -70.52976258899997,
    "area": "9.0004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios GOYMAR",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.96976245000002,
    "lng": -70.65200572600003,
    "area": "100.003 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna WILSON RUBEN 2006",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.819138966000025,
    "lng": -71.05857375199997,
    "area": "99.9975 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios AZUCARERA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.637879854000005,
    "lng": -70.16192750300002,
    "area": "300.011 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios CLAVELITO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.934006080000016,
    "lng": -70.587258512,
    "area": "600.021 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna CANTERA TARATA 2",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.326471489000028,
    "lng": -69.56736895099999,
    "area": "5.446 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco APU JERUSALEN",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.375566772000012,
    "lng": -71.18099032800001,
    "area": "100.002 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno AMANECER 2014 1",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.255600668,
    "lng": -69.14832615199998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa VIRGEN DE GUADALUPE II",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.58045739800002,
    "lng": -71.89728466600002,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Other Project in Tacna LAVANNI",
    "mineral": [
      "Other"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.853110715000014,
    "lng": -70.24754977499998,
    "area": "99.998 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CHUNCHUSMAYO I 2014",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.896980856000027,
    "lng": -69.41824165999998,
    "area": "300.01 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Junin CANTERA CRISTOFER",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.976779954999984,
    "lng": -75.26637577399998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno OASIS-MINING",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.119499209000026,
    "lng": -69.50029667400003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash SANTO DOMINGO",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -8.447149491999994,
    "lng": -78.00338209099999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco WHINY KEVIN",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.414797700999998,
    "lng": -71.49508624200001,
    "area": "1000.0285 ha",
    "verified": true
  },
  {
    "name": "Iron Project in Moquegua TORATA 05",
    "mineral": [
      "Fe"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.04365237899998,
    "lng": -70.90901487500003,
    "area": "599.991 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno USICAYOS TRES 2015",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.16623361400002,
    "lng": -70.06736181100001,
    "area": "400.013 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa LIZETH YASMIN",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.63600875200001,
    "lng": -73.86182545000003,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Ayacucho CRISTINA II 2022",
    "mineral": [
      "Pb"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -14.97809315699999,
    "lng": -74.36756135000002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huanuco ARCANGEL II 2023",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -9.217173018999972,
    "lng": -75.94672468599998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco REY DE LA SELVA 2015",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.213013538999974,
    "lng": -70.77356366999999,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco GUERRA 14",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.012754785000029,
    "lng": -70.94438606300002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CCORI TTICA",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.246557714999994,
    "lng": -70.66132902099997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ARTEMISA 2",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.409192641000004,
    "lng": -69.278300049,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MANCO CAPAC DE PUMAPACCHA",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.437330863,
    "lng": -71.61354449800001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Apurimac CHUQUI 4",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -14.190458356000022,
    "lng": -72.71140903600002,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Huanuco REINA MATILDE",
    "mineral": [
      "Pb"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -9.087203930999976,
    "lng": -76.82884569499998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios HANS FIORELLA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.598744762000024,
    "lng": -69.27578595900002,
    "area": "10.0003 ha",
    "verified": true
  },
  {
    "name": "Lead Project in La Libertad TOLOMEO BLAS II",
    "mineral": [
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.762286479000011,
    "lng": -77.74697689499999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINA ESPERANZA 2006",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.09557907300001,
    "lng": -69.57608319600001,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CHARUPAMPA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.006180518000008,
    "lng": -69.49251932200002,
    "area": "73.3796 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa MPM OCHO",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.01823105599999,
    "lng": -71.57540892600002,
    "area": "199.9985 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios TALIBAN I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.585346539,
    "lng": -69.655380976,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna ANEL ORIETTA CUATRO",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.792723672000022,
    "lng": -70.99225841600003,
    "area": "99.9985 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa FORTALEZA DE HUAHUANE",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.65923174400001,
    "lng": -71.11943539800001,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Pasco RAFAEL 02",
    "mineral": [
      "Pb"
    ],
    "region": "PASCO / HUANUCO",
    "status": "Active",
    "lat": -10.464995327999986,
    "lng": -76.005104233,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ancash ROCA NEGRA ESPERANZA",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.342289634999986,
    "lng": -78.10523025200001,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINERA CHAMBI II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.002099735999993,
    "lng": -69.42596275800003,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GUSS GUSS I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.02019932799999,
    "lng": -69.41673542199999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CHAQUIMAYO-SANGABAN",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.419864243999996,
    "lng": -70.40395076700003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ANGEL MAXIMO UNO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.538375660999977,
    "lng": -71.448435378,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Tacna VALE495",
    "mineral": [
      "Au"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.269634298000028,
    "lng": -70.495768596,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna VALE498",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.305637787000023,
    "lng": -70.514874141,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna VALE500",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.341923649000023,
    "lng": -70.49635325700001,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna VALE509",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.33456640700001,
    "lng": -70.25165206700001,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna VALE511",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.406743699999993,
    "lng": -70.27096908499999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Piura MACARA 2025",
    "mineral": [
      "Cu"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.921603059999995,
    "lng": -80.86470330700001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Lima MINA ESMERALDA COAL",
    "mineral": [
      "Cu"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -11.077426059999992,
    "lng": -76.58384000699999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Lima ASTRID XXV",
    "mineral": [
      "Cu"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -10.984718863000012,
    "lng": -76.976760146,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ayacucho OCAÃ‘A 90",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -14.499759335000022,
    "lng": -74.91647591899999,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Other Project in Ayacucho PUYU AGUADA",
    "mineral": [
      "Other"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -14.463607652999997,
    "lng": -75,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno AMANECER TUNQUINI I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.902461182000025,
    "lng": -69.51833866800001,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua OMATE 2015 1",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.735770738999975,
    "lng": -70.980938347,
    "area": "299.9955 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in AGROPON I",
    "mineral": [
      "Zn"
    ],
    "region": "/ MOQUEGUA",
    "status": "Active",
    "lat": -17.369259328,
    "lng": -71.39981266900003,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios CARMEN",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.006321481999976,
    "lng": -70.58771690700001,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios VIRGILIO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.816978988000017,
    "lng": -70.50361461400001,
    "area": "100.0045 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios CABECERA CAYCHIVE 2000",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.006707905999974,
    "lng": -70.52318706400001,
    "area": "300.011 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios KELY 4",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.676075629000024,
    "lng": -69.517469022,
    "area": "200.008 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios HORACIO ZEVALLOS D",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.657687118000013,
    "lng": -69.655565083,
    "area": "200.009 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PALOMA AZUL10",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.048127679999991,
    "lng": -70.200109054,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna EMILIO MIGUEL VI",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.83261052199998,
    "lng": -70.085241112,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios AMALUT CUATRO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.051574790000018,
    "lng": -70.578784751,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco FENIX DE ORO I",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.18583447499998,
    "lng": -70.78259231300001,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA MOHO CONIMA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.419997108000018,
    "lng": -69.48578024199998,
    "area": "0.3481 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SANTA LUCIA 17 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.844057200999998,
    "lng": -70.645273084,
    "area": "399.996 ha",
    "verified": true
  },
  {
    "name": "Other Project in Arequipa WILLISS 2",
    "mineral": [
      "Other"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.800710453000022,
    "lng": -74.34639893899998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ayacucho LOS DOCE AMIGOS",
    "mineral": [
      "Cu"
    ],
    "region": "AYACUCHO / ICA",
    "status": "Active",
    "lat": -14.156178915999988,
    "lng": -75.06486438299999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huancavelica TOMTIGRILLO I",
    "mineral": [
      "Cu",
      "Au"
    ],
    "region": "HUANCAVELICA / LIMA",
    "status": "Active",
    "lat": -12.835421166000003,
    "lng": -75.55292454800002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa CANCHETITO 25",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA / AYACUCHO",
    "status": "Active",
    "lat": -15.222240895000027,
    "lng": -74.38546006199999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna VINCENT VI",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.10752188700002,
    "lng": -70.41928752299998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna VINCENT XII",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.198341020999976,
    "lng": -70.35416160800003,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno NUÑOA ONCE",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.218310073999987,
    "lng": -70.47535289500001,
    "area": "1000.032 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa TANAKA MINING",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.73756517999999,
    "lng": -74.39327086499998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno OMAR Y ROSSIO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.413331820999986,
    "lng": -70.15734090799998,
    "area": "199.9985 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CISAC X LV",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.518887979999988,
    "lng": -70.05046789900001,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LOS DORADOS DE CHAVITA III",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.505725821,
    "lng": -70.18447040699999,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CCORYMAYO 2015",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.592150702000026,
    "lng": -70.48473167999998,
    "area": "99.9985 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KOLQUEPARQUE I",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.43077132000002,
    "lng": -69.14088240500001,
    "area": "1000.036 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Ancash CHINCHAY PUCAYACU",
    "mineral": [
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.455825652999977,
    "lng": -77.185826056,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios VICTOR AARON I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.620361608999984,
    "lng": -70.02375206099998,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios SALVACION IV",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.703129895000018,
    "lng": -69.554365959,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno JESUS 2004 UNO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.665137985,
    "lng": -69.59611085300003,
    "area": "300.009 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios LAGARTO R 2",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.666487657000005,
    "lng": -69.74767756300002,
    "area": "300.012 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ASERUNE TRES",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.172767121999982,
    "lng": -70.530644774,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TAYPICORANI",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.909857214,
    "lng": -70.64919733300002,
    "area": "200.006 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno BERNA 2005",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.314319356999988,
    "lng": -70.07297157300002,
    "area": "99.9995 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CHABUCA",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.906089115999976,
    "lng": -71.31978043999999,
    "area": "119.9377 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua QUELLAVECO E",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.094193886000028,
    "lng": -70.620654683,
    "area": "23.9717 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Moquegua QUELLAVECO C",
    "mineral": [
      "Au"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.101717201999975,
    "lng": -70.63655211700001,
    "area": "47.9443 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Tacna CANTERA LOS MOLLES",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -18.015581836000024,
    "lng": -70.27702317299998,
    "area": "199.996 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CALCESUR CABANA I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.656871002999992,
    "lng": -70.25198805399998,
    "area": "999.992 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CALCESUR LAMPA I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.185805228999982,
    "lng": -70.42601431000003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CALCESUR LAMPA II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.20382263099998,
    "lng": -70.43544314899998,
    "area": "499.9975 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco COPORAQUE 19",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.814969342999971,
    "lng": -71.51036349499998,
    "area": "100.002 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CONSTANCIA 36",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.576516760000004,
    "lng": -71.82299115000001,
    "area": "100.002 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GUADALUPE MINING I",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.68670982399999,
    "lng": -70.148384223,
    "area": "200.0075 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CYNTHIA VI",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.529655020000009,
    "lng": -69.54005904600001,
    "area": "700.026 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco DORADA SUR",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.599602361999985,
    "lng": -71.04435271199998,
    "area": "300.01 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco EXPEDITO X",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.555899015000024,
    "lng": -71.819731983,
    "area": "100.003 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa AGREGADOS SAN MARTIN 2015",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.51365049100002,
    "lng": -71.47499366699998,
    "area": "99.9985 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa DISMA",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.577203118,
    "lng": -71.44770488,
    "area": "99.9985 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno HERMAJUQUI TRES",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.692575917,
    "lng": -69.45685858600001,
    "area": "200.0065 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno USICAYOS DOS 2015",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.156939970999986,
    "lng": -70.122908903,
    "area": "900.029 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MACUSANI OCHO 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.137348083000006,
    "lng": -70.40998866799998,
    "area": "900.028 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SANTA LUCIA 23 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.799289746999987,
    "lng": -70.58890738500003,
    "area": "399.9955 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Apurimac ORCCO ICHU IX",
    "mineral": [
      "Zn"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.943938489999994,
    "lng": -73.55591769300003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad CARMEN 02",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.981992880000007,
    "lng": -78.72298647299999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa PLANTA DE BENEFICIO LA QUINTA",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.281733222000014,
    "lng": -71.92850402099998,
    "area": "9.1107 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno NICOLAZA ILADIA I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.516851439999982,
    "lng": -69.68679200499997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua VALE387",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.86629610099999,
    "lng": -71.140058038,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Apurimac ORCCO ICHU VII",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.870213603000025,
    "lng": -73.33433077400002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa PAPA SEBASTIAN 2025",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.56420310599998,
    "lng": -73.96479773800002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ZUABHATA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.344433618999972,
    "lng": -70.88352756400002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa TIABAYA 102",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.603627948999986,
    "lng": -71.504245663,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios MASSIEL 5",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.82749554999998,
    "lng": -70.21807270300002,
    "area": "300.011 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios VCHIQUITA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.924624810000012,
    "lng": -70.642493048,
    "area": "800.028 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios HARRIS I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.043443050999995,
    "lng": -70.421985124,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa COCHIZO 2",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.573604139999986,
    "lng": -71.49188474800002,
    "area": "29.8953 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios ORION F",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.610634630999982,
    "lng": -70.18942203400002,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios ESPERANZA 2005",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.648873573999992,
    "lng": -69.554248728,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios PENULTIMO DIAZ",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.595169684999972,
    "lng": -69.09378628299999,
    "area": "200.01 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MUYURINA SAN JUAN AMARUPAMPA",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.802776548999988,
    "lng": -71.54537515700002,
    "area": "200.005 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Lima CORICARAL 17",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -10.792355531999988,
    "lng": -77.34114770399998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Lima CATALINA 2020",
    "mineral": [
      "Cu",
      "Au"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -11.401997430999984,
    "lng": -76.74138213399999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MINERA JAQUELINE - I",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.746529324999983,
    "lng": -70.74051434799998,
    "area": "1000.0315 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco PUMAHUAIN 4",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.370946021999998,
    "lng": -71.635076389,
    "area": "100.002 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna VALE214",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -16.956141194999987,
    "lng": -70.42508062500002,
    "area": "798.4826 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna VALE217",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.020264618999988,
    "lng": -70.407435443,
    "area": "349.3343 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno S K",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.914165224999977,
    "lng": -70.498568756,
    "area": "100.0025 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CALIZAS LIVITACA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.270335863000014,
    "lng": -71.745047951,
    "area": "200.005 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TUMARUMA 07",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.57068225400002,
    "lng": -70.48283061900003,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huancavelica MI VIEJO 25",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -13.152481423999973,
    "lng": -75.092272358,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad ORMASAN 18-2024",
    "mineral": [
      "Zn"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.709468957000013,
    "lng": -77.52016308100002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad ORMASAN 17-2024",
    "mineral": [
      "Zn"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.70043208200002,
    "lng": -77.520109623,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash PIEDRA BLANCA 2025-1",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -10.092825253,
    "lng": -77.81007058199998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MAR DE ORO HERMANOS",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.06562821,
    "lng": -69.25935443700001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINA FORTUNA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.775195597999982,
    "lng": -69.77707351700002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco GUERRA 19",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.986226348000002,
    "lng": -70.870123412,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa CAILLOMA 31",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.150384789999976,
    "lng": -71.88448756999998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios ESPERANZA I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.637919747000012,
    "lng": -70.15272082000001,
    "area": "300.0125 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios PLAYA UNION 2007",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.657641264999995,
    "lng": -69.673982481,
    "area": "100.0045 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad ARGOS 03",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.091045768000015,
    "lng": -77.16878310999999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno AFC-22",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.675784244999988,
    "lng": -69.455823813,
    "area": "19.7313 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huancavelica NUEVA PLATA",
    "mineral": [
      "Cu"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -12.700064156999986,
    "lng": -75.39605457800002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno AFC-10",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.653449968000018,
    "lng": -69.584986087,
    "area": "141.2501 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Ancash IDF",
    "mineral": [
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -8.937025548999998,
    "lng": -78.27205142499997,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno AFC-13",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.663224974000002,
    "lng": -69.56548319799998,
    "area": "20.875 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios SAN JACINTO 2005",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.681981097000005,
    "lng": -70.39232871600001,
    "area": "300.0125 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TANTAMACO 7",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.919908442999995,
    "lng": -70.49195202700002,
    "area": "600.019 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno UNKU 2",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.81694309300002,
    "lng": -70.51729654799999,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ucayali LUNA BRILLANTE I",
    "mineral": [
      "Cu"
    ],
    "region": "UCAYALI",
    "status": "Active",
    "lat": -9.10047648699998,
    "lng": -75.50962427399998,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco SAN JUDAS TADEO FCP",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.262820080999973,
    "lng": -70.91980426399999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Iron Project in Arequipa CMZ-ZF2025-21",
    "mineral": [
      "Fe"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.964005913999983,
    "lng": -72.17882692500001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa CMZ-ZF2025-22",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.946069083999989,
    "lng": -72.18841243999998,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno UNKU 1",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.817056664999996,
    "lng": -70.49879742899998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ica ROSSLYN",
    "mineral": [
      "Cu"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -13.702951009000005,
    "lng": -75.74909276599999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GLADYZ DIONICIA III",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.427002179999988,
    "lng": -69.45459022400001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco DALILA XII",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.532684070000016,
    "lng": -71.078969116,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa GLOJECHI",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.458039816999984,
    "lng": -71.01315500700002,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno BETA ORCCO ACC",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.627123744000016,
    "lng": -70.51607703100001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Moquegua ANCHAQUI 8 2018",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "MOQUEGUA / PUNO",
    "status": "Active",
    "lat": -16.384932495999976,
    "lng": -70.35776953200002,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna ADRIANA EAA",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.260097218999988,
    "lng": -70.56152647800002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CERRO DORADO FR",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.645258194000007,
    "lng": -70.506949566,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huancavelica VICUÑA PUQUIO",
    "mineral": [
      "Cu"
    ],
    "region": "HUANCAVELICA / JUNIN",
    "status": "Active",
    "lat": -12.519284389999996,
    "lng": -75.34055286300003,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Pasco DASMEHR CARI",
    "mineral": [
      "Cu"
    ],
    "region": "PASCO",
    "status": "Active",
    "lat": -10.619681469,
    "lng": -75.63994952899998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Lima SHALOM 01",
    "mineral": [
      "Cu"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -11.653496061999988,
    "lng": -76.99052573799997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa ALESSIA III",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.889701392000006,
    "lng": -73.98183073299998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad MINERA SANTO DOMINGO DE GUZMAN",
    "mineral": [
      "Zn"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.17966131899999,
    "lng": -77.47768312300002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ancash BONIFACIO LLASHAG PRINCIPEIII",
    "mineral": [
      "Zn"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.09503259500002,
    "lng": -77.05627050599998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno BENDI 8A",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.901326505999975,
    "lng": -69.90706547799999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno COASA 14",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.036761575000014,
    "lng": -69.95389788699998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PERUAN 002",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.924574224000024,
    "lng": -70.26122246199998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna VICTORIA DEL SUR II",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.867860128000018,
    "lng": -70.236456653,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MINERA CONDOR",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.665213831000017,
    "lng": -71.412782215,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ancash AZUMI 2024",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -8.89256991000002,
    "lng": -78.37232569700001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa CMZ-ZF2025-14",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.948081940000009,
    "lng": -72.347080049,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ANTACORA DOS",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.036520058000008,
    "lng": -70.63158146500001,
    "area": "800.026 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa VIRGEN DE CHAPI 24",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.32908547300002,
    "lng": -71.517693049,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ica MINDU 76",
    "mineral": [
      "Cu"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -13.648342807999995,
    "lng": -75.85986431499998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 23",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.41232648099998,
    "lng": -71.67087317800002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 24",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.41253548200001,
    "lng": -71.652339719,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PEÃ‘ON DE ORO 21 2018",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.382117887999982,
    "lng": -69.23188899000002,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTONCANI",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.684273829999997,
    "lng": -69.924720541,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SARA 1S",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.391120247999991,
    "lng": -69.26900183599997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KOLQUEMAYO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.218487867000022,
    "lng": -70.000793923,
    "area": "51.9003 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa AURELIA JOSEFINA",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.356260811000027,
    "lng": -71.78171211199998,
    "area": "99.9995 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SANTA LUCIA 15 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.700853230000009,
    "lng": -70.44819511899999,
    "area": "199.999 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios YARO 2006",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.708856880999974,
    "lng": -70.438517634,
    "area": "500.019 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Cajamarca RENACER JC",
    "mineral": [
      "Zn"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.54509576800001,
    "lng": -78.20008755600003,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa DAVID 2006",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.568608555000026,
    "lng": -71.41013096500001,
    "area": "299.998 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa TORO BRAVO 2025",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.42791753900002,
    "lng": -73.82569141200003,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios SAVELI",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.828628896999987,
    "lng": -69.94165891400002,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Amazonas DONCELLA 21",
    "mineral": [
      "Cu"
    ],
    "region": "AMAZONAS",
    "status": "Active",
    "lat": -4.157559742999979,
    "lng": -78.45092308,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios ALEQUIÑO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.558950084000005,
    "lng": -69.18583103899999,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios CONCORDE II",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.531732599999998,
    "lng": -69.287063956,
    "area": "400.02 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua SEÑOR DE LOCUMBA 2017",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.636524038000005,
    "lng": -70.91340490300001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Piura CHILALO 5",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.305883938000022,
    "lng": -80.080813637,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Apurimac JERRY II",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.601794843999985,
    "lng": -72.56938783700002,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua JECODI",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.028033396000012,
    "lng": -70.627089007,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Junin OSCAR MB",
    "mineral": [
      "Cu"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.298206666999988,
    "lng": -75.50396819100001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Apurimac GRAU COPPER II",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -14.133544253000023,
    "lng": -72.44349505600002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huancavelica TRIPULANTE ESPACIAL ASTILEAD 2025 B",
    "mineral": [
      "Cu"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -13.613427704999992,
    "lng": -75.34205599500001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ayacucho EL SHADDAI 2026",
    "mineral": [
      "Cu"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -14.406466351000006,
    "lng": -73.83122157399998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Ica LUCIANA T",
    "mineral": [
      "Au"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -13.467579333999993,
    "lng": -75.840737934,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Other Project in Cajamarca LUCIANA T2",
    "mineral": [
      "Other"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -6.862143429000014,
    "lng": -78.93677261599998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Ancash TUJO 01",
    "mineral": [
      "Pb"
    ],
    "region": "ANCASH / HUANUCO",
    "status": "Active",
    "lat": -9.330911158999982,
    "lng": -76.90291424100002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huancavelica TINA 02",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -12.637036118000026,
    "lng": -75.11050044400002,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINERA NUEVO AMANECER I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.041013940000028,
    "lng": -69.69634515199999,
    "area": "200.0075 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ica ALTO LARAN P7",
    "mineral": [
      "Cu"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -13.422309954000012,
    "lng": -75.859053201,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ancash PACHAMAMA 18",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.79624308199999,
    "lng": -77.61624379099999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CALCESUR PUTINA I",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.93311243300002,
    "lng": -70.35925318699998,
    "area": "500.0135 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Cajamarca SORUYO I",
    "mineral": [
      "Pb"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -6.614070449999986,
    "lng": -78.13341389800001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Iron Project in Lima ASUNCION DE MARIA",
    "mineral": [
      "Fe"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -11.444178131,
    "lng": -77.190617105,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Lima SAN MARTIN DEL NORTE",
    "mineral": [
      "Cu"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -11.434369861999985,
    "lng": -77.29131282700001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Tacna SARINA 1 2014",
    "mineral": [
      "Pb"
    ],
    "region": "TACNA / MOQUEGUA",
    "status": "Active",
    "lat": -16.984006056,
    "lng": -70.454186849,
    "area": "983.3682 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua TORATA 01",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.01628278999999,
    "lng": -70.93691035799998,
    "area": "999.9865 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TUMARUMA MBM",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.474659574999976,
    "lng": -70.483891562,
    "area": "499.996 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios LOS HERMANOS GUZMAN",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.934911569000008,
    "lng": -70.43058489499998,
    "area": "300.0105 ha",
    "verified": true
  },
  {
    "name": "Iron Project in Arequipa LOREANGELA II",
    "mineral": [
      "Fe"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.238508061999994,
    "lng": -71.80809542999998,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios SELVA VIRGEN III",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.643328983999991,
    "lng": -69.39411907599998,
    "area": "456.0612 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TUNEL CAPACMAYO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.960038912000016,
    "lng": -69.53871330999999,
    "area": "100.003 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios ELI I A",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.709649292999984,
    "lng": -69.69342465300002,
    "area": "15.0006 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios PILAR A I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.567949810000016,
    "lng": -69.24107394800001,
    "area": "300.016 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna BRENO MIGUEL V",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.911997680000013,
    "lng": -70.80484245399998,
    "area": "399.991 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios PLAYA CARMEN PRIMERO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.61765746499998,
    "lng": -70.212073594,
    "area": "24.001 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios SALVADOR CUATRO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.628933750999977,
    "lng": -70.21765049700002,
    "area": "65.0028 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco TEJADA UNO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.176071035999996,
    "lng": -70.88398558,
    "area": "400.0135 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SANTA LUCIA 19 2015",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.790455505000011,
    "lng": -70.56083737199998,
    "area": "499.995 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno USICAYOS SEIS 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.166150585000024,
    "lng": -70.08589239999998,
    "area": "300.01 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MUÃ‘ANI 2 2015",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.637240390999978,
    "lng": -69.84675116599999,
    "area": "1000.03 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna AUTODROMO DE TACNA 2",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -18.141703914000004,
    "lng": -70.334645432,
    "area": "99.9975 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa LORD VEYRON",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.826765256999977,
    "lng": -74.05684528799998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna CANTERA PALCA 1",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.66149546600002,
    "lng": -69.81847054399998,
    "area": "2.0536 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GUADALUPE 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.040203028000008,
    "lng": -69.93712902800002,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GABAN 1",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.438045945,
    "lng": -70.38558535300001,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GABAN 9",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.44728630100002,
    "lng": -70.34869427000001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GABAN 4",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.44748155100001,
    "lng": -70.311750647,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna PIRAMIDE II",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.84996408500001,
    "lng": -70.20802346400001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco KENNETH C",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.136702345000003,
    "lng": -70.86348662900002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SAGITARIO 2017",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.902518583000017,
    "lng": -69.49057128300001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco PARAPAY UNO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.888414489000011,
    "lng": -71.96238355899999,
    "area": "1000.0235 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco PARAPAY TRES",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.888860421999992,
    "lng": -71.92540993,
    "area": "500.013 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Apurimac PUCA ORCCO 8B",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -14.107220611999992,
    "lng": -72.51784019299998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa PUZYURA 8 2014",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.266089165999972,
    "lng": -71.771089061,
    "area": "199.999 ha",
    "verified": true
  },
  {
    "name": "Other Project in Moquegua VALE428",
    "mineral": [
      "Other"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.892799695999997,
    "lng": -71.19665911200002,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CAPAC 6 2018",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.938190131999988,
    "lng": -69.694303515,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CANTERA SANTA ROSA 2023",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.381157605,
    "lng": -72.20253057100001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua VALE759",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.883665904999987,
    "lng": -71.205936479,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco DIANELA-II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.06147910499999,
    "lng": -71.231661336,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna VALE594",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.487450853999974,
    "lng": -70.36570165299997,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CORI 29",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.65643404299999,
    "lng": -70.10027049399997,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CORI 26",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.656309528000008,
    "lng": -70.12800465100003,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno BENDI 24",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.946949818000007,
    "lng": -69.786902053,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LAGOS 9",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.705112466999992,
    "lng": -70.64240862100002,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco HERMANOS LLACMA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.619082988999992,
    "lng": -71.75684249400001,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa CUPRIFERA PAITITI",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.024474382999983,
    "lng": -71.52681331399998,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TRAVERTINO 2017",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.250687190000008,
    "lng": -70.13229025499999,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LUCHO 02",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.796686448000004,
    "lng": -70.47512954199999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua COLA 02",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.348782355000026,
    "lng": -70.35751945700002,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ROANX",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.345335802000022,
    "lng": -70.388085703,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco JASPEROIDE 7",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.165778019000015,
    "lng": -71.89938982000001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Huanuco MINA YANA SHALASH2",
    "mineral": [
      "Pb"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -9.57602890200002,
    "lng": -76.70387279099998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna VICTORIA DEL SUR III",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.85882343899999,
    "lng": -70.236394243,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua SANTISIMA CRUZ DE PAZ Y BIEN IV-2",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.166024225,
    "lng": -70.98370283700001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua BLANCA PIEDRA II",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.641865075,
    "lng": -71.26208272500003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Moquegua VALE442",
    "mineral": [
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.748070864,
    "lng": -71.21374455400002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua VALE449",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.794415816000026,
    "lng": -71.10173413299998,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco HOZE 28",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.102004771999988,
    "lng": -71.94484899899999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa COOPER DEL SUR",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.245878917000027,
    "lng": -71.448515934,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PIRAMIDE V",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.946390235000024,
    "lng": -69.944268625,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LARIZA 2019",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.083076846999973,
    "lng": -69.61137329799999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ROSA DORADA 10",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.083053183999994,
    "lng": -69.62063613499998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua MARQUITO VI",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.669917155000007,
    "lng": -71.17762631099998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa RADALEII",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.668017480999993,
    "lng": -71.85002146699998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LAGOS 4",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.749498963000008,
    "lng": -70.74541114300001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LECHE MAYO I",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.248455895000006,
    "lng": -70.33836253800001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna SAN HILARION 19",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.957272030000013,
    "lng": -70.37870573800001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash ILUSION DAVARAMI 1",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.53160651799999,
    "lng": -77.94185335499998,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad CONSORCIO MINERO MARZA & ASOCIADOS I",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.007403661000012,
    "lng": -78.432708333,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno COASA 5",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.08214375099999,
    "lng": -69.90777458100001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Apurimac CHINCHE-CALLEBAMBA",
    "mineral": [
      "Zn"
    ],
    "region": "APURIMAC / AYACUCHO",
    "status": "Active",
    "lat": -13.511317968000014,
    "lng": -73.79876747600002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in SAN PABLO 2017",
    "mineral": [
      "Cu"
    ],
    "region": "/ MOQUEGUA",
    "status": "Active",
    "lat": -17.814851062000002,
    "lng": -71.14165591900002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GLADYZ DIONICIA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.689062990000023,
    "lng": -69.52014380499998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CANTERA MELLADO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.577819205000026,
    "lng": -71.97518454300001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Junin ARIANAS 01",
    "mineral": [
      "Cu"
    ],
    "region": "JUNIN / LIMA",
    "status": "Active",
    "lat": -11.467273028000022,
    "lng": -76.36599810000001,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huanuco PACHINKO DORADO",
    "mineral": [
      "Zn"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -9.695247693,
    "lng": -76.32172251999998,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa MERY I 2025",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.905458409000005,
    "lng": -72.562328133,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna VALE590",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.450976183000023,
    "lng": -70.412505732,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna VALE595",
    "mineral": [
      "Cu",
      "Au"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.41502854700002,
    "lng": -70.38398905700001,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Other Project in Tumbes CANTERA RIO ZARUMILLA",
    "mineral": [
      "Other"
    ],
    "region": "TUMBES",
    "status": "Active",
    "lat": -3.610650179999993,
    "lng": -80.19105530399997,
    "area": "4.601 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 85",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.576245986000004,
    "lng": -71.55226114700002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MARCIA 001",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.579412853999996,
    "lng": -69.90049429099997,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna CHINTARA CUATRO 2015",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.500679350999974,
    "lng": -70.245122331,
    "area": "499.991 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 83",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.593799126000022,
    "lng": -71.59884418799999,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 31",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.396089285000016,
    "lng": -71.50385930099998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa DON HUGO",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.040617725000004,
    "lng": -71.92305680300001,
    "area": "99.998 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno 18-B II-2014",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.811550210999997,
    "lng": -70.47276105700001,
    "area": "500.016 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno OCUVIRI II 2015",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.488952203999986,
    "lng": -70.96860380599998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno IRPA 1",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.61586336099998,
    "lng": -70.08929060000003,
    "area": "299.996 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Moquegua SAN EXPEDITO 5254",
    "mineral": [
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.25682221300002,
    "lng": -70.93765623299998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco DODALITTZ",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.299716077000028,
    "lng": -70.81858240399998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GABAN 7",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.47469744,
    "lng": -70.29342431200001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GABAN 10",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.429156966999985,
    "lng": -70.357828375,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LAGOS 2",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.731276087000026,
    "lng": -70.76391644,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Other Project in Junin ARIANAS 05",
    "mineral": [
      "Other"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.476688578999983,
    "lng": -76.283543893,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA ACUAÃ‘A",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.842764310000009,
    "lng": -69.87323941099999,
    "area": "0.6432 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA PEÃ‘A GRANDE 2",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.989327496999977,
    "lng": -69.695484561,
    "area": "0.3224 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA PULLUNE",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.043951990999972,
    "lng": -69.701903158,
    "area": "1.3743 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Junin ARIANAS 03",
    "mineral": [
      "Cu"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.440441869999972,
    "lng": -76.30171144100001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Junin ARIANAS 02",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "JUNIN / LIMA",
    "status": "Active",
    "lat": -11.449147806999974,
    "lng": -76.375076622,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Cajamarca SAN FRANCISCO DE ASIS GVS 7",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.188475707000009,
    "lng": -79.14353565699997,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ESCORPION ROJO DE BRIGITTE",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.400465727999972,
    "lng": -71.04968513300003,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Pasco MINDU 162",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "PASCO",
    "status": "Active",
    "lat": -10.466076826999997,
    "lng": -75.56653390000002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno RIKCHARI 02",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.893134642999996,
    "lng": -69.63863767200002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno AURIFERA SAN GABAN 01",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.420504074999997,
    "lng": -70.28389837700001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Pasco MINDU 163",
    "mineral": [
      "Cu"
    ],
    "region": "PASCO",
    "status": "Active",
    "lat": -10.638229145000023,
    "lng": -75.347426923,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua ATAHUASI 4",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.359991213,
    "lng": -70.537203084,
    "area": "799.99 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno N3RD EXPLORACIONES PERU",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.759967217999986,
    "lng": -69.92675556900002,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa ARCURKINA UNO 2015",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.447977698999978,
    "lng": -71.45261095000001,
    "area": "999.996 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ANTAUTA SAN ANTON 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.391030992000026,
    "lng": -70.309551925,
    "area": "1000.028 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno QORI INTI IV",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.638594040999976,
    "lng": -69.28959396099998,
    "area": "200.0085 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINERA VALENTINA V",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.687041232000013,
    "lng": -70.07441546000001,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINERA VALENTINA VII",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.687159866000002,
    "lng": -70.04667669600002,
    "area": "300.011 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa CHIGUATA 2015",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.399722208000014,
    "lng": -71.43595271700002,
    "area": "30 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua FITO H 2017",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.769991886000014,
    "lng": -70.82010485400002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Moquegua FITO G 2017",
    "mineral": [
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.83420509000001,
    "lng": -70.708124489,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ica EL AMANCER",
    "mineral": [
      "Cu"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -14.599219757000014,
    "lng": -75.07427688000001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno YANA ORCCO 01",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.652691973999993,
    "lng": -70.38081139100001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa SALLAPATA 3",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA / PUNO",
    "status": "Active",
    "lat": -15.440053671999976,
    "lng": -71.00366529600001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huancavelica QOLLQI MINA",
    "mineral": [
      "Cu"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -12.953493799,
    "lng": -74.81560309100001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 16",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.659025719999988,
    "lng": -71.41402568799998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA CHAMBI PICHUÃ‘A",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.344315719999997,
    "lng": -69.46290505799999,
    "area": "1.1134 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno METALES SAMYSAM 2024",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.828714063000008,
    "lng": -69.98080047899998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco SALVACION 2019-I",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.383175870000002,
    "lng": -70.49607083299998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco PLAYAPANDEAZUCAR 02",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.539175745000025,
    "lng": -71.365331965,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa SABANCAYA 3",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.390576502999977,
    "lng": -71.65883469900001,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 29",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.39559372399998,
    "lng": -71.55019460800003,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 26",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.394781975,
    "lng": -71.62432751,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALQO 27",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.395089042999984,
    "lng": -71.59652822700002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Moquegua GBT-76",
    "mineral": [
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.86539731099998,
    "lng": -71.22448858899998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa CR02",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.700814286000025,
    "lng": -71.400669757,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco HUININQUIRI3",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.274252853000007,
    "lng": -71.89151293999998,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua PINCO 6",
    "mineral": [
      "Zn",
      "Pb",
      "Ag"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.71163572400002,
    "lng": -71.24144737199998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno RAQCHI 1",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.255574801000025,
    "lng": -69.18540753100001,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna INCASOL 31",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.44187281400002,
    "lng": -70.42185021300003,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna INCASOL 9",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.360274129000004,
    "lng": -70.45886107799998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno RAQCHI 2",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.246492529000022,
    "lng": -69.23174987099998,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ica TOSIRAI 9",
    "mineral": [
      "Cu"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -13.956449937000002,
    "lng": -75.62955374900002,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MILAGROSS",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.996516972999984,
    "lng": -69.37212031199999,
    "area": "400.014 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KJHALY RUNA OCHOCHOQUE",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.020500278999975,
    "lng": -69.16669553600002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno INCHUPALLA 1",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.486940189999984,
    "lng": -69.871340648,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua MOQUEGUA 2 2019",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.203670140999975,
    "lng": -70.82429378799998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco NUÃ‘OA 2019 2",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO / PUNO",
    "status": "Active",
    "lat": -14.104410395000002,
    "lng": -70.778482215,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CONCHANI CCARANCCA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.143544634000024,
    "lng": -71.46403728000001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna AGREGADOS SINTICALA",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.866640792,
    "lng": -70.415752537,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco VIRGEN ASUNTA 2017 I",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.653329144999988,
    "lng": -71.68980582900002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CCERRO NUEVA FORT",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.281986421999989,
    "lng": -69.61190658200002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Iron Project in Arequipa DIVINA SUERTE III",
    "mineral": [
      "Fe"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.430452838000008,
    "lng": -74.49669392200002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GATO MALO 2017",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.67104146600002,
    "lng": -69.49223923099999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ayacucho ANGEL UNO",
    "mineral": [
      "Zn"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -15.050311722000004,
    "lng": -74.330135493,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno REYES DE ORO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.81150285000001,
    "lng": -69.730934397,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huancavelica FRONTERA SUR 2022",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -13.785408555999991,
    "lng": -74.83347267300002,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno AGUILAS 2019 UNO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.071458451000012,
    "lng": -70.77696431300001,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco Ã‘USTA DE ORO 2019 I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.304966643,
    "lng": -71.57696133600001,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Piura SUYO NUEVO",
    "mineral": [
      "Zn"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.522919773000012,
    "lng": -80.03547944899998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua VALE451",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.81257875199998,
    "lng": -71.09255414400002,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna BECO 2017 3",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.314673825,
    "lng": -70.514948189,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa ITALO PRIMERO",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.637866542999973,
    "lng": -71.10815062199998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LA ROCA DE MI CRISTO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.216265385999977,
    "lng": -70.75025111399998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad MINA SAN VICENTE BBB",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.926187084999981,
    "lng": -78.45134277900002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Iron Project in La Libertad MINA SAN VICENTE BB",
    "mineral": [
      "Fe"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.908169153000017,
    "lng": -78.46051738400001,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Lima ELIOR2",
    "mineral": [
      "Cu"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -10.936151376999987,
    "lng": -77.442857559,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huanuco ESPERANZA 17",
    "mineral": [
      "Zn"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -10.346747659000016,
    "lng": -76.20564535300002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MINERA KORI CONDOR",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.629521206999982,
    "lng": -71.366228143,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ACOS IM",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.950767815000006,
    "lng": -71.74871196700002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco GAMA 2019",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.209975379000014,
    "lng": -70.72566144299998,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PIEDRA DE FUEGO 10",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.87535992400001,
    "lng": -69.929426842,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco JOVE I",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.310915079999972,
    "lng": -70.48639554900001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PROYECTO MINERO 6 AMIGOS",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.698293702,
    "lng": -69.427280558,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa ISABEL MARGOT",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.140756242000007,
    "lng": -71.93084395300002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PAYRUMANI II",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.42445047000001,
    "lng": -69.65564711899998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua CHEN CHEN",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.25709223299998,
    "lng": -70.909449462,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Amazonas DORADO 2",
    "mineral": [
      "Cu"
    ],
    "region": "AMAZONAS",
    "status": "Active",
    "lat": -4.302373368000019,
    "lng": -78.513472573,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Lima SANTANDER BLOCK 1",
    "mineral": [
      "Pb"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -11.204184392999991,
    "lng": -76.54789789300003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios NILO MIO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.882568691000015,
    "lng": -70.02480577,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno Ã‘USTA 7",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.701798603999976,
    "lng": -70.06349409799998,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno INVERSIONES MATISA I",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.938883868000003,
    "lng": -69.37955956600001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa VITOR CU 2",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.46874453800001,
    "lng": -71.89388340699998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA PONTÃ“N",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.881448671999976,
    "lng": -70.80041780599998,
    "area": "3.2019 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA TRES POSTES",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.812296117000017,
    "lng": -70.62305677,
    "area": "1.7087 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PANORAMA UNO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.182048380000026,
    "lng": -69.77843970200001,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco SANTA ROSA ER 2015",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO / PUNO",
    "status": "Active",
    "lat": -13.35984098,
    "lng": -70.42381552400002,
    "area": "200.0075 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huancavelica MARTE 2022 TRECE",
    "mineral": [
      "Zn"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -12.962491452999984,
    "lng": -75.23972433,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ica OBAN 2",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -13.23182704300001,
    "lng": -76.02450477899998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua TORATA 43",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.93674702300001,
    "lng": -70.73895926799997,
    "area": "499.9905 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa SWISS 4",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA /",
    "status": "Active",
    "lat": -17.216042035999976,
    "lng": -71.64391425999997,
    "area": "199.9965 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna CANTERA BALDOR",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.962019156999986,
    "lng": -70.17277251399997,
    "area": "99.9975 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua KARLITA",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.38436366799999,
    "lng": -70.82607559000002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua FITO C 2016",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.82501253700002,
    "lng": -70.72680707500001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua FITO E 2016",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.779676478,
    "lng": -70.74515726099997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ANGELITO JUAN MANUEL",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.893419451,
    "lng": -69.51831852700002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua FITO I 2017",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.067720400999974,
    "lng": -70.86993732500002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LEYLA I",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.02021505099998,
    "lng": -69.40747481900002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PRINCESA CHICA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.48882587700001,
    "lng": -69.94652225800002,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALINES II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.101549233000014,
    "lng": -71.98185572099999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA PUCARA LADERA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.602418879000027,
    "lng": -69.40629222799998,
    "area": "0.2854 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA KM 1+950 RUTA21",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.608775279999975,
    "lng": -69.40549523200002,
    "area": "0.9333 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA PIZACOMA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.942634068000018,
    "lng": -69.38935798900002,
    "area": "0.5291 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA CALA HUANCANI",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -17.06570997900002,
    "lng": -69.49445133,
    "area": "0.9418 ha",
    "verified": true
  },
  {
    "name": "Other Project in Arequipa RAMSES Y RAMSEY",
    "mineral": [
      "Other"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.36264851200002,
    "lng": -71.72394001499998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco PLAYAPANDEAZUCAR 01",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.521019153999989,
    "lng": -71.37438679899998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MACUSANI YELLOWCAKE LITIO URANIO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.807375729,
    "lng": -70.60047870199998,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MOISES SALVADOR",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -12.947134528999982,
    "lng": -71.83859263199997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco Ã‘USTA MORENA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.376809363999996,
    "lng": -71.33605147999998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua INGRISCH COBRESUR 7",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.750898011999993,
    "lng": -70.932460978,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ayacucho MOLLYMOLLY",
    "mineral": [
      "Cu"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -13.855408071,
    "lng": -73.917305139,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Moquegua EL CHORRO 02",
    "mineral": [
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.240313001000004,
    "lng": -70.76823595899998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco HUMA 1",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.55811798000002,
    "lng": -71.85057610299998,
    "area": "200.0045 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CORDILLERA BLANCA II",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.556363153000008,
    "lng": -69.69792674899998,
    "area": "400.012 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua SAMEGUA 2 2014",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.161451123000006,
    "lng": -70.872621713,
    "area": "199.997 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MACUSANI CINCO 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.137293531000012,
    "lng": -70.41925150399999,
    "area": "600.0195 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ANTAUTA UNO 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.390716543999986,
    "lng": -70.365193325,
    "area": "500.0155 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ANTAUTA TRES 2015",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.26384209600002,
    "lng": -70.420038616,
    "area": "300.009 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco SUMAQ SIQUICHA OC",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.186088413999984,
    "lng": -70.74569539499998,
    "area": "300.01 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CISAC XXXVII",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.301127760999975,
    "lng": -70.21632666199997,
    "area": "300.0105 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CISAC XXXIII",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.546049858999991,
    "lng": -70.041314645,
    "area": "1000.0305 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Lima GMA 24",
    "mineral": [
      "Cu"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -12.243052481999996,
    "lng": -76.68237324799998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa FILON DE ORO II",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.314215373000025,
    "lng": -72.21563873000002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Junin MINDU 78",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -12.039917324999976,
    "lng": -75.40424874000001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Moquegua GBT-88",
    "mineral": [
      "Au"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.975375140999972,
    "lng": -71.07557386100001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Junin DIAMANTE ROSA UNO",
    "mineral": [
      "Pb"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -12.012702793000017,
    "lng": -75.45932636399999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ica MINDU 77",
    "mineral": [
      "Cu"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -13.657351823,
    "lng": -75.86914252399998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno JBI TRES REYES",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.747309710000025,
    "lng": -69.98970951500002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA MACARI 2",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.773204168999996,
    "lng": -70.89039052099997,
    "area": "0.7157 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa PUZOLANA 2019 2",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.499606382000024,
    "lng": -71.37694982599999,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa PUZOLANA 2019 4",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.553904650999982,
    "lng": -71.36825300200002,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Apurimac LEON-UNO",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.855560189000016,
    "lng": -72.649995472,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Lima LM05",
    "mineral": [
      "Pb"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -11.291781076999996,
    "lng": -77.01546558799998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Apurimac NUEVA-ESPERANZA-UNO",
    "mineral": [
      "Pb"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.847224408999978,
    "lng": -72.72405727699999,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ERIKA 2019",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.13663530399998,
    "lng": -70.872708311,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco EL GALLO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.070514859000014,
    "lng": -71.23174254899999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Lima LM06",
    "mineral": [
      "Zn"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -11.300943370000027,
    "lng": -76.99721351400001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Apurimac LEON-DOS",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.873629083000026,
    "lng": -72.64981359799998,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MAYTA QHAPAQ II",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.535079191000024,
    "lng": -70.398671192,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna CANTERA KM 53+630",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.786691448,
    "lng": -69.96781522600003,
    "area": "0.3317 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco JASPEROIDE 8",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.183950331000004,
    "lng": -71.890363799,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua ARUNDAYA A2",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.998194384999977,
    "lng": -70.54055757100002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua APACHE 6",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.847229830000003,
    "lng": -71.23365729800003,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna EL SUREÃ‘O",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -18.05632510300001,
    "lng": -70.42671068099997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna QUELLA 1 M",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.432769053000015,
    "lng": -70.431193844,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CCORI ALVA I",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.015980404000004,
    "lng": -71.26811632099998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa GOLDMINE II",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.340303049,
    "lng": -74.62733919099998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash KEDOSHIM I",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -8.50378925299998,
    "lng": -77.66127051699999,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PERLAS DE ORO 01",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.382200677000014,
    "lng": -69.12058253999999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SAN ANTONIO WHITE",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.123152446999995,
    "lng": -70.68601514900001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Other Project in Tacna DIABLO FUERTE 33",
    "mineral": [
      "Other"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.598040460999982,
    "lng": -70.00844095100001,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Other Project in Huanuco SANTA EMMA UNO",
    "mineral": [
      "Other"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -9.747757057,
    "lng": -76.71385072099997,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa CUPRIFERA COLCA II",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.263842463000003,
    "lng": -71.45802992199998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huanuco SANTA EMMA DOS",
    "mineral": [
      "Cu"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -9.702778697999976,
    "lng": -76.66805893200001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua VALE716",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.905518400999995,
    "lng": -70.82140072800001,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno NUÃ‘OA 2019 1",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.095372859000008,
    "lng": -70.77841213699998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Tacna SILVIA YOLANDA DE TACNA VI",
    "mineral": [
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.57510049199999,
    "lng": -70.71493772600002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad BAITH DE JUAN III",
    "mineral": [
      "Cu",
      "Au"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.127675416999978,
    "lng": -78.92173343399998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ayacucho 200K QORI",
    "mineral": [
      "Zn"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -15.275429814999995,
    "lng": -74.077977395,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa JAVICHO I",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.058045834999973,
    "lng": -71.72444098300002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Tacna SAMA-1-2017",
    "mineral": [
      "Au"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -18.12663315100002,
    "lng": -70.67298352099999,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ica MINERA DIAMANTES 2",
    "mineral": [
      "Zn"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -14.119720314000006,
    "lng": -75.37985705300002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna CANTERA GOTITO",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -18.144784383,
    "lng": -70.66370542300001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno FLOR DE LIZ DE ORO ARMAPAMPA 5",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.12861497,
    "lng": -69.46325686099999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ica BELLA LUZ 2024",
    "mineral": [
      "Cu"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -13.866081697000029,
    "lng": -75.61080093499999,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno E M ROCIO 1",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.766154229999984,
    "lng": -69.77704364700003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco NAYRA INTI",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -12.68309287699998,
    "lng": -72.90974559300003,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SANTA ROSA DE ORO A",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.62547459000001,
    "lng": -69.64070259200003,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GABAN 13",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.401836016000004,
    "lng": -70.39461192300001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco FAMOSO FORTUNATO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.10991815699998,
    "lng": -70.81717794500003,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CORI 21",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.529442355000016,
    "lng": -70.19208364600001,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua VALE437",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.81068773999999,
    "lng": -71.27074576299998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua VALE438",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.810894061,
    "lng": -71.25198986499998,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua VALE440",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.792725776999987,
    "lng": -71.26115382299997,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa CAILLOMA 33",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.159414348999974,
    "lng": -71.88461000799998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa DENITSA 1",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.638339599000005,
    "lng": -71.33429934999998,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ARCANGEL MIGUEL TRES",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.65342911800002,
    "lng": -71.68056969399998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno NUEVO PROYECTO ABIFER",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.838513885999989,
    "lng": -69.76803040099998,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Moquegua SANTISIMA CRUZ DE PAZ Y BIEN IV-3",
    "mineral": [
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.165931655999998,
    "lng": -70.99310012500001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa VALLE SAGRADO IV",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.213641230999997,
    "lng": -71.56696081199999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco PLAYA DE LOS REYES",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.821739842,
    "lng": -71.96901511099998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa GOLDEN MILSOL I",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.682480731999988,
    "lng": -74.14148950999999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua ALEJANDRA 2017",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.266741509999974,
    "lng": -70.84372149900003,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MINERA SUR CURAHUASI",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO / APURIMAC",
    "status": "Active",
    "lat": -13.503639009999972,
    "lng": -72.69965463300002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ayacucho GRUFESUR 5",
    "mineral": [
      "Cu"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -15.274693436999996,
    "lng": -73.363078126,
    "area": "99.998 ha",
    "verified": true
  },
  {
    "name": "Copper Project in La Libertad WHALGOS I",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.037416760999974,
    "lng": -78.94940431600003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CAPAC 2 2017",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.037748265000005,
    "lng": -69.657558236,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco GABAN 15",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO / PUNO",
    "status": "Active",
    "lat": -13.392537215000004,
    "lng": -70.44072711400003,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GABAN 19",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.50200550400001,
    "lng": -70.25661750299997,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Tacna VALE479",
    "mineral": [
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.306124502999978,
    "lng": -70.44902571400002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna VALE489",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.342929243000015,
    "lng": -70.35521809900001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna VALE491",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.23341926500001,
    "lng": -70.50488046800001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa SAN LUIS YURA",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.25500362600002,
    "lng": -71.666352889,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PILUNANI 001",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.570546526999976,
    "lng": -69.854046042,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco INTIORCCOIII",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.461217401999988,
    "lng": -71.36632430999998,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KATY",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.48469329300002,
    "lng": -69.41931403500001,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINERA ARTESANAL OCUPIZAC",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.592023958000029,
    "lng": -70.503380671,
    "area": "199.999 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno LUIS 2 OCUVIRI",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.111066881999989,
    "lng": -70.769734449,
    "area": "599.9985 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa EL HUAYCO",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.430429284000013,
    "lng": -71.63303866199999,
    "area": "99.9995 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Lima SUNSET 1",
    "mineral": [
      "Zn"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -13.121749598000008,
    "lng": -76.36534486800002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco HSPEMT MINERALES I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.340066342,
    "lng": -71.40028838,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Other Project in Piura DIVINO REDENTOR III",
    "mineral": [
      "Other"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.785908335999977,
    "lng": -80.89178412000001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco FENIX DE ORO 4",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.273430371000018,
    "lng": -70.69842437800003,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CHOQUE KAMANTI V",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.253643059000012,
    "lng": -70.93818488,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna EL CHORRO 07",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA / MOQUEGUA",
    "status": "Active",
    "lat": -17.29501260400002,
    "lng": -70.71232210099998,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Other Project in Moquegua EL CHORRO 06",
    "mineral": [
      "Other"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.294769753000026,
    "lng": -70.740537803,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINERA SANTA MARIA CHAMBI A",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.544319219999975,
    "lng": -69.55693114500002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua VALE628",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.802668992999997,
    "lng": -71.17686050700001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Moquegua VALE629",
    "mineral": [
      "Au"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.784602656000004,
    "lng": -71.17665454000002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SAN GABAN DE ORO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.42920657000002,
    "lng": -70.34859321699997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna NUEVO PACHIA",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.769402108999998,
    "lng": -70.07542645799998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA KM 98+900 CAPASO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -17.183735578999972,
    "lng": -69.65530513300001,
    "area": "1.8348 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Piura NORTE010",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -5.907430144999978,
    "lng": -80.46697753699999,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua EL ANGEL II",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.130700038999976,
    "lng": -70.89875707300001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno DORADAZO I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.761678362999987,
    "lng": -69.37165651700002,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Moquegua CARPANITO 36",
    "mineral": [
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.052762764000022,
    "lng": -70.49403150799998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna CARPANITO 42",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.098485256999993,
    "lng": -70.41921898200002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua APACHE 7",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.856768027999976,
    "lng": -71.18686069699999,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua APACHE 9A",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.874633034999988,
    "lng": -71.20583158099998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Piura NORTE011",
    "mineral": [
      "Zn"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -5.907494702999998,
    "lng": -80.53925002099999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in La Libertad ADELITA Y MARCOS II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -8.749392650000004,
    "lng": -78.58225650899999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco EMADSUR I",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.302439959000026,
    "lng": -71.78652188699999,
    "area": "840.2954 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno FENIX JS 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.083003419000022,
    "lng": -70.42817715199999,
    "area": "200.006 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna ARAMPAL",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA / MOQUEGUA",
    "status": "Active",
    "lat": -17.719478552999988,
    "lng": -71.08571208400002,
    "area": "999.9805 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Pasco VICTORIA 25 DOS",
    "mineral": [
      "Zn"
    ],
    "region": "PASCO",
    "status": "Active",
    "lat": -10.772568019000005,
    "lng": -75.96952739900001,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Pasco ANCORE I",
    "mineral": [
      "Au"
    ],
    "region": "PASCO",
    "status": "Active",
    "lat": -10.682357688000025,
    "lng": -75.89609571599999,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Cajamarca LEONIZA",
    "mineral": [
      "Cu",
      "Au"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -6.833784012000024,
    "lng": -78.66557168899999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ORO PUNO REM",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.529849538000008,
    "lng": -69.447243453,
    "area": "1000.034 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CAMILA REM 3",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.627598481000009,
    "lng": -69.48588582500003,
    "area": "319.3939 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco NORIESTELA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.388236571999984,
    "lng": -71.43944113600003,
    "area": "100.003 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PATALAYUNI II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.023267877000023,
    "lng": -69.56664225200001,
    "area": "100.003 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CANTERA QUELLOCUNCA",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.245018276999986,
    "lng": -71.25208592799999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CORAL ROSADO 1 2018",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO / PUNO",
    "status": "Active",
    "lat": -13.851153768000016,
    "lng": -70.80428846900003,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Z> AREA EXTINGUIDA",
    "mineral": [
      "Cu"
    ],
    "region": "",
    "status": "Active",
    "lat": -9.123411197999983,
    "lng": -76.81993306599998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno AREA DE 01",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.05906992299998,
    "lng": -69.70566149899997,
    "area": "100.0045 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco GALLO MAYO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.410402756999986,
    "lng": -70.47777074999999,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ROYER",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.228514813000004,
    "lng": -69.05561575600001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa PARAVER",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA / CUSCO",
    "status": "Active",
    "lat": -15.031564387999993,
    "lng": -71.20434783600001,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KORIMAYO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.62066325400002,
    "lng": -70.00766800999997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PACIFIC 2019 1",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.190632772000017,
    "lng": -69.90820495100002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno THREE FRIENDS GOLD EXPLORERS",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.25563796199998,
    "lng": -69.06489274299997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa ESCALERA 2 2019",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.58029147100001,
    "lng": -71.43379693499998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SIHUASIHUA PISCIS UNO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.173728906999996,
    "lng": -69.50968205100003,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ESTRELLA MAURO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.14656432999999,
    "lng": -69.528152751,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Other Project in Apurimac CANTERA TOROHUISCCANA 2",
    "mineral": [
      "Other"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -14.229295555000022,
    "lng": -73.42570602299998,
    "area": "1.1593 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Apurimac CANTERA PUCAHUASI",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -14.208093797000004,
    "lng": -73.36646220699998,
    "area": "0.5891 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MILLOHUAYCO7",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.065544826000009,
    "lng": -71.97213657399999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua PINCO 9",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.757002935999992,
    "lng": -71.22322468599998,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua CANTERA RIO TAMBO",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.764149336999992,
    "lng": -70.99881241899999,
    "area": "14.6435 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash ACUMULACION FERNANDO ANTONIO F",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.184322000000009,
    "lng": -77.68776201499998,
    "area": "200.0981 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MINERA PAYCONI 2017",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.037618028999988,
    "lng": -69.703862733,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa CRISTO REY XXIV",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.160353209999982,
    "lng": -72.00786892899998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ica EL NEGRO 1",
    "mineral": [
      "Zn"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -14.244506806999992,
    "lng": -76.00110788799998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Lima SANTA CLARA 1",
    "mineral": [
      "Pb"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -10.600124387999983,
    "lng": -77.65021534499999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ALEJANDRO TOLEDO CCORI",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.966167391999988,
    "lng": -69.25924275599999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco SHAMY 2019",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.272132985999974,
    "lng": -70.88296872500001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno GOLD SOUTH",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.801591676999976,
    "lng": -69.98068702699999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Amazonas CANTERA KM 03+240",
    "mineral": [
      "Cu"
    ],
    "region": "AMAZONAS",
    "status": "Active",
    "lat": -6.369558471999994,
    "lng": -77.92013173200002,
    "area": "4.2222 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua APUS IV",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.187289369999974,
    "lng": -70.62672237100003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Other Project in Junin CANTERA KM 17+500",
    "mineral": [
      "Other"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -10.88741709300001,
    "lng": -75.94492445899999,
    "area": "0.9062 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ayacucho PROMESA 3 2025",
    "mineral": [
      "Cu"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -14.481689285000016,
    "lng": -75.02783911300003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash SAN BENITO",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -8.465215252999997,
    "lng": -78.00324245899998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco KORY MAQUI 2017 IV",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.372433896000018,
    "lng": -71.98541553299998,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CONTINENTAL 18",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.218634225000017,
    "lng": -70.78107726799999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Ancash MBM PIERINA 01",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.334829921999985,
    "lng": -77.69459137000001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno NUEVA ESTRELLA IV",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.680121226999972,
    "lng": -69.47368416199998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SAN FELIPE DE NERI IV",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.101159693,
    "lng": -69.61142142400001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno DORADO ICHUCRUZ",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.928955495000023,
    "lng": -69.75907176499999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KELLO KELLO 04",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.76918716900002,
    "lng": -70.530929362,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa ESCALERA 3 2019",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.57136176199998,
    "lng": -71.42437209600001,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ENRIQUE EL AVE FENIX",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.128252137999992,
    "lng": -70.78042372300001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ESPERANZA COPPER I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.660607142000003,
    "lng": -70.54877422599998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno JESUS Y JUANA II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.954887466000002,
    "lng": -70.65515147899998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MARAVILLOSA CUATRO 2021",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.336987231000023,
    "lng": -69.12983210800002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco BASHIRA GALIANA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.201182929000026,
    "lng": -70.688698214,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco FABRIZZIO III",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.145605736999984,
    "lng": -70.881998866,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PUTINA 16",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.697406387,
    "lng": -69.77094557200002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PUTINA 18",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.724619387000018,
    "lng": -69.74317354599998,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Amazonas MONTE DORADO",
    "mineral": [
      "Cu"
    ],
    "region": "AMAZONAS",
    "status": "Active",
    "lat": -3.9498537150000175,
    "lng": -78.50556980099998,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KORY PERU 4",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.57122877400002,
    "lng": -69.64054566800002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KORY PERU 3",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.580269697000006,
    "lng": -69.64057174999999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Junin YC033",
    "mineral": [
      "Cu"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.641474824,
    "lng": -75.68805285299999,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ESPERANZA LOS ROSALES DOS",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.245619212999998,
    "lng": -70.79972671000002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TESORO I 2017",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.038233319000028,
    "lng": -69.44455212100002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KORI CONCEPCION",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.938503368999989,
    "lng": -69.57396232299999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huanuco LOS TRES MIRADORES DE AURES I",
    "mineral": [
      "Cu"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -8.63486932699999,
    "lng": -76.89020155399999,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno HORUS GOLD I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.374510535000011,
    "lng": -70.43138698500002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Apurimac VIRGEN DE COCHARCAS 001",
    "mineral": [
      "Zn"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.801264732999982,
    "lng": -72.641295232,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash MONTECRISTO2024",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.081513653999991,
    "lng": -78.26187661,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA KM 5+900 RUTA22",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.906300805,
    "lng": -70.09180053400001,
    "area": "0.8313 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA KM 32+100 RUTA22",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -17.081794386000013,
    "lng": -70.04062511400002,
    "area": "0.9913 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA KM 10+250 RUTA23",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.301110917000017,
    "lng": -69.558032825,
    "area": "0.2868 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua VALE 385",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.884751544999972,
    "lng": -71.10273165799998,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua DIABLO FUERTE 92",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.627213884000014,
    "lng": -70.94157329699999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno KORICANCHA 2016",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.481175760999976,
    "lng": -69.49181792500002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco AURIFERA SAN CARLOS",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.314485268,
    "lng": -70.45124293999999,
    "area": "100.003 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PUTINA 24",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.769967439000029,
    "lng": -69.69687149999999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno YAQUITROMING DE KORI TIKA SJ LIFON",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.11977496999998,
    "lng": -69.34279836000002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA KM 43+800 RUTA18",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.86237139399998,
    "lng": -69.78743522399998,
    "area": "0.661 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua CLAVE ONE",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.65151686600001,
    "lng": -70.93146140599998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno BRILLO DE SOL",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.25763979300001,
    "lng": -70.31072580699998,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Other Project in Arequipa LOS DESGRACIADOS",
    "mineral": [
      "Other"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.31564265999998,
    "lng": -71.863567504,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Moquegua COBRE CUELLAR",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.005801914000017,
    "lng": -70.71906384800002,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huancavelica CHATO",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -13.758261862999971,
    "lng": -75.194259375,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Piura PAULO NICOLAS",
    "mineral": [
      "Cu"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -5.210325555999987,
    "lng": -80.007432736,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TUNKY ESTRELLA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.083731143000024,
    "lng": -69.24084817300002,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huanuco CARMEN PATRICIA",
    "mineral": [
      "Cu"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -9.786451453999971,
    "lng": -76.10328238300002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa CARBONERA 2024",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.132497741000009,
    "lng": -74.72077790200001,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Apurimac VALLE CHACA",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC / AYACUCHO",
    "status": "Active",
    "lat": -13.72762028599999,
    "lng": -73.66821370000002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Lima ELIOR3",
    "mineral": [
      "Cu"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -10.954075853000006,
    "lng": -77.46129367499998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Cajamarca BONDADOSA 2024",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -6.894784588999983,
    "lng": -78.24025280900003,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco PEPA DE ORO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.128504785000018,
    "lng": -70.74353600699999,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CANTERA KM 13+000 RUTA23",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.28652895099998,
    "lng": -69.539015995,
    "area": "0.3278 ha",
    "verified": true
  },
  {
    "name": "Lead Project in La Libertad WHALGOS IX",
    "mineral": [
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.955694618999985,
    "lng": -78.87727128900002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno TITIÃ‘AHUI I",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.802683719000015,
    "lng": -70.44031511700001,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco EL FENIX II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.33093542900002,
    "lng": -71.67917120999999,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PIEDRA DE FUEGO 2",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.929281049999986,
    "lng": -69.99542153599998,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PIEDRA DE FUEGO 8",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.911470839000003,
    "lng": -69.938992987,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa ROYER UNO",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.583116014999971,
    "lng": -74.16055658099998,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in La Libertad RESPLANDOR IX",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.899936615999991,
    "lng": -78.596529293,
    "area": "800 ha",
    "verified": true
  },
  {
    "name": "Copper Project in D-ANTONELLA 2",
    "mineral": [
      "Cu"
    ],
    "region": "/ ICA",
    "status": "Active",
    "lat": -14.806293042999982,
    "lng": -75.64123054200002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco BARRIONUEVO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.191103164000026,
    "lng": -71.558910465,
    "area": "200.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno VIRGEN DE GUADALUPE II 2015",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.340242421000028,
    "lng": -69.270663238,
    "area": "300.011 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Ancash LUNA AZUL",
    "mineral": [
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.342947569999978,
    "lng": -78.18708868099998,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna AGREGADOS SANTA ROSA DE PUQUIO",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.825694392999992,
    "lng": -70.29453368600002,
    "area": "499.9895 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno COFRE 2015",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.437799145999977,
    "lng": -70.58612662299998,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Moquegua NIKKI 12",
    "mineral": [
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.934653790000027,
    "lng": -70.577593638,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Tacna RADCOM 9",
    "mineral": [
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.88678053899997,
    "lng": -70.095008592,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Huanuco MINERA ALESS",
    "mineral": [
      "Pb"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -9.884328234000009,
    "lng": -76.51396124799999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ECOMIN PERU II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.301766997000016,
    "lng": -70.50479983000002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna CANTERA NEYZEL",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.88683335600001,
    "lng": -70.08557008899999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Moquegua VICTORIA I 2019",
    "mineral": [
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.238844305999976,
    "lng": -70.92806635900001,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno NUEVA ALIANZA JC",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.074745253999993,
    "lng": -69.17599782500002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Ancash VALE770A",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -8.393226353999978,
    "lng": -77.95991650799999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco SUMAC PAMPA DORADA I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.193294139999978,
    "lng": -70.50413337100002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Apurimac CRISTO VIVE EN MI",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.706551551000018,
    "lng": -73.19682121900001,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco RIO MARAN",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.724893956000017,
    "lng": -70.766338228,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco LA PERLA V",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.450483650000024,
    "lng": -71.48592589600003,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno MAJUPER SAN JOSE LIFON",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.110706171000004,
    "lng": -69.361313516,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno HUAYNA ROKE 02",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.065249736999988,
    "lng": -69.50017851899997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa MINERA MICAELAS GOLD",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.519579705000012,
    "lng": -74.09554848800002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios JCRESPO I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.689751206999972,
    "lng": -69.91178148300003,
    "area": "500 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa XIMENA II 25",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.83948369799998,
    "lng": -72.32984263100002,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CANTERA CNT 19",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.132137462999992,
    "lng": -71.51966361199999,
    "area": "0.5507 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa CANTERA TR11 13 1",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.933770901999992,
    "lng": -71.905150714,
    "area": "0.5109 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa CANTERA TR 729",
    "mineral": [
      "Cu",
      "Au"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.467773901999976,
    "lng": -71.77822321600001,
    "area": "1.0441 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Moquegua CANTERA VAR ILO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.625030787000014,
    "lng": -71.29715299100002,
    "area": "0.3105 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa CANTERA TR10 26 1",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.280281317999993,
    "lng": -71.67822669899999,
    "area": "0.4232 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa CANTERA TR10 28 1",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.35340349500001,
    "lng": -71.731662745,
    "area": "0.3375 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa XIMENA III 25",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.839252987000007,
    "lng": -72.311184959,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco ALCATRAZ 3",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.122964485000011,
    "lng": -71.98389914199998,
    "area": "200.005 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios JKING I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.67612772299998,
    "lng": -69.48984011800002,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios LENIN DIEGO NIGK",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.70956941899999,
    "lng": -70.30039049099997,
    "area": "200.008 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios ALI MIGUEL",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.530799734000029,
    "lng": -69.76569251299998,
    "area": "200.008 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios VICTOR RAUL I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.530692638000003,
    "lng": -69.80250816799997,
    "area": "300.013 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios SOL MARIA X",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.530926530999976,
    "lng": -69.7196725,
    "area": "500.0235 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios ERIKA FLOR",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.648794785999996,
    "lng": -69.591082884,
    "area": "100.0045 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SANTA CRUZ 1",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.140090835000024,
    "lng": -69.81709170699997,
    "area": "800.029 ha",
    "verified": true
  },
  {
    "name": "Other Project in Arequipa MI GRAN CHUNCHITA",
    "mineral": [
      "Other"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.835071943000004,
    "lng": -71.56919964999997,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco HANCCOLLAHUA 5",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -15.04324618999999,
    "lng": -71.28058481199997,
    "area": "599.998 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Apurimac BAMBAS NORTE RTX 7",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.96914344999999,
    "lng": -72.27881842300002,
    "area": "900 ha",
    "verified": true
  },
  {
    "name": "Other Project in Lima MANCHAPAMPA 2402",
    "mineral": [
      "Other"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -12.536551502000007,
    "lng": -75.74556906999999,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno QURI PARAISO ENCANTADO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.526800771000012,
    "lng": -69.21347600299998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SAN ISIDRO PHALTA ORCCO UTUZAN",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.365588731999992,
    "lng": -69.97831731399998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna CANTERA ROCA UNO",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.297311132000004,
    "lng": -69.59721275499999,
    "area": "4.4513 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Tacna CANTERA CY2",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.448064574,
    "lng": -69.51252382899997,
    "area": "62.9868 ha",
    "verified": true
  },
  {
    "name": "Other Project in Cajamarca NAMBALLE",
    "mineral": [
      "Other"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -5.009288405999996,
    "lng": -79.08790557399999,
    "area": "700 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa TICLACAHUA 6 2010",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA / CUSCO",
    "status": "Active",
    "lat": -15.075271584999996,
    "lng": -71.75047717799998,
    "area": "115.6732 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huancavelica KARLA 39",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -13.069788960999972,
    "lng": -74.98342621799998,
    "area": "6.7811 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CAMILA GOLD",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.910662871,
    "lng": -69.82380192300002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Moquegua GBT -69",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.753475579999986,
    "lng": -71.01863187200001,
    "area": "999.986 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huancavelica KARLA 70",
    "mineral": [
      "Zn"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -13.07525687499998,
    "lng": -74.986448215,
    "area": "32.2921 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MIKI 2016",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.204352685999991,
    "lng": -70.718148472,
    "area": "300.009 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno HATUM LI 1",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.996748070000024,
    "lng": -70.66657657399998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Huancavelica KARLA 32",
    "mineral": [
      "Zn"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -13.049256308999986,
    "lng": -74.95630905399997,
    "area": "0.2587 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna ANY 3",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.566270438999993,
    "lng": -69.87525615300001,
    "area": "997.9259 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Tacna ANY 7",
    "mineral": [
      "Au"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.56627067300002,
    "lng": -69.87295472199997,
    "area": "437.9795 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco SUMAC CHUPICHA OJ",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.531697002999977,
    "lng": -71.79460555499998,
    "area": "200.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CANTERA OCORURO 2",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -15.015466963999984,
    "lng": -71.15715317799999,
    "area": "9.8906 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CANTERA ESPINAR 1",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.889495141999989,
    "lng": -71.25358375500002,
    "area": "1.7375 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios SOLAR B 2011",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.495703626000022,
    "lng": -68.94649318699999,
    "area": "1000.0445 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios DIEGO I 2011",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.477617010000015,
    "lng": -68.94649691299998,
    "area": "1000.048 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno DORADO 26 OROANDES",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.19562920200002,
    "lng": -69.21488401699997,
    "area": "900.0345 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios SANDRA 16",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.962473911000018,
    "lng": -70.34778098800001,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios VIRGINIA MARIA I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.549961643000016,
    "lng": -69.06615346699999,
    "area": "100.005 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Ayacucho BERRYS PUQUIO",
    "mineral": [
      "Pb"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -14.750799745999984,
    "lng": -74.00590599100002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios CUATRO AMORES",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.92571854900001,
    "lng": -70.458181513,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios CLARA 2009",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.74460717300002,
    "lng": -70.51239604699998,
    "area": "100.0045 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa JERUSALEN 0042021",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.79140165199999,
    "lng": -74.26240196499998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios WILLIAM 2",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.522134979999976,
    "lng": -69.61840518399998,
    "area": "400.016 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa JERUSALEN 0052021",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.782329962000006,
    "lng": -74.25309896200002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huanuco MINERA ALEDAF 2023",
    "mineral": [
      "Cu"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -10.193093465000004,
    "lng": -76.186807321,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Other Project in Tacna VALE1054",
    "mineral": [
      "Other"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.288835052000024,
    "lng": -70.33600756099997,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CANTERA ACCHA 2",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.959822723999991,
    "lng": -71.82294159700001,
    "area": "0.0849 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CANTERA OMACHA 2",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.130067723000025,
    "lng": -71.71768825700002,
    "area": "1.2077 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa SHYLI 49",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.569038992999992,
    "lng": -71.37267003900001,
    "area": "399.998 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Tacna CONDI B 2014",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.29066501699998,
    "lng": -70.554129402,
    "area": "99.9975 ha",
    "verified": true
  },
  {
    "name": "Other Project in Moquegua RUTH UNO",
    "mineral": [
      "Other"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.654272132000017,
    "lng": -71.26398427800001,
    "area": "99.9985 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa CARDONES OCHO",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.171016701999974,
    "lng": -71.633880207,
    "area": "599.991 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa TIABAYA 144",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.484016863000022,
    "lng": -71.68056618499998,
    "area": "199.999 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa EL HOTORONGO I",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.51452515400001,
    "lng": -71.400095529,
    "area": "99.9985 ha",
    "verified": true
  },
  {
    "name": "Iron Project in Lambayeque MINERA EL AVE FENIX",
    "mineral": [
      "Fe"
    ],
    "region": "LAMBAYEQUE",
    "status": "Active",
    "lat": -6.783060933999991,
    "lng": -79.57029711500002,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa GALLANUYOC",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.605486462999977,
    "lng": -71.34501148200002,
    "area": "199.998 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco BARRIONUEVO 2012",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.200036791000002,
    "lng": -71.56827067900002,
    "area": "100.003 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MISHELL BETZABETH",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.684375880000005,
    "lng": -71.63648945800003,
    "area": "100.003 ha",
    "verified": true
  },
  {
    "name": "Iron Project in Lima SANTA MARGARITA UNO",
    "mineral": [
      "Fe"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -11.053167347999988,
    "lng": -77.49870660599998,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Piura CENICIENTA",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.785899701000005,
    "lng": -80.84669437600002,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CELIA I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.205796127999974,
    "lng": -70.48750548800001,
    "area": "200.006 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios PLUTON I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.818497030999993,
    "lng": -70.20881616399998,
    "area": "100.0045 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios JAVIER JAGUAR VII",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.773850014000004,
    "lng": -70.07963841399999,
    "area": "400.016 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Lima PROYECTO PLATOSO",
    "mineral": [
      "Zn"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -12.552708619999976,
    "lng": -76.26104248399997,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Pasco EAC 11",
    "mineral": [
      "Cu"
    ],
    "region": "PASCO / JUNIN",
    "status": "Active",
    "lat": -10.899363158000028,
    "lng": -75.90588837199999,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios AKEMI NATSUKI",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.700483347999976,
    "lng": -70.30955295899997,
    "area": "200.01 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios ROSALINDA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.700252536999985,
    "lng": -70.35559451699999,
    "area": "100.0045 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco DON PAUL XXI",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -15.056273952000026,
    "lng": -71.73623990800002,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CHANA",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.67514575299998,
    "lng": -71.65486367699998,
    "area": "100.003 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Junin EAC 12",
    "mineral": [
      "Cu"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -10.908433005999996,
    "lng": -75.89676585900003,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SAN DINO ELOY",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.078091695000012,
    "lng": -69.20551172699999,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CONSTANCIA 18",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.504493654999976,
    "lng": -71.80353516899999,
    "area": "400.009 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco CONSTANCIA 22",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.550307997999994,
    "lng": -71.74847394199998,
    "area": "600.0135 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa TIA MARIA 42",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.896970221000004,
    "lng": -71.864556946,
    "area": "999.989 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios ROMA 2008",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.459535266999978,
    "lng": -69.02932126299999,
    "area": "200.009 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios CONTINENTAL 22",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.880467036000027,
    "lng": -70.467134112,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Iron Project in Tacna SAN JORGITO CUATROS",
    "mineral": [
      "Fe"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.783130750999987,
    "lng": -70.395399903,
    "area": "149.9164 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno DON BOSCO 2004",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.136642042999997,
    "lng": -70.956011343,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Lima CANTERA NAVA",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -10.738148063999972,
    "lng": -76.84931646799998,
    "area": "13.2971 ha",
    "verified": true
  },
  {
    "name": "Copper Project in San Martin CANTERA PAJARILLO",
    "mineral": [
      "Cu"
    ],
    "region": "SAN MARTIN",
    "status": "Active",
    "lat": -7.187797003000014,
    "lng": -76.67158165900003,
    "area": "1.4569 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Huanuco CANTERA ASUNCION",
    "mineral": [
      "Cu"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -9.319013744000015,
    "lng": -76.01810654399998,
    "area": "1.7283 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno YELLOW ASS II",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.756013833999988,
    "lng": -69.37336866200002,
    "area": "100.003 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PROYECTO SILVER II",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.870505762999985,
    "lng": -70.23286960399997,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna DIABLO FUERTE 30",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.791809012999977,
    "lng": -69.888641635,
    "area": "99.9975 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno CORP LUNA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.254932196000029,
    "lng": -69.58402377599998,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Arequipa TIABAYA 146",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.537096045999988,
    "lng": -71.76556486599998,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno PODEROSO 3",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.802390171000011,
    "lng": -70.08483608,
    "area": "99.999 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ELI LUNA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.028918943000008,
    "lng": -69.574186478,
    "area": "200 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios RICARDO R 2011",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.594617173000016,
    "lng": -69.55413200100003,
    "area": "100.0045 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios YANBRAY",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.69996483,
    "lng": -70.41084303899999,
    "area": "200.008 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios JULIE I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.998192157000004,
    "lng": -70.43094635099999,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios ZEL MINERA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.81787350899998,
    "lng": -70.33779529999998,
    "area": "600.023 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios SHERMAN I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.709198361999997,
    "lng": -70.37405940500003,
    "area": "700.026 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios CHEYLA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.67392296700001,
    "lng": -70.18971489,
    "area": "300.012 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios LINGOTE DE ORO IV",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.781895315999977,
    "lng": -70.300759443,
    "area": "500.02 ha",
    "verified": true
  },
  {
    "name": "Other Project in Ancash MARCO ANTONIO I 2025",
    "mineral": [
      "Other"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -10.13728031300002,
    "lng": -78.10748379299997,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Junin TAMBILLO SURICHAQUI",
    "mineral": [
      "Au"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.43400158999998,
    "lng": -75.41253448100002,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Moquegua VICTOR 02",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.772960737999995,
    "lng": -71.15233334800001,
    "area": "99.9985 ha",
    "verified": true
  },
  {
    "name": "Lead Project in Arequipa POLOBAYA 2009",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.60590614199998,
    "lng": -71.30754166399998,
    "area": "399.994 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno SANTA VALERIA 2009",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.266222705000018,
    "lng": -69.938053314,
    "area": "200.006 ha",
    "verified": true
  },
  {
    "name": "Zinc Project in Piura SANTA MARTINA 4",
    "mineral": [
      "Zn"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.513898041999994,
    "lng": -80.05351791099997,
    "area": "300 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Tacna CHOCAMANE 2",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA / MOQUEGUA",
    "status": "Active",
    "lat": -17.051825065000003,
    "lng": -70.416961233,
    "area": "798.4836 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco TAKANA 18",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -12.867872261999992,
    "lng": -72.35565246300001,
    "area": "1000 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Cusco MINCORSA W",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.414307081999992,
    "lng": -71.03383166700002,
    "area": "350.0042 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Moquegua SANTA FORTUNATA 2011",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.152676027999973,
    "lng": -70.844339376,
    "area": "99.9995 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Puno ERIK 1",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.150364061000005,
    "lng": -69.27043948800002,
    "area": "300.012 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Arequipa CARDONES TRES",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.198105903,
    "lng": -71.634263148,
    "area": "199.9975 ha",
    "verified": true
  },
  {
    "name": "Copper Project in Arequipa SARAMAGO 01",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.609616562999975,
    "lng": -71.474479911,
    "area": "600 ha",
    "verified": true
  },
  {
    "name": "Other Project in Ancash LA PLOMA",
    "mineral": [
      "Other"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.779526249000014,
    "lng": -77.433913276,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios TRES MARIAS UNO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.897848275,
    "lng": -70.587030331,
    "area": "100.0035 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios LUIS CANAAN",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.647692936999988,
    "lng": -69.968614796,
    "area": "100.004 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios UNION CAMPAMENTO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.817083591000028,
    "lng": -70.48519086699997,
    "area": "200.007 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre De Dios PUSPUTIN",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.735671765000006,
    "lng": -70.49392472300002,
    "area": "100.004 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios TANQUI",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.67259567100001,
    "lng": -70.45672821099998,
    "area": "100.0045 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Tacna CANTERA RIO SECO",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -18.042996679999987,
    "lng": -70.22998796399997,
    "area": "99.998 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios FUERZA PUKIRI 2011",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.852425450999988,
    "lng": -70.62359678600001,
    "area": "100.0035 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios MARILU DE BARRANCO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.871730441000013,
    "lng": -70.41179701200002,
    "area": "900.033 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco GATO NEGRO 1",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.991571987999976,
    "lng": -71.01047444,
    "area": "1000.5145 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco GATO NEGRO 3",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -15.027724025999987,
    "lng": -71.01080401299998,
    "area": "999.9985 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco GATO NEGRO 5",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO / PUNO",
    "status": "Active",
    "lat": -15.045959391999986,
    "lng": -70.992377423,
    "area": "499.999 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno OYAECHEA 10",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.757478475000028,
    "lng": -70.44467897700002,
    "area": "600.0195 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno OYAECHEA 11",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.76646352199998,
    "lng": -70.453982349,
    "area": "400.012 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno AYAPATA 2 2011",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.730305895000017,
    "lng": -70.45375958,
    "area": "400.0105 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco DON PAUL XXXII",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -15.047130733000015,
    "lng": -71.74541761799998,
    "area": "1000.003 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Arequipa DON PAUL XXIV",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA / CUSCO",
    "status": "Active",
    "lat": -15.059567716999991,
    "lng": -71.80158084800001,
    "area": "699.9985 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Tacna REYNALDO Y DIEGO HNOS",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.715995830999987,
    "lng": -70.47289308299997,
    "area": "99.998 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Moquegua CELESTE 2",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.94391887500001,
    "lng": -70.945555463,
    "area": "799.9885 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa GIGIRON 146",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.345331697000006,
    "lng": -71.92185073500002,
    "area": "999.995 ha",
    "verified": false
  },
  {
    "name": "Other Project in Ancash REFUGIO 2022 I",
    "mineral": [
      "Other"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -10.322315526000011,
    "lng": -77.35584477600003,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Tacna QUELLA 14",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.308062486999972,
    "lng": -70.63893897899999,
    "area": "999.982 ha",
    "verified": false
  },
  {
    "name": "Lead Project in Arequipa EL CAMPEON",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.827592470000011,
    "lng": -74.27160875300001,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios LUZ-CLARISSE",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.745117291999977,
    "lng": -70.42030246299998,
    "area": "1000.0365 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno PLANTA DE BENEFICIO OLLACHEA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.769545635999975,
    "lng": -70.479469311,
    "area": "51.6865 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Tacna UCHUSUMA 6 2014",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.953151316000003,
    "lng": -70.14438789500002,
    "area": "499.989 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno TIA NILDA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.589988075000008,
    "lng": -69.30637818500003,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco TICLACAHUA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -15.06507953900001,
    "lng": -71.75494261900002,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno MAMA CHELA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.472494395000012,
    "lng": -69.269099498,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Lead Project in Arequipa VALLE SAGRADO III",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.19883533799998,
    "lng": -71.57789447599998,
    "area": "299.996 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno FLORENCIO I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.472504803999982,
    "lng": -69.25982035499999,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios MARIA FELICITA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.658137435000016,
    "lng": -69.43455142099998,
    "area": "200.008 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios ZHANG",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.998490660000016,
    "lng": -70.37563293599999,
    "area": "100.004 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios SAN JACINTO I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.567791565999984,
    "lng": -69.37916377300002,
    "area": "100.004 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios ALEX JOEL 2007 II",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.800898269000015,
    "lng": -70.09817925300001,
    "area": "300.0135 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios LINA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.86510997099998,
    "lng": -69.84963693700001,
    "area": "300.012 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios YULIA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.864031001,
    "lng": -70.13531371800002,
    "area": "200.008 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios EL GRAN CAIMAN",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.612540449999983,
    "lng": -69.627828566,
    "area": "400.016 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua JAIME H",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.58136247499999,
    "lng": -71.31958260800002,
    "area": "199.9965 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios GEOMIN",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.54991875899998,
    "lng": -69.16741365299998,
    "area": "100.0055 ha",
    "verified": false
  },
  {
    "name": "Lead Project in Arequipa MORROVERDEII",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.186488406000024,
    "lng": -71.63912689300003,
    "area": "99.9995 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa PUZOLANA UNO",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.230171385000006,
    "lng": -71.688252121,
    "area": "216.0915 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco SANDRA CUATRO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.543134088999976,
    "lng": -71.302484241,
    "area": "700.0195 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios ACUMULACION MINERIA MESTAS",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.54726389199999,
    "lng": -70.207537478,
    "area": "400.015 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno TRIPULANTE ESPACIAL G400 GOLD",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.056543780000029,
    "lng": -69.29639309700002,
    "area": "400 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Ancash GALENA ARGENTAFERA",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.74298593100002,
    "lng": -77.488304272,
    "area": "200 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco ANGLO ANTA 24",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -15.16325819399998,
    "lng": -71.012078771,
    "area": "499.9975 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno MILAN",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.534778718999974,
    "lng": -70.44528305300003,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Piura SEC 24",
    "mineral": [
      "Cu"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.812471695999989,
    "lng": -80.107221245,
    "area": "900 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios HERMANOS TAIPE",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.004081133,
    "lng": -70.39235634300002,
    "area": "200 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa MAMITA CANDELARIA SIETE",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.229577103999986,
    "lng": -71.28084074600002,
    "area": "600 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco HUAYNA CCAPAC M",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.484705529999983,
    "lng": -71.39249287000001,
    "area": "200 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno GATO MALO II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.671080034999989,
    "lng": -69.473664671,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco MINERA HERCULES DR I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.265678482999988,
    "lng": -70.98616902999999,
    "area": "500.017 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa CARDONES ONCE",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.19859390800002,
    "lng": -71.596684342,
    "area": "599.991 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa BELENSITA I 2010",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.360114165000027,
    "lng": -71.47304956099998,
    "area": "99.9995 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua NUEVO SUREÃ‘O 03",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.618079979000015,
    "lng": -71.26918438500002,
    "area": "29.9995 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua NUEVO SUREÃ‘O 04",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.618036647999986,
    "lng": -71.272951702,
    "area": "99.9985 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco CANTERA CHILQUE 1",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.745600599999989,
    "lng": -71.367423567,
    "area": "1.9961 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Moquegua NUEVO SUREÃ‘O 07",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.608787016000008,
    "lng": -71.29167472500001,
    "area": "99.998 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Apurimac CR 1",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -13.788291398000013,
    "lng": -73.25168158100001,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua EL ANGEL",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.152329340999984,
    "lng": -70.88192833900001,
    "area": "99.998 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Ancash ORMASAN 6-2024",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.280064768999978,
    "lng": -77.76693387099999,
    "area": "700 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno RIO BLANCO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.412515719999988,
    "lng": -70.31108166000001,
    "area": "8.8649 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno EL CARMEN",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.296540187999994,
    "lng": -70.29286162900002,
    "area": "16.4257 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno PTO. PANCHITO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.267552222999996,
    "lng": -70.321707215,
    "area": "11.6705 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios GREGORY UNO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.746455018999995,
    "lng": -70.14399871400002,
    "area": "200.007 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios PLAYA DENISSE",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.585823285000004,
    "lng": -69.41601641400001,
    "area": "100.004 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno G&M I",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.566431938999983,
    "lng": -70.26076463599998,
    "area": "399.9965 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios NANDO AAY",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.846027392999986,
    "lng": -70.11680393500001,
    "area": "300.0125 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios CLEMENCIA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.7446597,
    "lng": -70.50318700000003,
    "area": "100.003 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno MILAGROS 2008",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.086860555999976,
    "lng": -69.41858295100002,
    "area": "100.0045 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno CANTERA TOROYA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.951144295000006,
    "lng": -70.809562804,
    "area": "2.9536 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco QUECHUA U",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.970685262000018,
    "lng": -71.30771230200003,
    "area": "300.006 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Arequipa CAILLOMA 46",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.062501110000028,
    "lng": -71.95938295799999,
    "area": "1000 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa CAILLOMA 49",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.098495620999984,
    "lng": -71.96917602600001,
    "area": "1000.001 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa CAILLOMA 39",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.379252125999985,
    "lng": -71.907965564,
    "area": "400 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios JHON MAYUMI",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.754058081999972,
    "lng": -70.43877251800001,
    "area": "1000.0375 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios YESI HO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.718831935000026,
    "lng": -70.25439065199998,
    "area": "1000.0375 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios URANIO 2020",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.647000686000013,
    "lng": -70.14355432299999,
    "area": "1000.0405 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa CALICHE 1 2011",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.43112006199999,
    "lng": -71.34065097400003,
    "area": "399.9995 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Apurimac IMEX MINE 7",
    "mineral": [
      "Au"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -14.164639465999985,
    "lng": -72.85057594199998,
    "area": "1000 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Arequipa MARIA VICTORIA 3",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.528314100999978,
    "lng": -71.74671507800002,
    "area": "199.9995 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Moquegua ALEXIS XI",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.535872063,
    "lng": -71.34724933500001,
    "area": "299.994 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Ica HUMAYGOLD 1",
    "mineral": [
      "Zn"
    ],
    "region": "ICA",
    "status": "Active",
    "lat": -13.784563191000018,
    "lng": -75.66609435599997,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Moquegua PUQUINA 31",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.998742317999984,
    "lng": -70.880389004,
    "area": "599.992 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa CANTERA LA AYANQUERA II",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.016295307000007,
    "lng": -71.673640868,
    "area": "1.0772 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa CAILLOMA 14",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.199964324999996,
    "lng": -71.80319047199998,
    "area": "299.999 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Moquegua RBB 2014 F",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.718750177999993,
    "lng": -70.86824742200002,
    "area": "99.9985 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa QOYA 03",
    "mineral": [
      "Zn",
      "Pb",
      "Ag"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.49106912100001,
    "lng": -71.330269612,
    "area": "600 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Arequipa QOYA 04",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.509135781999989,
    "lng": -71.330472305,
    "area": "600 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Pasco RANITA 03",
    "mineral": [
      "Cu"
    ],
    "region": "PASCO",
    "status": "Active",
    "lat": -10.473305568,
    "lng": -76.21526768400003,
    "area": "1000 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Junin UNIDAD MAL PASO",
    "mineral": [
      "Cu",
      "Au"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.405366178999998,
    "lng": -76.02660675300001,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Lead Project in Arequipa LUCERO DEL SUR 25",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.349033741000028,
    "lng": -72.112799376,
    "area": "600 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa LUCERO DEL SUR 24",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.376242492000015,
    "lng": -72.12173264799998,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios FERNANDO UNO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.781473980999976,
    "lng": -70.38366032800002,
    "area": "100.004 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios LUISITO JAVIER",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.647000686000013,
    "lng": -70.14355432299999,
    "area": "500.0205 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios LA UNION V",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.728716928999972,
    "lng": -70.061026545,
    "area": "300.012 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios CARACOL 21",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.753957220000018,
    "lng": -70.45719207399998,
    "area": "200.008 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios ORION GH I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.927883146,
    "lng": -69.99733675200002,
    "area": "600.025 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios DORIS 2",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.846218985999997,
    "lng": -70.07073188700002,
    "area": "600.0225 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios HARLET",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.874181686999975,
    "lng": -69.840451256,
    "area": "300.012 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios ADELANTE I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.495006780999972,
    "lng": -69.618340633,
    "area": "400.019 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua NICKY 4",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.853125276000014,
    "lng": -70.99153824500002,
    "area": "699.9885 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios ALEX JAVIER II",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.737373922000018,
    "lng": -70.15316840000003,
    "area": "200.0075 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco GALLITO DE ORO 2009",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.41578201599998,
    "lng": -71.39356920199998,
    "area": "400.011 ha",
    "verified": false
  },
  {
    "name": "Iron Project in Arequipa JOSE DOS 2009",
    "mineral": [
      "Fe"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.141335132999984,
    "lng": -71.63852773399998,
    "area": "999.9925 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa JOSE SIETE 2009",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.060288371000013,
    "lng": -71.618775218,
    "area": "999.994 ha",
    "verified": false
  },
  {
    "name": "Lead Project in Arequipa JOSE NUEVE 2009",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.050564580000014,
    "lng": -71.67468993799997,
    "area": "999.9925 ha",
    "verified": false
  },
  {
    "name": "Iron Project in Tacna FRONTERA 2010",
    "mineral": [
      "Fe"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -18.295509494999976,
    "lng": -70.30743784200001,
    "area": "199.996 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa BOMBERS 3",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.109360227000025,
    "lng": -71.510912787,
    "area": "499.992 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno JORNUNE",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.764340546000028,
    "lng": -70.516554074,
    "area": "199.7133 ha",
    "verified": false
  },
  {
    "name": "Lead Project in Arequipa MARK 2",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.090044911999996,
    "lng": -71.85096968300002,
    "area": "200 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua PAPALAN II",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.267334746000017,
    "lng": -71.12757585499998,
    "area": "99.999 ha",
    "verified": false
  },
  {
    "name": "Other Project in Moquegua ALTURAS 14",
    "mineral": [
      "Other"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.541714952000007,
    "lng": -70.39809135799999,
    "area": "999.986 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua ALTURAS 17",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.605162554999993,
    "lng": -70.37043037199999,
    "area": "999.986 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua ALTURAS 21",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.695534667000004,
    "lng": -70.37107266700002,
    "area": "799.986 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua CARPANITO 27",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.848245308000003,
    "lng": -70.50355115600001,
    "area": "399.994 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa LA PERLA JMH",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.01376878399998,
    "lng": -71.65809238999998,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios LUCERO-AMAZONICO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.71891825199998,
    "lng": -70.23597206800002,
    "area": "300.0125 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios SANTA ISABEL",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.74608404700001,
    "lng": -70.22689310200002,
    "area": "1000.0385 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios QUIÃ‘ONEZ",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.799885249999988,
    "lng": -70.31927598800002,
    "area": "600.023 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios ANITA DOS",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.781895315999977,
    "lng": -70.300759443,
    "area": "300.011 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios TRES HERMANAS",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.808691329999988,
    "lng": -70.365383947,
    "area": "400.0145 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios NAY RUTH 7211",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.709432400000026,
    "lng": -70.32801608199998,
    "area": "100.0035 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in MARQUITO I",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "/ TACNA",
    "status": "Active",
    "lat": -17.81843212000001,
    "lng": -71.12458506600001,
    "area": "99.998 ha",
    "verified": false
  },
  {
    "name": "Other Project in Arequipa EL PUMA 14",
    "mineral": [
      "Other"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.11792097900002,
    "lng": -71.54859908899999,
    "area": "399.9965 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios HUMBERTO I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.621995104999996,
    "lng": -69.41607470999998,
    "area": "100.005 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios DAYANA - 1",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.708603399000026,
    "lng": -70.484558209,
    "area": "100.0035 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios CRUZ DE ORO UNO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.845868387999984,
    "lng": -70.15366101900003,
    "area": "500.0195 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios NAOKI V",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.836907255000028,
    "lng": -70.13519197099998,
    "area": "400.017 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios YOSHIRO VI",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.620218084999976,
    "lng": -70.06057765600002,
    "area": "700.0285 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios EL DESPRECIO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.622609479999994,
    "lng": -69.59410727199997,
    "area": "364.0148 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios OPERACION MANU II",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.827366204999976,
    "lng": -70.245712438,
    "area": "200.008 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua CARACOLES 2",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.108498064999992,
    "lng": -70.731149431,
    "area": "499.993 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Arequipa CUSTRONG 2",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.687093405999974,
    "lng": -71.31788632500002,
    "area": "999.9875 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Moquegua ALTURAS 12",
    "mineral": [
      "Zn"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.668423100999973,
    "lng": -70.37087953700001,
    "area": "899.988 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Moquegua LUCIANA 2011",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.126568510000027,
    "lng": -70.73131645199999,
    "area": "599.99 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa KAJOL 30",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.10865306300002,
    "lng": -71.56725735999999,
    "area": "399.996 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios JUAN SP I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.73686991699998,
    "lng": -70.26368941700002,
    "area": "600.0255 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco SUMAC ORCO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.560157532999996,
    "lng": -71.41347817500002,
    "area": "100.003 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Arequipa SAMBO 31 2014",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.513293303000012,
    "lng": -71.257714921,
    "area": "199.9995 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa ABSI MINERA I",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.563682957000026,
    "lng": -71.80339953100003,
    "area": "799.994 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios MECHITA 2011",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.763047900000004,
    "lng": -70.44803370300002,
    "area": "700.0265 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios QUINTOS II 2011",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.64703999400001,
    "lng": -70.134347177,
    "area": "500.021 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios INVERMENH",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.74608404700001,
    "lng": -70.22689310200002,
    "area": "1000.0385 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios LUCERO2011",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.692285826999978,
    "lng": -70.12533845600001,
    "area": "1000.038 ha",
    "verified": false
  },
  {
    "name": "Other Project in Arequipa CALDERAS 9",
    "mineral": [
      "Other"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.501592953,
    "lng": -71.71825385400001,
    "area": "599.9965 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Apurimac PICHIHUA UNO",
    "mineral": [
      "Cu"
    ],
    "region": "APURIMAC",
    "status": "Active",
    "lat": -14.140353516999994,
    "lng": -73.19345373300001,
    "area": "200 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Ancash ADOLFITO",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.420650920000014,
    "lng": -77.53351824100002,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco KORIRITTI",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.620748841000022,
    "lng": -71.33842651499998,
    "area": "200 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa CANTERA TR10 30 1",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.38083859400001,
    "lng": -71.75324654100001,
    "area": "0.2116 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno II SAN MIGUEL ARCANGEL",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.023009082999977,
    "lng": -69.66850924300002,
    "area": "300.01 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua MADDISON 1",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.428581244999975,
    "lng": -71.25177339200002,
    "area": "999.9845 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Tacna DOCKERS 2",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.784989526000004,
    "lng": -70.86014720999998,
    "area": "999.98 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios LAURA II",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.600422814000012,
    "lng": -70.42870587599998,
    "area": "100.003 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco SANTA RITA 2013",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.322980900999994,
    "lng": -70.54360327,
    "area": "300.01 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Tacna CILUDE 2013 II",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.746401658000025,
    "lng": -69.93557601999998,
    "area": "99.998 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa ROCAS TRES",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.519161145999988,
    "lng": -71.75594761999997,
    "area": "299.9965 ha",
    "verified": false
  },
  {
    "name": "Other Project in Arequipa PACIFICO HIERRO 2013",
    "mineral": [
      "Other"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.224448198000005,
    "lng": -71.69487025900003,
    "area": "449.7744 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco APU JURURO 2013 III",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.295914848999985,
    "lng": -71.22021873199998,
    "area": "12.0032 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios BONANZA 2",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.70970331799998,
    "lng": -70.272764086,
    "area": "400.0155 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios NUEVA ESPERANZA N",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.60303122900001,
    "lng": -69.80273194199998,
    "area": "300.013 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios KHALED 5",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.594708120000009,
    "lng": -69.50809865899998,
    "area": "300.0145 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios MARIO I A",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.657857626000007,
    "lng": -69.58189478899999,
    "area": "100.0045 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios GRUPO PYL",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.771555508999995,
    "lng": -70.17663782400001,
    "area": "200.008 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios MORAN I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.891786309999986,
    "lng": -69.97876070799998,
    "area": "600.024 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios YOLANDA FLORA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.798357834,
    "lng": -70.59561705599998,
    "area": "100.004 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua NUEVO SUREÃ‘O 08",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.581582518000005,
    "lng": -71.30074961399998,
    "area": "99.9985 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua MINERA QUENTO",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.944706471000018,
    "lng": -70.861075917,
    "area": "99.999 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Tacna ANY-1",
    "mineral": [
      "Au"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.64711991500002,
    "lng": -69.90678289800002,
    "area": "499.989 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua ANGIE 1",
    "mineral": [
      "Cu",
      "Au"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.179779912000015,
    "lng": -70.84460724500002,
    "area": "799.987 ha",
    "verified": false
  },
  {
    "name": "Lead Project in Arequipa CARDO 2",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA /",
    "status": "Active",
    "lat": -17.203515573000004,
    "lng": -71.65139224500001,
    "area": "400 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa ARIZONA IV",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.220199508000007,
    "lng": -71.72856734099997,
    "area": "18.0066 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco HUAYNA CCAPAC 2012",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.49753012299999,
    "lng": -71.348214601,
    "area": "1000.0285 ha",
    "verified": false
  },
  {
    "name": "Lead Project in Arequipa CARDO 1",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA /",
    "status": "Active",
    "lat": -17.194362125999987,
    "lng": -71.66065785400002,
    "area": "1000 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa EL NAZARENO EDMADO",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.66849891999999,
    "lng": -71.36452070399997,
    "area": "99.999 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa CANTERA TR10 31 1",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.40288571100001,
    "lng": -71.75655644599999,
    "area": "0.3561 ha",
    "verified": false
  },
  {
    "name": "Lead Project in Arequipa CANTERA TR10 33 1",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.46102190099998,
    "lng": -71.69360505999998,
    "area": "0.4573 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa CANTERA TR10 35 1",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.47525686099999,
    "lng": -71.77226624100001,
    "area": "0.4596 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco CANTERA SUNTUC",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.259391557000017,
    "lng": -71.84538531200002,
    "area": "0.7567 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco CANTERA RC ACC 13 03B",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.277644870000016,
    "lng": -71.905513144,
    "area": "0.1038 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Cajamarca CHALACO_08",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.068963126000028,
    "lng": -78.70060177800002,
    "area": "800 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Cajamarca CHALACO_05",
    "mineral": [
      "Cu"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.050885877999974,
    "lng": -78.70069106900002,
    "area": "800 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Cajamarca CHALACO_03",
    "mineral": [
      "Zn"
    ],
    "region": "CAJAMARCA",
    "status": "Active",
    "lat": -7.042067498999984,
    "lng": -78.74597258400001,
    "area": "400 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco MINA COPANI SA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.403995322000014,
    "lng": -71.03292883400002,
    "area": "100.0025 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco WILLHER",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.485103052999987,
    "lng": -70.63700508699998,
    "area": "100.004 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios PRADERA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.558748638999989,
    "lng": -69.37915050999999,
    "area": "100.004 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco TORRE DORADO",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.19525188199998,
    "lng": -70.72731014200002,
    "area": "400.0125 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios CUATRO CORAZONES 2010",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.557978793000018,
    "lng": -69.74736286400002,
    "area": "200.0085 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios DANIELA 2009",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.586115715000004,
    "lng": -69.12140339299998,
    "area": "400.02 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Lima CASPIN 008",
    "mineral": [
      "Cu"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -12.806852299000012,
    "lng": -76.03197333100002,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios PLAYA PELACHO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.681431590999978,
    "lng": -70.49360784499999,
    "area": "100.0035 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios GUILLERMITO II",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.654311543000006,
    "lng": -70.49344992300001,
    "area": "100.004 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios LORENA I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.640108813999973,
    "lng": -69.397687093,
    "area": "200.008 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios BRAYAN 2009",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.53858164799999,
    "lng": -70.12466724799998,
    "area": "600.025 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios MIJAELITO I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.819241867000017,
    "lng": -70.033762911,
    "area": "300.0115 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios DOÃ‘A MERY",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.539969122000002,
    "lng": -69.71969755600003,
    "area": "300.0125 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios ZOMAPA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.881826161999982,
    "lng": -70.19990345999997,
    "area": "700.027 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios KENIA ZARAI 1",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.631092514999978,
    "lng": -69.37925675299999,
    "area": "100.0045 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios ALVARITO III",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.891033302999972,
    "lng": -70.16308339400001,
    "area": "200.008 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco CAMANTI SUSANA",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.29534550300002,
    "lng": -70.62649458099997,
    "area": "1000.0335 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco ORO NICOLA 2013",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.606121992999988,
    "lng": -71.330805167,
    "area": "400.0115 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Tacna JOAQUIN 2 2014",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.298794407000003,
    "lng": -70.66707600699999,
    "area": "199.996 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Tacna SAN JORGITO 8",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.779595342999983,
    "lng": -70.42625324400001,
    "area": "199.996 ha",
    "verified": false
  },
  {
    "name": "Lead Project in Tacna CANTERA JAM",
    "mineral": [
      "Pb"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.87112308600001,
    "lng": -70.257112716,
    "area": "399.991 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Moquegua LATIN ILO ESTE IX",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.556385363000004,
    "lng": -71.130924532,
    "area": "899.9835 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno DRAGON 01",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.03235197700002,
    "lng": -69.548142095,
    "area": "200.009 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno CELINE 01",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.94064833599998,
    "lng": -69.47177585399999,
    "area": "450.4726 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco DANA MIREIA II",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.406747355999984,
    "lng": -71.393479786,
    "area": "100.0035 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco DANA MIREIA III",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.379467840000018,
    "lng": -71.411667395,
    "area": "200.006 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa CAILLOMA 26",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.18939459500001,
    "lng": -71.92394782999997,
    "area": "999.9985 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa CAILLOMA 24",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.215625093000028,
    "lng": -71.98941126400001,
    "area": "999.9985 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios FREDY FRANCISCO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.808595219999972,
    "lng": -70.38380803899997,
    "area": "500.018 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios ANA LUCIA III",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.764079924999976,
    "lng": -70.24540211200002,
    "area": "100.0035 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios AURELIO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.683165981000002,
    "lng": -70.14371544400001,
    "area": "400.015 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios COPACABANA MDD",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.835469882999972,
    "lng": -70.43002070099999,
    "area": "1000.039 ha",
    "verified": false
  },
  {
    "name": "Gold Project in La Libertad RESPLANDOR XI",
    "mineral": [
      "Au"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.782651545000021,
    "lng": -78.63345110300003,
    "area": "600 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios NUEVO TOPAL I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.09747747,
    "lng": -70.45918531000001,
    "area": "100.0035 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa YEBACHA 19",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.356137070999978,
    "lng": -71.79106421799997,
    "area": "99.999 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios SARITA COLONIA 20",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.807726351999976,
    "lng": -70.540406674,
    "area": "100.004 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios NAHE MALI",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.998635504999982,
    "lng": -70.34797574499999,
    "area": "100.0035 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios DEYSI JESUS",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.016571220000005,
    "lng": -70.37573260300002,
    "area": "100.0035 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios PLAYA ANALY 2",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.509321165000015,
    "lng": -69.39057391099999,
    "area": "25.0013 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios MANUEL IV",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.783903522000005,
    "lng": -69.79408669499998,
    "area": "300.0125 ha",
    "verified": false
  },
  {
    "name": "Lead Project in Arequipa ANGELICA 283",
    "mineral": [
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.631940136000026,
    "lng": -71.40155101099998,
    "area": "99.999 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios JJ",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.685219689000007,
    "lng": -69.46222742999998,
    "area": "400.0175 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios RONALDO UNO 2008",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.061918058999993,
    "lng": -70.348318108,
    "area": "100.0035 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios SOCIEDAD GML",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.49557881200002,
    "lng": -69.26861717600002,
    "area": "400.017 ha",
    "verified": false
  },
  {
    "name": "Iron Project in Tacna CERRILLOS NEGROS",
    "mineral": [
      "Fe"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.869884990999992,
    "lng": -70.43640846099998,
    "area": "899.9805 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios DENNIS VICTOR DOS",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.97969612899999,
    "lng": -70.50458644700001,
    "area": "100.0035 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Ancash NUEVA ESPERANZA 2022",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -10.40859290200001,
    "lng": -77.858484654,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Huancavelica V A L E R I A S U R Y M U R Y",
    "mineral": [
      "Cu"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -12.482852851000018,
    "lng": -74.49384696800001,
    "area": "300 ha",
    "verified": false
  },
  {
    "name": "Iron Project in Arequipa ALICIA 2010",
    "mineral": [
      "Fe"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.471464421999997,
    "lng": -71.942451473,
    "area": "999.991 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa FLOR DE MARIA II",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.481759017,
    "lng": -71.88410247799999,
    "area": "344.9993 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa FLOR DE MARIA III",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.471595916000012,
    "lng": -71.93309516400001,
    "area": "199.9995 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios MARGARITA OCHO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.772481700000014,
    "lng": -70.374400331,
    "area": "200.008 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios VICKICITA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.682964105999986,
    "lng": -70.18975687900002,
    "area": "1000.038 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios JEANNE LINDA 65",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.664963440999998,
    "lng": -70.171257863,
    "area": "500.0195 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios LOS CINCO HERMANOS",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.75449583400001,
    "lng": -70.355882522,
    "area": "200.008 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios FERMAR",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.77271717000002,
    "lng": -70.32834619599998,
    "area": "200.007 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno EMPRESA MINERA CERRO MAJESTAD",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.429842260999976,
    "lng": -69.67897847199998,
    "area": "300.0105 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua AMATA 7",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.57176814899998,
    "lng": -71.11978112100002,
    "area": "99.999 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Lima QUIPULLIN 21-1",
    "mineral": [
      "Cu"
    ],
    "region": "LIMA",
    "status": "Active",
    "lat": -11.418315317999998,
    "lng": -77.016354256,
    "area": "200 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Huanuco NPV 18",
    "mineral": [
      "Cu"
    ],
    "region": "HUANUCO",
    "status": "Active",
    "lat": -9.623874451999995,
    "lng": -76.038961884,
    "area": "200 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa GAYA 9",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.072725866999974,
    "lng": -71.86658130900003,
    "area": "1000.0005 ha",
    "verified": false
  },
  {
    "name": "Other Project in Arequipa GAYA 7-A",
    "mineral": [
      "Other"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.036723558999997,
    "lng": -71.85680664300003,
    "area": "199.999 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno CONCESION MINERA SAN VALENTIN M&S",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.70759286499998,
    "lng": -69.25080713099999,
    "area": "300 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco QOYLLORITY II",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -12.991784841000026,
    "lng": -71.88515354999998,
    "area": "200 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Piura CAUTIVO 2025",
    "mineral": [
      "Zn"
    ],
    "region": "PIURA",
    "status": "Active",
    "lat": -4.731212649999975,
    "lng": -80.233554793,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios PLAYA MIRADOR",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -13.016668244000016,
    "lng": -70.35729312699999,
    "area": "100.0035 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios PLAYA DANIEL",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.79200755300002,
    "lng": -70.061290219,
    "area": "500.0195 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios TODOS VAMOS",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.612100898999984,
    "lng": -69.79355405000001,
    "area": "200.008 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios TRAVIESO CORAZON",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.665605260999996,
    "lng": -70.01472388000002,
    "area": "300.012 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios ARNOL 1",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.711824894000015,
    "lng": -69.701756897,
    "area": "200.008 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios PLAYA FLORESA 2004",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.522625412000025,
    "lng": -69.342280217,
    "area": "200.01 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios MIGUELITO VERONICA I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.627344305000008,
    "lng": -70.46567711799997,
    "area": "300.0125 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios LA INGRATA",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.789700337999989,
    "lng": -70.53108629299999,
    "area": "100.003 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios JUANIQUILLO 1",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.50457269200001,
    "lng": -69.31464523599999,
    "area": "200.01 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa TIABAYA 122",
    "mineral": [
      "Zn",
      "Pb",
      "Ag"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.60152733199999,
    "lng": -71.67282369200001,
    "area": "999.989 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa CAÃ‘ONROTO 2007 3",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.662874623999983,
    "lng": -71.81420824600002,
    "area": "999.988 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa CAÃ‘ONROTO 2007 2",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.654225618999988,
    "lng": -71.78597729400002,
    "area": "999.9895 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco CONSTANCIA 27",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.496871129999988,
    "lng": -71.68291563600002,
    "area": "800.018 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios FRANCESKA I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.819684327000004,
    "lng": -69.91398354199998,
    "area": "200.008 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios LUIS FERNANDO I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.881388334000007,
    "lng": -70.29205544000001,
    "area": "100.004 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios NUEVO SAN JOSE",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.989498941000022,
    "lng": -70.36636457499998,
    "area": "100.004 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios LUIS FERNANDO II",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.87239292999999,
    "lng": -70.282794432,
    "area": "200.007 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno SAN JOSE MARIA 2",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -15.61708571600002,
    "lng": -70.74471924900001,
    "area": "266.9023 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa UCHUNA",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.524090391000016,
    "lng": -71.35339144,
    "area": "99.9985 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa MINA SANTA ROSA III JVR",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -15.10954599500002,
    "lng": -71.811296459,
    "area": "900.0005 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa COCHIZO 7",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.42911135899999,
    "lng": -71.73595913899999,
    "area": "499.996 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Arequipa PEQUEÃ‘O-BRIAN-II",
    "mineral": [
      "Au"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.375536399999987,
    "lng": -71.68843416700003,
    "area": "199.998 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Ancash NUEVO SALVADOR",
    "mineral": [
      "Cu"
    ],
    "region": "ANCASH",
    "status": "Active",
    "lat": -9.999639605000027,
    "lng": -76.943155676,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno SAN ANTON UNO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.500144841999996,
    "lng": -70.189566061,
    "area": "600.0195 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno SAN ANTON DOS",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.52726417399998,
    "lng": -70.18971051900002,
    "area": "900.027 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Tacna AGREGADOS EL FORJADOR II",
    "mineral": [
      "Cu"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.86891458399998,
    "lng": -70.05714755600002,
    "area": "300 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Ayacucho SUYAMARCA 124",
    "mineral": [
      "Cu"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -15.008629652000025,
    "lng": -73.27934578399999,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa VALLE SAGRADO II",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.207865431000016,
    "lng": -71.57801952400001,
    "area": "99.999 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno PUERTO MACHO FRC",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.068539466999994,
    "lng": -69.53896523100002,
    "area": "300.01 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios SANDRA 15",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.808399155000018,
    "lng": -70.420655807,
    "area": "100.004 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios JOSUE RONALDO 611",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.808595219999972,
    "lng": -70.38380803899997,
    "area": "200.008 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno PIEDRA DORADA I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.345960175000016,
    "lng": -69.22257775399999,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua RBB UNO 2016",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.77442186600001,
    "lng": -70.69995722800002,
    "area": "199.998 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno MILAGROS MAMATOKE",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.896157647999985,
    "lng": -69.760699741,
    "area": "300.012 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa DISAH IA 2016",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.493166770000016,
    "lng": -71.671330936,
    "area": "99.999 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios VIRGILIO 2",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.627738279000027,
    "lng": -70.39203468699998,
    "area": "100.0035 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios RAMIRO POMAR",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.809939681000005,
    "lng": -70.09821838200003,
    "area": "200.008 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno OLLACHEA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.784864043000027,
    "lng": -70.47338879799997,
    "area": "3.5938 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno CAMATANI",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.72872989199999,
    "lng": -70.46211242499999,
    "area": "3.8308 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno YURI YURI",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.536225295999998,
    "lng": -70.43796532900001,
    "area": "0.4621 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno QDA. ARICA",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.491508488000022,
    "lng": -70.42351617399999,
    "area": "0.6642 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno CHAQUIMAYO",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.428846222999994,
    "lng": -70.401076816,
    "area": "2.0486 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios PLAYA VILLAVISTA 2008",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.739092389999996,
    "lng": -69.64656177699999,
    "area": "300.013 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa PABLO FERNANDO 2",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.133269546999998,
    "lng": -71.75545192700002,
    "area": "999.9885 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios VICTOR BACILIO VIII",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.656457129999978,
    "lng": -70.04231148899999,
    "area": "100.004 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios MARLENI II",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.810421770999994,
    "lng": -70.19524388100001,
    "area": "338.4139 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco SANGARARA DOS 2007",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.883491381,
    "lng": -71.601736249,
    "area": "1000.026 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios SAGITARIO 2008",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.756749232999994,
    "lng": -69.80321412900003,
    "area": "300.012 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios MALAGUEÑA 4",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.55878593,
    "lng": -69.351533668,
    "area": "200.008 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios SARA II",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.63107936099999,
    "lng": -69.38846494299997,
    "area": "100.0045 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco MELIA I",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.21763284399998,
    "lng": -70.91945012299999,
    "area": "300 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno GOLD MINING SA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.725685424000003,
    "lng": -69.241537945,
    "area": "200 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua CALIZA 2013 3",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.71965712299999,
    "lng": -70.76511151300002,
    "area": "299.9945 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa CARDONES ALTO",
    "mineral": [
      "Zn"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -17.169894823999982,
    "lng": -71.718415747,
    "area": "499.993 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa DON RULO",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.491700573000003,
    "lng": -71.78363996299998,
    "area": "299.9965 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua INGRISH COBRESUR 2",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.763142249999987,
    "lng": -70.95308670100002,
    "area": "299.9955 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno KORICHASCA",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -14.087108770999976,
    "lng": -69.23331083099998,
    "area": "100.0045 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua CATATA 1",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -17.251171306000003,
    "lng": -70.93934467499997,
    "area": "99.998 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno CHERRY MINING GOLD",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.956050151999989,
    "lng": -69.76841783499998,
    "area": "300 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco ANGLO ANTA 21",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -15.181576989999996,
    "lng": -70.984338401,
    "area": "999.9945 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Junin TRITON 7 SAC",
    "mineral": [
      "Au"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.949772481000023,
    "lng": -74.954077552,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Huancavelica MINERA JATUNCCASA",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "HUANCAVELICA",
    "status": "Active",
    "lat": -12.989368679999984,
    "lng": -74.56660822200001,
    "area": "400 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in BALNIARIO SUR",
    "mineral": [
      "Zn"
    ],
    "region": "/ TACNA",
    "status": "Active",
    "lat": -18.166392793,
    "lng": -70.64676228600001,
    "area": "99.998 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco CANTERA YAURISQUE 1",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.624423850000028,
    "lng": -71.85724844600003,
    "area": "1.901 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco CANTERA ACOS 1",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.85540757199999,
    "lng": -71.747589565,
    "area": "0.1042 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco CANTERA COLCHA 1",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.822981016000028,
    "lng": -71.83391119599997,
    "area": "0.2017 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios PRISCILA 3",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.674393654000028,
    "lng": -70.07921815499998,
    "area": "800.033 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios TRIANGULO",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.477373865000004,
    "lng": -69.36982896299997,
    "area": "100.005 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios SOL MARIA VI",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.864729251000028,
    "lng": -69.96022463600002,
    "area": "100.004 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios JEMINA ANGIE I",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.79852368500002,
    "lng": -70.567984583,
    "area": "200.007 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Arequipa EL PUMA 3 2008",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.255941244999974,
    "lng": -71.855086771,
    "area": "399.998 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Madre De Dios TORO II",
    "mineral": [
      "Au"
    ],
    "region": "MADRE DE DIOS",
    "status": "Active",
    "lat": -12.459526903999972,
    "lng": -69.07533281100001,
    "area": "400.0195 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco HANCCOLLAHUA 2",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -15.024990746000014,
    "lng": -71.29898337399999,
    "area": "999.997 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco HANCCOLLAHUA 4",
    "mineral": [
      "Au"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -15.042582918999983,
    "lng": -71.34565568800002,
    "area": "700.001 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco CONSTANCIA 56",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.440609322,
    "lng": -71.85834242700003,
    "area": "400.009 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco CANTERA TACO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -14.984305213000027,
    "lng": -71.33215734200002,
    "area": "8.3401 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Moquegua RBB 2014 A",
    "mineral": [
      "Cu"
    ],
    "region": "MOQUEGUA",
    "status": "Active",
    "lat": -16.782497610000007,
    "lng": -70.81259063599998,
    "area": "199.997 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Tacna ARUNTA II",
    "mineral": [
      "Zn"
    ],
    "region": "TACNA",
    "status": "Active",
    "lat": -17.890165052999976,
    "lng": -70.09678974500002,
    "area": "99.998 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Ayacucho ALINA 50",
    "mineral": [
      "Cu"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -14.561223805999989,
    "lng": -74.07173363099997,
    "area": "400 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Arequipa ANGELICA 288",
    "mineral": [
      "Cu"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.552183461000027,
    "lng": -71.98112206500002,
    "area": "99.999 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno SUR MUÑANTES",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -13.923602123000023,
    "lng": -69.64971027799999,
    "area": "1000.037 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa HRMTC-A1",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.25884938600001,
    "lng": -71.630740936,
    "area": "299.998 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Ayacucho APU LAJAS CUATRO",
    "mineral": [
      "Cu"
    ],
    "region": "AYACUCHO",
    "status": "Active",
    "lat": -13.845806541000002,
    "lng": -73.79707007600001,
    "area": "300 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Cusco CUMBRE CHARPAMAYO",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "CUSCO",
    "status": "Active",
    "lat": -13.177049823999994,
    "lng": -70.74563140599997,
    "area": "500.0165 ha",
    "verified": false
  },
  {
    "name": "Copper Project in Junin TACALPA",
    "mineral": [
      "Cu"
    ],
    "region": "JUNIN",
    "status": "Active",
    "lat": -11.615165201000025,
    "lng": -74.98165323900002,
    "area": "100 ha",
    "verified": false
  },
  {
    "name": "Zinc Project in Arequipa SIMON 10",
    "mineral": [
      "Zn",
      "Pb"
    ],
    "region": "AREQUIPA",
    "status": "Active",
    "lat": -16.599798924000027,
    "lng": -71.80392270800002,
    "area": "499.996 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno PRIMAVERA 64",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.842382875999988,
    "lng": -69.97795106699999,
    "area": "99.9985 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno PRIMAVERA 67",
    "mineral": [
      "Au"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.887574330000007,
    "lng": -69.97818317500003,
    "area": "199.9975 ha",
    "verified": false
  },
  {
    "name": "Gold Project in Puno PRIMAVERA 69",
    "mineral": [
      "Au",
      "Ag"
    ],
    "region": "PUNO",
    "status": "Active",
    "lat": -16.905650842,
    "lng": -69.97827632100001,
    "area": "99.9985 ha",
    "verified": false
  },
  {
    "name": "Copper Project in La Libertad ALMIRANTA 1",
    "mineral": [
      "Cu"
    ],
    "region": "LA LIBERTAD",
    "status": "Active",
    "lat": -7.736418049999997,
    "lng": -77.547503318,
    "area": "200 ha",
    "verified": false
  }
];

  // ==== MAP INIT ====
  const map = L.map('map').setView([-12.0464, -77.0428], 5);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap' }).addTo(map);

  const markers = [];

  // Minerals badge (grey with border)
  function mineralBadge(m) {
    return `<span style="display:inline-block; border:1px solid #6c757d; color:#6c757d; font-size:0.75rem; padding:2px 6px; border-radius:12px; margin-right:2px;">${m}</span>`;
  }

  function renderMarkers(data) {
    markers.forEach(m => map.removeLayer(m));
    markers.length = 0;

    data.forEach((p, index) => {
      const fileName = p.name.replace(/\s+/g, '-'); // заменяем пробелы на дефисы
      const marker = L.marker([p.lat, p.lng]).addTo(map);
      marker.bindPopup(`
        <div>
          <strong>${p.name}</strong><br>
          <small>${p.region} · ${p.area}</small><br>
          <div class="mt-1">${p.mineral.map(mineralBadge).join('')}</div>
          ${p.verified ? '<span style="color:green;font-weight:bold;">Verified</span>' : ''}<br>
          <a href="projects/${fileName.toLowerCase()}.html" class="text-primary mt-1 d-inline-block">View Details →</a>
        </div>
      `);
      markers.push(marker);
    });
  }

  function applyFilters() {
    const q = document.getElementById('q').value.trim().toLowerCase();
    const region = document.getElementById('region').value;
    const status = document.getElementById('estado').value;
    const mins = Array.from(document.querySelectorAll('.mineral:checked')).map(i => i.value);
    const owner = document.getElementById('owner_verified').value; // новый фильтр

    const filtered = PROJECTS.filter(p => {
      const text = `${p.name} ${p.region}`.toLowerCase();
      const matchQ = !q || text.includes(q);
      const matchRegion = !region || p.region === region;
      const matchStatus = !status || p.status === status;
      const matchMineral = mins.length === 0 || mins.some(m => p.mineral.includes(m));

      // фильтр по Owner Verification
      let matchOwner = true;
      if (owner === "Verified") matchOwner = p.verified === true;
      if (owner === "Not Verified") matchOwner = p.verified === false;

      return matchQ && matchRegion && matchStatus && matchMineral && matchOwner;
    });

    renderMarkers(filtered);

    // Stats
    document.getElementById('statTotal').textContent = filtered.length;
    document.getElementById('statVerified').textContent = filtered.filter(p => p.verified).length;
    document.getElementById('statMinerals').textContent = new Set(filtered.flatMap(p => p.mineral)).size;
  }

  document.getElementById('btnApply').addEventListener('click', applyFilters);
  document.getElementById('btnClear').addEventListener('click', () => {
    document.getElementById('q').value = '';
    document.getElementById('region').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('owner_verified').value = ''; // сброс нового фильтра
    document.querySelectorAll('.mineral').forEach(i => i.checked = false);
    applyFilters();
  });

  // Initial render
  renderMarkers(PROJECTS);
  document.getElementById('statTotal').textContent = PROJECTS.length;
  document.getElementById('statVerified').textContent = PROJECTS.filter(p => p.verified).length;
  document.getElementById('statMinerals').textContent = new Set(PROJECTS.flatMap(p => p.mineral)).size;
  