// homework - ATM

let stanje = 1000;
function atm() {
    let iznos = parseFloat(prompt(`Unesite iznos koji želite podići:`));
    if (isNaN(iznos) || iznos <= 0) {
      alert(`Molimo unesite validan iznos.`);
      return;
    }
    if (iznos > stanje) {
      alert(`Nemate dovoljno novca na računu.`);
    } else {
      alert(`Uspešno ste podigli ${iznos} evra.`);
    }
  }
  atm();

// homework - dani u mesecu

function brojDanaUMesecu() {
let nazivMeseca = prompt(`Unesite naziv meseca:`).toLowerCase();
  
switch (nazivMeseca) {
    case "januar":
    case "mart":
    case "maj":
    case "jul":
    case "avgust":
    case "oktobar":
    case "decembar":
        alert(`Ovaj mesec ima 31 dan.`);
        break;
  
    case "april":
    case "jun":
    case "septembar":
    case "novembar":
        alert(`Ovaj mesec ima 30 dana.`);
        break;
  
    case "februar":
        let godina = parseInt(prompt(`Unesite godinu:`));
        let prestupna = (godina % 4 === 0 && godina % 100 !== 0) || (godina % 400 === 0);
  
        if (prestupna) {
          alert(`Februar u izabranoj tj. prestupnoj godini ima 29 dana.`);
        } else {
          alert(`Februar u izabranoj tj. običnoj godini ima 28 dana.`);
        }
        break;
  
      default:
        alert(`Niste uneli validan naziv meseca.`);
    }
  }
  brojDanaUMesecu();
  