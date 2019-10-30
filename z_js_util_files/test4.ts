console.log('-----------------------------------------------------------');
const sumaPrevious: {[idd: number]: number} = {};
Object.assign(sumaPrevious, {2000: 300000});

const aaa = () => {
  for (let i = 0; i < 10; i++) {
    // const idd = i;
    // const zaangazowanie = (sumaPrevious[i] ? sumaPrevious[i] : 0) + i;
    sumaPrevious[i] = (sumaPrevious[i] ? sumaPrevious[i] : 0) + i;
    // const temp = {};
    // temp[idd] = zaangazowanie;
    // sumaPrevious = {...sumaPrevious, ...temp};
    // Object.assign(sumaPrevious, temp);
  }
  console.log(sumaPrevious);
};

const bbb = function metoda() {
  type outputType = {
    [idd: number]: {
      imie?: string,
      nazwisko?: string,
      przekroczone?: boolean,
      przekroczoneOIle?: number,
      struktury?: {
        [nazwa: string]: {
          ilePrzed: number,
          ilePo: number
        }
      }
    }
  };
  const daneDoPokazania: outputType = {};
  const temp = 'obszar1';
  const temp1 = 'obszar11';
  daneDoPokazania[1] = {przekroczone: true, przekroczoneOIle: 2, struktury: {}};
  daneDoPokazania[1].struktury[temp] = {ilePrzed: 200, ilePo: 201};
  daneDoPokazania[1].struktury[temp1] = {ilePrzed: 204, ilePo: 205};
  daneDoPokazania[2] = {przekroczone: false, imie: 'Arek'};
  daneDoPokazania[2].struktury = {obszar2: {ilePrzed: 202, ilePo: 203}};
  console.log(daneDoPokazania);
  console.log(daneDoPokazania[1].struktury.obszar1.ilePo);
  console.log(daneDoPokazania[2].struktury.obszar2.ilePo);
};

aaa();
aaa();
bbb();
