async function getISSLocation() {
  try {
    //hier verbinden wir uns mit der API
    const response = await fetch(
      "https://api.wheretheiss.at",
    );

    //hier wurden zwei wichtige Variablen deklariert
    const data = await response.json();
    const latitude = data;
    const longitude = data;
    document.getElementById("iss-location").textContent =
      `Breitengrad: ${##}, Längengrad: ${##}`;

    //nun rufen wir eine Funktion auf, die Koordinaten in Städte umwandelt
    await getISSLocationDetails(##, ##);

  //sollte ein Fehler auftreten, wird er hier ausgegeben
  } catch (error) {
    console.error("Error fetching ISS location:", error);
  }
}

async function getISSLocationDetails(latitude, longitude) {
  try {
    //hier verbinden wir uns mit einer anderen API
    const response = await fetch(
      `https://geocode.xyz/${latitude},${longitude}?json=`,
    );

    //wir geben den Längen- und Breitengrad aus
    console.log(latitude);
    console.log(longitude);

    //wieder deklarieren wir wichtige Variablen
    const data = await response.json();
    const prov = data.prov;
    const city = data.city;

    //nun schauen wir, ob diese Stadt defined ist oder undefined
    //in dem Fall gibt es keine Stadt zu den Koordinaten
    if (## == undefined) {
      document.getElementById("iss-location").textContent +=
        ` - Aktuell über dem Meer`;

    //falls eine Stadt zugewiesen werden kann, passen wir den Text an
    } else {
      document.getElementById("iss-location").textContent +=
        ` - Over ${##}, ${##}`;
    }

  //bei Fehlern werden wir dieses wieder sehen und ausgeben
  } catch (error) {
    console.error("Error fetching ISS location details:", error);
  }
}

//nun rufen wir die Funktion auf um die ISS tracken zu können
getISSLocation();
