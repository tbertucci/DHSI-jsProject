// map.js

// Wait for the DOM to be ready (optional but good practice)
document.addEventListener('DOMContentLoaded', function () {

    // 1. Initialize the map and set its view
    // L.map('map') creates a map instance linked to the div with id="map"
    const map = L.map('map').setView([44.5, 9.5], 5); // arbitrary centerpoint in Romance-speaking area

    // 2. Add a tile layer (the base map image)
    // Using OpenStreetMap tiles
    L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.{ext}', {
        maxZoom: 6, // Max zoom level for these tiles
        minZoom: 4, // Min zoom level for these tiles
        attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: 'png'
    }).addTo(map); // Add the tile layer to our map instance

    console.log("Map initialized.");

    // (Inside the DOMContentLoaded listener, after map initialization)

    //
    const markerSize = 30;
    const markerWeight = 3.5;
    const markerFillOpacity = 0.6;

    // Add a marker (with pop-up) for 01a
    const coord01a = [38.725278, -9.15];
    const marker01a = L.circleMarker(coord01a, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#f4cccc'
    }).addTo(map).bindPopup("<b>português europeu</b><br>European Portuguese");

    // Add a marker (with pop-up) for 01b
    const coord01b = [-23.55, -46.633333];
    const marker01b = L.circleMarker(coord01b, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#f4cccc'
    }).addTo(map).bindPopup("<b>português brasileiro</b><br>Brazilian Portuguese");

    // Add a marker (with pop-up) for 02
    const coord02 = [42.8, -7.9];
    const marker02 = L.circleMarker(coord02, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#f4cccc'
    }).addTo(map).bindPopup("<b>galego</b><br>Galician");

    // Add a marker (with pop-up) for 03
    const coord03 = [43.25, -5.85];
    const marker03 = L.circleMarker(coord03, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#fcd0cd'
    }).addTo(map).bindPopup("<b>asturlleonés</b><br>Astur-Leonese");

    // Add a marker (with pop-up) for 04a
    const coord04a = [40.416944, -3.703333];
    const marker04a = L.circleMarker(coord04a, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#fcddcd'
    }).addTo(map).bindPopup("<b>castellano</b><br>Castilian Spanish");

    // Add a marker (with pop-up) for 04b
    const coord04b = [37, -4.42];
    const marker04b = L.circleMarker(coord04b, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#fcddcd'
    }).addTo(map).bindPopup("<b>andaluz</b><br>Andalusian Spanish");

    // Add a marker (with pop-up) for 04c
    const coord04c = [4.711111, -74.072222];
    const marker04c = L.circleMarker(coord04c, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#fcddcd'
    }).addTo(map).bindPopup("<b>español de América</b><br>American Spanish");

    // Add a marker (with pop-up) for 05
    const coord05 = [41.7, -0.88];
    const marker05 = L.circleMarker(coord05, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#fff2cc'
    }).addTo(map).bindPopup("<b>aragonés</b><br>Aragonese");

    // Add a marker (with pop-up) for 06a
    const coord06a = [41.7, 1.7];
    const marker06a = L.circleMarker(coord06a, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#fdfacc'
    }).addTo(map).bindPopup("<b>català</b><br>Catalan");

    // Add a marker (with pop-up) for 06b
    const coord06b = [39.47, -0.5];
    const marker06b = L.circleMarker(coord06b, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#fdfacc'
    }).addTo(map).bindPopup("<b>valencià</b><br>Valencian");

    // Add a marker (with pop-up) for 06c
    const coord06c = [39.6, 3];
    const marker06c = L.circleMarker(coord06c, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#fdfacc'
    }).addTo(map).bindPopup("<b>balear</b><br>Balearic");

    // Add a marker (with pop-up) for 07a
    const coord07a = [43.75, 2.5];
    const marker07a = L.circleMarker(coord07a, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#f6fdcc'
    }).addTo(map).bindPopup("<b>lengadocian</b><br>Languedocian Occitan");

    // Add a marker (with pop-up) for 07b
    const coord07b = [44.4, -0.54];
    const marker07b = L.circleMarker(coord07b, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#f6fdcc'
    }).addTo(map).bindPopup("<b>gascon</b><br>Gascon Occitan");

    // Add a marker (with pop-up) for 07c
    const coord07c = [43.5, 5.5];
    const marker07c = L.circleMarker(coord07c, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#f6fdcc'
    }).addTo(map).bindPopup("<b>provençau</b><br>Provençal Occitan");

    // Add a marker (with pop-up) for 07d
    const coord07d = [45.333333, 3];
    const marker07d = L.circleMarker(coord07d, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#f6fdcc'
    }).addTo(map).bindPopup("<b>nòrd-occitan</b><br>North Occitan");

    // Add a marker (with pop-up) for 08
    const coord08 = [46.33, -0.461];
    const marker08 = L.circleMarker(coord08, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#e3f1cd'
    }).addTo(map).bindPopup("<b>poetevin-séntunjhaes</b><br>Poitevin-Saintongeais");

    // Add a marker (with pop-up) for 09
    const coord09 = [48.1147, -1.6794];
    const marker09 = L.circleMarker(coord09, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#e3f1cd'
    }).addTo(map).bindPopup("<b>galo & angevin</b><br>Gallo & Angevin");

    // Add a marker (with pop-up) for 10
    const coord10 = [49, 0.17];
    const marker10 = L.circleMarker(coord10, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#e3f1cd'
    }).addTo(map).bindPopup("<b>normaund</b><br>Norman");

    // Add a marker (with pop-up) for 11
    const coord11 = [50, 3];
    const marker11 = L.circleMarker(coord11, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#e3f1cd'
    }).addTo(map).bindPopup("<b>picard</b><br>Picard");

    // Add a marker (with pop-up) for 12
    const coord12 = [50.3, 4.9];
    const marker12 = L.circleMarker(coord12, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#e3f1cd'
    }).addTo(map).bindPopup("<b>walon</b><br>Walloon");

    // Add a marker (with pop-up) for 13a
    const coord13a = [48.856667, 2.352222];
    const marker13a = L.circleMarker(coord13a, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#e3f1cd'
    }).addTo(map).bindPopup("<b>français européen</b><br>European French");

    // Add a marker (with pop-up) for 13b
    const coord13b = [45.508889, -73.554167];
    const marker13b = L.circleMarker(coord13b, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#e3f1cd'
    }).addTo(map).bindPopup("<b>français québécois</b><br>Québécois French");

    // Add a marker (with pop-up) for 13y
    const coord13y = [48.166667, 6.416667];
    const marker13y = L.circleMarker(coord13y, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#e3f1cd'
    }).addTo(map).bindPopup("<b>lorin & frainc-comtou</b><br>Lorrain & Franc-Comtois");

        // Add a marker (with pop-up) for 13z
    const coord13z = [48.027686, 4.571562];
    const marker13z = L.circleMarker(coord13z, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#e3f1cd'
    }).addTo(map).bindPopup("<b>borguignon-morvandiau</b><br>Bourguignon-Morvandiau");

    // Add a marker (with pop-up) for 14
    const coord14 = [46.15, 5.866667];
    const marker14 = L.circleMarker(coord14, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#d9ead3'
    }).addTo(map).bindPopup("<b>arpetan</b><br>Arpitan");

    // Add a marker (with pop-up) for 15
    const coord15 = [45.072, 7.686];
    const marker15 = L.circleMarker(coord15, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#cfefe8'
    }).addTo(map).bindPopup("<b>piemontèis</b><br>Piedmontese");

    // Add a marker (with pop-up) for 16
    const coord16 = [44.411111, 8.932778];
    const marker16 = L.circleMarker(coord16, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#cfefe8'
    }).addTo(map).bindPopup("<b>lìgure</b><br>Ligurian");

    // Add a marker (with pop-up) for 17a
    const coord17a = [44.64, 11.1];
    const marker17a = L.circleMarker(coord17a, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#cfefe8'
    }).addTo(map).bindPopup("<b>emiliàn</b><br>Emilian");

    // Add a marker (with pop-up) for 17b
    const coord17b = [44.25, 12.1];
    const marker17b = L.circleMarker(coord17b, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#cfefe8'
    }).addTo(map).bindPopup("<b>rumagnòl</b><br>Romagnol");

    // Add a marker (with pop-up) for 18
    const coord18 = [45.5043055, 9.7033335];
    const marker18 = L.circleMarker(coord18, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#cfefe8'
    }).addTo(map).bindPopup("<b>lombard</b><br>Lombard");

    // Add a marker (with pop-up) for 19
    const coord19 = [46.75, 9.5];
    const marker19 = L.circleMarker(coord19, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#d0e0e3'
    }).addTo(map).bindPopup("<b>rumantsch</b><br>Romansh");

    // Add a marker (with pop-up) for 20
    const coord20 = [46.683333, 11.9];
    const marker20 = L.circleMarker(coord20, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#d0e0e3'
    }).addTo(map).bindPopup("<b>ladin</b><br>Ladin");

    // Add a marker (with pop-up) for 21
    const coord21 = [46.166667, 13];
    const marker21 = L.circleMarker(coord21, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#d0e0e3'
    }).addTo(map).bindPopup("<b>furlan</b><br>Friulian");

    // Add a marker (with pop-up) for 22a
    const coord22a = [40.316667, 9.333333];
    const marker22a = L.circleMarker(coord22a, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#d8ccc2'
    }).addTo(map).bindPopup("<b>sardu logudoresu</b><br>Logudorese Sardinian");

    // Add a marker (with pop-up) for 22b
    const coord22b = [39.227778, 9.111111];
    const marker22b = L.circleMarker(coord22b, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#d8ccc2'
    }).addTo(map).bindPopup("<b>sardu campidanesu</b><br>Campidanese Sardinian");

    // Add a marker (with pop-up) for 23
    const coord23 = [42.039691, 9.013308];
    const marker23 = L.circleMarker(coord23, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#c9daf8'
    }).addTo(map).bindPopup("<b>corsu</b><br>Corsican");

    // Add a marker (with pop-up) for 24
    const coord24 = [43.6, 11.1];
    const marker24 = L.circleMarker(coord24, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#c9daf8'
    }).addTo(map).bindPopup("<b>italiano</b><br>Italian");

    // Add a marker (with pop-up) for 25a
    const coord25a = [41.893333, 12.482778];
    const marker25a = L.circleMarker(coord25a, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#c9daf8'
    }).addTo(map).bindPopup("<b>romanesco</b><br>Romanesco");

    // Add a marker (with pop-up) for 25b
    const coord25b = [43.45, 13.45];
    const marker25b = L.circleMarker(coord25b, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#c9daf8'
    }).addTo(map).bindPopup("<b>marchigià centrale</b><br>Central Marchigiano");

    // Add a marker (with pop-up) for 25c
    const coord25c = [42.756, 12.671];
    const marker25c = L.circleMarker(coord25c, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#c9daf8'
    }).addTo(map).bindPopup("<b>umbro meridionale</b><br>Southern Umbrian");

    // Add a marker (with pop-up) for 26
    const coord26 = [42.33, 14.2];
    const marker26 = L.circleMarker(coord26, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#cfe2f3'
    }).addTo(map).bindPopup("<b>abbruzzese</b><br>Abruzzese");

    // Add a marker (with pop-up) for 27
    const coord27 = [41, 14.28];
    const marker27 = L.circleMarker(coord27, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#cfe2f3'
    }).addTo(map).bindPopup("<b>campano</b><br>Campanan");

    // Add a marker (with pop-up) for 28
    const coord28 = [41, 16.866667];
    const marker28 = L.circleMarker(coord28, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#cfe2f3'
    }).addTo(map).bindPopup("<b>pugghiese</b><br>Pugliese");

    // Add a marker (with pop-up) for 29
    const coord29 = [40.5, 15.75];
    const marker29 = L.circleMarker(coord29, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#cfe2f3'
    }).addTo(map).bindPopup("<b>lucane & irpine</b><br>Lucano & Irpino");

    // Add a marker (with pop-up) for 30
    const coord30 = [39.2, 16.4];
    const marker30 = L.circleMarker(coord30, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#d5d5f8'
    }).addTo(map).bindPopup("<b>calabbrisi urtiriuri</b><br>Ulterior Calabrese");

    // Add a marker (with pop-up) for 31
    const coord31 = [37.637900, 13.931288];
    const marker31 = L.circleMarker(coord31, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#d5d5f8'
    }).addTo(map).bindPopup("<b>sicilianu</b><br>Sicilian");

    // Add a marker (with pop-up) for 32
    const coord32 = [40.28, 18.14];
    const marker32 = L.circleMarker(coord32, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#d5d5f8'
    }).addTo(map).bindPopup("<b>salentinu</b><br>Salentino");

    // Add a marker (with pop-up) for 33
    const coord33 = [45.733333, 11.85];
    const marker33 = L.circleMarker(coord33, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#d9d2e9'
    }).addTo(map).bindPopup("<b>vèneto</b><br>Venetan");

    // Add a marker (with pop-up) for 34
    const coord34 = [45.261111, 13.904444];
    const marker34 = L.circleMarker(coord34, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#e9caf1'
    }).addTo(map).bindPopup("<b>eîstrioto</b><br>Istriot");

    // Add a marker (with pop-up) for 35
    const coord35 = [40, 21.183889];
    const marker35 = L.circleMarker(coord35, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#ebd1e8'
    }).addTo(map).bindPopup("<b>armãneashti</b><br>Aromanian");

    // Add a marker (with pop-up) for 36
    const coord36 = [44.4325, 26.103889];
    const marker36 = L.circleMarker(coord36, {
        radius: markerSize, weight: markerWeight, fillOpacity: markerFillOpacity, color: '#ebd1e8'
    }).addTo(map).bindPopup("<b>română</b><br>Romanian");

    // Adding lines to connect pluricentric languages
    const line01 = L.polyline([coord01a, coord01b], { color: '#f4cccc', dashArray: 5 }).addTo(map); // POR
    const line04 = L.polyline([coord04a, coord04b], { color: '#fcddcd' }).addTo(map); // ESP
    const line04c = L.polyline([coord04b, coord04c], { color: '#fcddcd', dashArray: 5 }).addTo(map); // ESP
    const line06 = L.polyline([coord06a, coord06b, coord06c, coord06a], { color: '#fdfacc' }).addTo(map); // CVB
    const line07 = L.polyline([coord07b, coord07a, coord07c], { color: '#f6fdcc' }).addTo(map); // OCC
    const line07d = L.polyline([coord07a, coord07d], { color: '#f6fdcc' }).addTo(map); // OCC
    const line13 = L.polyline([coord13a, coord13b], { color: '#e3f1cd', dashArray: 5}).addTo(map); // FRA
    const line17 = L.polyline([coord17a, coord17b], { color: '#cfefe8' }).addTo(map); // EMR
    const line22 = L.polyline([coord22a, coord22b], { color: '#d8ccc2' }).addTo(map); // SRD
    const line25 = L.polyline([coord25b, coord25c], { color: '#c9daf8' }).addTo(map); // DMI
    // const lineN = L.polyline([coordN, coordN], { color: '#' }).addTo(map);

}); // End DOMContentLoaded listener