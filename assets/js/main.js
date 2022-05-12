let inputText = document.getElementById('bundeslandInfo');
let outputText = document.getElementById('bundeslandInfoErgebnis')

function check() {
    console.log('function läuft');
    console.log(inputText.value);
    switch (inputText.value) {
        case 'Baden-Württemberg':
            outputText.innerHTML = 'Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt'
            break;
        case 'Bayern':
            outputText.innerHTML = 'Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt'
            break;
        case 'Berlin':
            outputText.innerHTML = 'Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt'
            break;
        case 'Brandenburg':
            outputText.innerHTML = 'Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt'
            break;
        case 'Bremen':
            outputText.innerHTML = 'Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt'
            break;
        case 'Hamburg':
            outputText.innerHTML = 'Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt'
            break;
        case 'Hessen':
            outputText.innerHTML = 'Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt'
            break;
        case 'Mecklenburg-Vorpommern':
            outputText.innerHTML = 'Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt'
            break;
        case 'Niedersachsen':
            outputText.innerHTML = 'Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt'
            break;
        case 'Nordrhein-Westfalen':
            outputText.innerHTML = 'Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt'
            break;
        case 'Rheinland-Pfalz':
            outputText.innerHTML = 'Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt'
            break;
        case 'Saarland':
            outputText.innerHTML = 'Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt'
            break;
        case 'Sachsen':
            outputText.innerHTML = 'Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt'
            break;
        case 'Sachsen-Anhalt':
            outputText.innerHTML = 'Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt'
            break;
        case 'Schleswig-Holstein':
            outputText.innerHTML = 'Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt'
            break;
        case 'Thüringen':
            outputText.innerHTML = 'Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt'
            break;
        default: outputText.innerHTML = 'Ein solches Bundesland gibt es in Deutschland nicht.';
    }
}