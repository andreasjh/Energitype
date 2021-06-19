function energitype_klasse(){
  if(!document.querySelector('input[name= Q12_1]:checked') || !document.querySelector('input[name= Q12_3]:checked') || !document.querySelector('input[name= Q12_4]:checked') || !document.querySelector('input[name= Q12_5]:checked') || !document.querySelector('input[name= Q12_7]:checked') || !document.querySelector('input[name= Q12_8]:checked') || !document.querySelector('input[name= Q12_12]:checked') || !document.querySelector('input[name= Q12_13]:checked') || !document.querySelector('input[name= Q12_15]:checked') || !document.querySelector('input[name= Q12_17]:checked')){
  return("Error")
  }
  const Q12_1 = document.querySelector('input[name= Q12_1]:checked').value;
  const Q12_3 = document.querySelector('input[name= Q12_3]:checked').value;
  const Q12_4 = document.querySelector('input[name= Q12_4]:checked').value;
  const Q12_5 = document.querySelector('input[name=Q12_5]:checked').value;
  const Q12_7 = document.querySelector('input[name=Q12_7]:checked').value;
  const Q12_8 = document.querySelector('input[name=Q12_8]:checked').value;
  const Q12_12 = document.querySelector('input[name=Q12_12]:checked').value;
  const Q12_13 = document.querySelector('input[name=Q12_13]:checked').value;
  const Q12_15 = document.querySelector('input[name=Q12_15]:checked').value;
  const Q12_17 = document.querySelector('input[name=Q12_17]:checked').value;
  const energitype1 = 3.80697334362468*Q12_1+3.44323699505651*Q12_3+3.7654886672078*Q12_4+2.93261860716888*Q12_5+3.84274178692154*Q12_7+
    6.68194874345441*Q12_8+3.02790474450318*Q12_12+1.88984486208133*Q12_13+3.3505877547412*Q12_15+2.57880277101338*Q12_17-57.6524108923238
  const energitype2 = 2.4157764172153*Q12_1+0.681732140208467*Q12_3+2.52900912500868*Q12_4+2.60451071303749*Q12_5+3.43716625405117*Q12_7+
    4.70469002917884*Q12_8+3.50548354430653*Q12_12+3.59074572890357*Q12_13+3.32504765758981*Q12_15+3.67641697941117*Q12_17-48.4387691457012
  const energitype3 = 1.90502247474865*Q12_1-0.470107377320407*Q12_3+0.778613420943387*Q12_4+1.85991718271416*Q12_5+5.67851719544243*Q12_7+
    8.73065674208276*Q12_8+4.23051180149706*Q12_12+3.91194651147423*Q12_13+4.23064778861155*Q12_15+3.63659094040397*Q12_17-68.2776713359334
  const energitype4 = 2.4903541914741*Q12_1+2.55007366435637*Q12_3+3.60064794867909*Q12_4+2.77250229945219*Q12_5+2.27196967147392*Q12_7+
    3.49367471352525*Q12_8+2.44486535678709*Q12_12+2.00222964385429*Q12_13+2.51301520575217*Q12_15+2.63761200103397*Q12_17-35.2184866406795
  const energitype5 = 4.25942592636088*Q12_1+6.85362167743203*Q12_3+6.53034042241156*Q12_4+3.63143396843591*Q12_5+0.664498775905018*Q12_7+
    1.60217628548486*Q12_8+1.38752952439295*Q12_12-0.0670660179421597*Q12_13+1.7135079235091*Q12_15+1.39050460901931*Q12_17-51.336276423347
  const energitype6 = 3.89397525030859*Q12_1+4.90219155034634*Q12_3+4.96478500106536*Q12_4+3.04937243124021*Q12_5+1.52695313230987*Q12_7+
    2.67977940562185*Q12_8+2.53248429034315*Q12_12+1.11493552021202*Q12_13+2.65610981564247*Q12_15+2.41362846000891*Q12_17-45.9938297880442

  let energityper = [energitype1, energitype2, energitype3, energitype4, energitype5, energitype6]
  let max = energitype1

  for (let x of energityper) {
    if (x > max) {
      max = x
    }
  }
  if (max == energitype1) {
    return("<b>Energitype 1 - Lev i nuet Lasse</b>")
  } else if (max == energitype2) {
    return("<b>Energitype 2 - Vane Verner</b>")
  } else if (max == energitype3) {
    return("<b>Energitype 3 - Skeptiske Søren</b>")
  } else if (max == energitype4) {
    return("<b>Energitype 4 - Rationelle Robert</b>")
  } else if (max == energitype5) {
    return("<b>Energitype 5 - Ideologiske Ida</b>")
  } else if (max == energitype6) {
    return("<b>Energitype 6 - Korrekte Karen</b>")
  }

}

const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
  if(energitype_klasse() == "Error"){
    alert("Du mangler at besvare et eller flere af ovenstående udsagn")
  } else {
    document.getElementById("Energitype_svar").innerHTML = "Ud fra dine ovenstående besvarelser minder du mest om ".concat(energitype_klasse())
    if (energitype_klasse() == "<b>Energitype 1 - Lev i nuet Lasse</b>") {
      document.getElementById("Energitype_beskrivelse").innerHTML = "Du kan blive klogere på din energitype ved at klikke på følgende link: xxx <br>"
    } else if (energitype_klasse() == "<b>Energitype 2 - Vane Verner</b>") {
      document.getElementById("Energitype_beskrivelse").innerHTML = "Du kan blive klogere på din energitype ved at klikke på følgende link: xxx <br>"
    } else if (energitype_klasse() == "<b>Energitype 3 - Skeptiske Søren</b>") {
      document.getElementById("Energitype_beskrivelse").innerHTML = "Du kan blive klogere på din energitype ved at klikke på følgende link: xxx <br>"
    } else if (energitype_klasse() == "<b>Energitype 4 - Rationelle Robert</b>") {
      document.getElementById("Energitype_beskrivelse").innerHTML = "Du kan blive klogere på din energitype ved at klikke på følgende link: xxx <br>"
    } else if (energitype_klasse() == "<b>Energitype 5 - Ideologiske Ida</b>") {
      document.getElementById("Energitype_beskrivelse").innerHTML = "Du kan blive klogere på din energitype ved at klikke på følgende link: xxx <br>"
    } else if (energitype_klasse() == "<b>Energitype 6 - Korrekte Karen</b>") {
      document.getElementById("Energitype_beskrivelse").innerHTML = "Du kan blive klogere på din energitype ved at klikke på følgende link: xxx <br>"
    }
  }
})