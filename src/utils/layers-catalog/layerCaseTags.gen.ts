import type { LayerCase } from "#/utils/layers-catalog/layerCases.gen";

export const tags = [
  "0-mover",
  "1-mover",
  "2-mover",
  "3-mover",
  "4-mover",
  "5-mover",
  "6-mover",
  "7-mover",
  "Adjacent layer",
  "Opposite layer",
  "Diagadj layer",
  "No-bar layer",
  "1 to adjacent layer",
  "1 to opposite layer",
  "1 to diagadj layer",
  "2 to adjacent layer",
  "2 to opposite layer",
  "2 to diagadj layer"
] as const;

export type Tag = (typeof tags)[number];

export const layerCaseTags = {
  "abcd": [
    "0-mover",
    "Adjacent layer",
    "Opposite layer"
  ],
  "abck": [
    "4-mover",
    "Adjacent layer",
    "Opposite layer"
  ],
  "abcl": [
    "4-mover",
    "Adjacent layer",
    "Opposite layer"
  ],
  "abcm": [
    "3-mover",
    "Adjacent layer",
    "Opposite layer"
  ],
  "abcn": [
    "1-mover",
    "Adjacent layer",
    "Opposite layer"
  ],
  "abco": [
    "4-mover",
    "Adjacent layer",
    "Opposite layer"
  ],
  "abcs": [
    "1-mover",
    "Adjacent layer",
    "Opposite layer"
  ],
  "abct": [
    "3-mover",
    "Adjacent layer",
    "Opposite layer"
  ],
  "abcu": [
    "4-mover",
    "Adjacent layer",
    "Opposite layer"
  ],
  "abik": [
    "4-mover",
    "Adjacent layer"
  ],
  "abil": [
    "5-mover",
    "Adjacent layer"
  ],
  "abim": [
    "4-mover",
    "Adjacent layer"
  ],
  "abin": [
    "5-mover",
    "Adjacent layer"
  ],
  "abio": [
    "4-mover",
    "Adjacent layer"
  ],
  "abis": [
    "5-mover",
    "Adjacent layer"
  ],
  "abit": [
    "5-mover",
    "Adjacent layer"
  ],
  "abiu": [
    "3-mover",
    "Adjacent layer"
  ],
  "abjk": [
    "5-mover",
    "Adjacent layer"
  ],
  "abjl": [
    "4-mover",
    "Adjacent layer"
  ],
  "abjm": [
    "5-mover",
    "Adjacent layer"
  ],
  "abjn": [
    "3-mover",
    "Adjacent layer"
  ],
  "abjo": [
    "5-mover",
    "Adjacent layer"
  ],
  "abjs": [
    "4-mover",
    "Adjacent layer"
  ],
  "abjt": [
    "5-mover",
    "Adjacent layer"
  ],
  "abju": [
    "4-mover",
    "Adjacent layer"
  ],
  "abpk": [
    "3-mover",
    "Adjacent layer"
  ],
  "abpl": [
    "5-mover",
    "Adjacent layer"
  ],
  "abpm": [
    "3-mover",
    "Adjacent layer"
  ],
  "abpn": [
    "2-mover",
    "Adjacent layer"
  ],
  "abpo": [
    "5-mover",
    "Adjacent layer"
  ],
  "abps": [
    "2-mover",
    "Adjacent layer"
  ],
  "abpt": [
    "5-mover",
    "Adjacent layer"
  ],
  "abpu": [
    "2-mover",
    "Adjacent layer"
  ],
  "abqk": [
    "5-mover",
    "Adjacent layer"
  ],
  "abql": [
    "4-mover",
    "Adjacent layer"
  ],
  "abqm": [
    "4-mover",
    "Adjacent layer"
  ],
  "abqn": [
    "3-mover",
    "Adjacent layer"
  ],
  "abqo": [
    "5-mover",
    "Adjacent layer"
  ],
  "abqs": [
    "4-mover",
    "Adjacent layer"
  ],
  "abqt": [
    "4-mover",
    "Adjacent layer"
  ],
  "abqu": [
    "5-mover",
    "Adjacent layer"
  ],
  "abrk": [
    "5-mover",
    "Adjacent layer"
  ],
  "abrl": [
    "4-mover",
    "Adjacent layer"
  ],
  "abrm": [
    "5-mover",
    "Adjacent layer"
  ],
  "abrn": [
    "5-mover",
    "Adjacent layer"
  ],
  "abro": [
    "4-mover",
    "Adjacent layer"
  ],
  "abrs": [
    "4-mover",
    "Adjacent layer"
  ],
  "abrt": [
    "3-mover",
    "Adjacent layer"
  ],
  "abru": [
    "4-mover",
    "Adjacent layer"
  ],
  "abvk": [
    "5-mover",
    "Adjacent layer"
  ],
  "abvl": [
    "5-mover",
    "Adjacent layer"
  ],
  "abvm": [
    "4-mover",
    "Adjacent layer"
  ],
  "abvn": [
    "5-mover",
    "Adjacent layer"
  ],
  "abvo": [
    "3-mover",
    "Adjacent layer"
  ],
  "abvs": [
    "2-mover",
    "Adjacent layer"
  ],
  "abvt": [
    "5-mover",
    "Adjacent layer"
  ],
  "abvu": [
    "5-mover",
    "Adjacent layer"
  ],
  "abwk": [
    "4-mover",
    "Adjacent layer"
  ],
  "abwl": [
    "5-mover",
    "Adjacent layer"
  ],
  "abwm": [
    "4-mover",
    "Adjacent layer"
  ],
  "abwn": [
    "2-mover",
    "Adjacent layer"
  ],
  "abwo": [
    "4-mover",
    "Adjacent layer"
  ],
  "abws": [
    "4-mover",
    "Adjacent layer"
  ],
  "abwt": [
    "2-mover",
    "Adjacent layer"
  ],
  "abwu": [
    "3-mover",
    "Adjacent layer"
  ],
  "abxk": [
    "4-mover",
    "Adjacent layer"
  ],
  "abxl": [
    "3-mover",
    "Adjacent layer"
  ],
  "abxm": [
    "5-mover",
    "Adjacent layer"
  ],
  "abxn": [
    "2-mover",
    "Adjacent layer"
  ],
  "abxo": [
    "4-mover",
    "Adjacent layer"
  ],
  "abxs": [
    "3-mover",
    "Adjacent layer"
  ],
  "abxt": [
    "5-mover",
    "Adjacent layer"
  ],
  "abxu": [
    "5-mover",
    "Adjacent layer"
  ],
  "adcb": [
    "7-mover",
    "Diagadj layer",
    "Opposite layer"
  ],
  "adcg": [
    "4-mover",
    "Diagadj layer",
    "Opposite layer"
  ],
  "adch": [
    "4-mover",
    "Diagadj layer",
    "Opposite layer"
  ],
  "adcm": [
    "6-mover",
    "Diagadj layer",
    "Opposite layer"
  ],
  "adcn": [
    "4-mover",
    "Diagadj layer",
    "Opposite layer"
  ],
  "adco": [
    "5-mover",
    "Diagadj layer",
    "Opposite layer"
  ],
  "adcs": [
    "4-mover",
    "Diagadj layer",
    "Opposite layer"
  ],
  "adct": [
    "6-mover",
    "Diagadj layer",
    "Opposite layer"
  ],
  "adcu": [
    "5-mover",
    "Diagadj layer",
    "Opposite layer"
  ],
  "adig": [
    "5-mover",
    "Diagadj layer"
  ],
  "adih": [
    "6-mover",
    "Diagadj layer"
  ],
  "adim": [
    "5-mover",
    "Diagadj layer",
    "1 to opposite layer"
  ],
  "adin": [
    "5-mover",
    "Diagadj layer",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "adio": [
    "5-mover",
    "Diagadj layer"
  ],
  "adis": [
    "4-mover",
    "Diagadj layer",
    "2 to adjacent layer"
  ],
  "adit": [
    "4-mover",
    "Diagadj layer",
    "2 to opposite layer"
  ],
  "adiu": [
    "5-mover",
    "Diagadj layer",
    "2 to adjacent layer"
  ],
  "adjg": [
    "6-mover",
    "Diagadj layer",
    "2 to adjacent layer"
  ],
  "adjh": [
    "5-mover",
    "Diagadj layer"
  ],
  "adjm": [
    "5-mover",
    "Diagadj layer",
    "1 to opposite layer"
  ],
  "adjn": [
    "5-mover",
    "Diagadj layer",
    "2 to adjacent layer"
  ],
  "adjo": [
    "5-mover",
    "Diagadj layer",
    "2 to opposite layer"
  ],
  "adjs": [
    "5-mover",
    "Diagadj layer",
    "1 to adjacent layer"
  ],
  "adjt": [
    "5-mover",
    "Diagadj layer",
    "1 to opposite layer"
  ],
  "adju": [
    "5-mover",
    "Diagadj layer"
  ],
  "adpg": [
    "5-mover",
    "Diagadj layer",
    "1 to opposite layer"
  ],
  "adph": [
    "4-mover",
    "Diagadj layer",
    "2 to opposite layer"
  ],
  "adpm": [
    "5-mover",
    "Diagadj layer",
    "1 to opposite layer"
  ],
  "adpn": [
    "3-mover",
    "Diagadj layer",
    "1 to adjacent layer"
  ],
  "adpo": [
    "6-mover",
    "Diagadj layer",
    "1 to opposite layer"
  ],
  "adps": [
    "5-mover",
    "Diagadj layer",
    "1 to adjacent layer"
  ],
  "adpt": [
    "4-mover",
    "Diagadj layer",
    "2 to opposite layer"
  ],
  "adpu": [
    "5-mover",
    "Diagadj layer",
    "1 to opposite layer"
  ],
  "adqg": [
    "5-mover",
    "Diagadj layer",
    "1 to adjacent layer"
  ],
  "adqh": [
    "4-mover",
    "Diagadj layer",
    "2 to adjacent layer"
  ],
  "adqm": [
    "5-mover",
    "Diagadj layer"
  ],
  "adqn": [
    "4-mover",
    "Diagadj layer",
    "1 to adjacent layer"
  ],
  "adqo": [
    "4-mover",
    "Diagadj layer",
    "2 to opposite layer"
  ],
  "adqs": [
    "5-mover",
    "Diagadj layer",
    "1 to adjacent layer"
  ],
  "adqt": [
    "5-mover",
    "Diagadj layer",
    "1 to adjacent layer"
  ],
  "adqu": [
    "5-mover",
    "Diagadj layer"
  ],
  "adrg": [
    "5-mover",
    "Diagadj layer"
  ],
  "adrh": [
    "5-mover",
    "Diagadj layer",
    "2 to adjacent layer"
  ],
  "adrm": [
    "5-mover",
    "Diagadj layer"
  ],
  "adrn": [
    "5-mover",
    "Diagadj layer",
    "2 to adjacent layer"
  ],
  "adro": [
    "6-mover",
    "Diagadj layer",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "adrs": [
    "5-mover",
    "Diagadj layer"
  ],
  "adrt": [
    "5-mover",
    "Diagadj layer",
    "1 to opposite layer"
  ],
  "adru": [
    "4-mover",
    "Diagadj layer",
    "2 to adjacent layer"
  ],
  "advg": [
    "5-mover",
    "Diagadj layer",
    "2 to adjacent layer"
  ],
  "advh": [
    "5-mover",
    "Diagadj layer",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "advm": [
    "4-mover",
    "Diagadj layer",
    "2 to adjacent layer"
  ],
  "advn": [
    "4-mover",
    "Diagadj layer",
    "1 to adjacent layer"
  ],
  "advo": [
    "5-mover",
    "Diagadj layer",
    "2 to adjacent layer"
  ],
  "advs": [
    "4-mover",
    "Diagadj layer",
    "1 to adjacent layer"
  ],
  "advt": [
    "3-mover",
    "Diagadj layer",
    "1 to adjacent layer"
  ],
  "advu": [
    "5-mover",
    "Diagadj layer",
    "2 to adjacent layer"
  ],
  "adwg": [
    "5-mover",
    "Diagadj layer",
    "1 to opposite layer"
  ],
  "adwh": [
    "5-mover",
    "Diagadj layer",
    "1 to opposite layer"
  ],
  "adwm": [
    "6-mover",
    "Diagadj layer",
    "2 to opposite layer"
  ],
  "adwn": [
    "4-mover",
    "Diagadj layer",
    "2 to adjacent layer"
  ],
  "adwo": [
    "5-mover",
    "Diagadj layer",
    "2 to opposite layer"
  ],
  "adws": [
    "5-mover",
    "Diagadj layer"
  ],
  "adwt": [
    "5-mover",
    "Diagadj layer",
    "1 to opposite layer"
  ],
  "adwu": [
    "5-mover",
    "Diagadj layer"
  ],
  "adxg": [
    "5-mover",
    "Diagadj layer",
    "2 to opposite layer"
  ],
  "adxh": [
    "5-mover",
    "Diagadj layer"
  ],
  "adxm": [
    "5-mover",
    "Diagadj layer",
    "2 to opposite layer"
  ],
  "adxn": [
    "5-mover",
    "Diagadj layer",
    "2 to adjacent layer"
  ],
  "adxo": [
    "5-mover",
    "Diagadj layer"
  ],
  "adxs": [
    "4-mover",
    "Diagadj layer",
    "2 to opposite layer"
  ],
  "adxt": [
    "6-mover",
    "Diagadj layer",
    "1 to opposite layer"
  ],
  "adxu": [
    "6-mover",
    "Diagadj layer",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "agck": [
    "5-mover",
    "Opposite layer"
  ],
  "agcl": [
    "4-mover",
    "Opposite layer"
  ],
  "agcm": [
    "5-mover",
    "Opposite layer"
  ],
  "agcn": [
    "5-mover",
    "Opposite layer"
  ],
  "agco": [
    "3-mover",
    "Opposite layer"
  ],
  "agcs": [
    "5-mover",
    "Opposite layer"
  ],
  "agct": [
    "4-mover",
    "Opposite layer"
  ],
  "agcu": [
    "4-mover",
    "Opposite layer"
  ],
  "agik": [
    "6-mover"
  ],
  "agil": [
    "6-mover"
  ],
  "agim": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "agin": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "agio": [
    "5-mover"
  ],
  "agis": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "agit": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "agiu": [
    "5-mover"
  ],
  "agjk": [
    "6-mover",
    "2 to diagadj layer"
  ],
  "agjl": [
    "6-mover"
  ],
  "agjm": [
    "5-mover",
    "1 to diagadj layer"
  ],
  "agjn": [
    "5-mover"
  ],
  "agjo": [
    "6-mover"
  ],
  "agjs": [
    "6-mover",
    "1 to adjacent layer"
  ],
  "agjt": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "agju": [
    "6-mover",
    "2 to diagadj layer",
    "2 to adjacent layer"
  ],
  "agpk": [
    "5-mover",
    "2 to diagadj layer"
  ],
  "agpl": [
    "5-mover",
    "1 to opposite layer"
  ],
  "agpm": [
    "4-mover",
    "1 to diagadj layer"
  ],
  "agpn": [
    "6-mover",
    "1 to adjacent layer",
    "1 to opposite layer"
  ],
  "agpo": [
    "4-mover",
    "1 to opposite layer"
  ],
  "agps": [
    "5-mover",
    "1 to opposite layer"
  ],
  "agpt": [
    "5-mover",
    "1 to opposite layer"
  ],
  "agpu": [
    "5-mover",
    "2 to diagadj layer"
  ],
  "agqk": [
    "5-mover"
  ],
  "agql": [
    "5-mover",
    "2 to opposite layer"
  ],
  "agqm": [
    "6-mover",
    "2 to diagadj layer"
  ],
  "agqn": [
    "4-mover",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "agqo": [
    "5-mover"
  ],
  "agqs": [
    "5-mover"
  ],
  "agqt": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "agqu": [
    "5-mover",
    "2 to opposite layer"
  ],
  "agrk": [
    "6-mover"
  ],
  "agrl": [
    "5-mover"
  ],
  "agrm": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "agrn": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "agro": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "agrs": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "agrt": [
    "5-mover"
  ],
  "agru": [
    "5-mover"
  ],
  "agvk": [
    "5-mover"
  ],
  "agvl": [
    "5-mover",
    "2 to opposite layer"
  ],
  "agvm": [
    "5-mover"
  ],
  "agvn": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "agvo": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "agvs": [
    "6-mover",
    "1 to adjacent layer"
  ],
  "agvt": [
    "5-mover",
    "1 to diagadj layer"
  ],
  "agvu": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "agwk": [
    "5-mover",
    "2 to opposite layer"
  ],
  "agwl": [
    "5-mover",
    "1 to opposite layer"
  ],
  "agwm": [
    "4-mover",
    "2 to opposite layer"
  ],
  "agwn": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "agwo": [
    "4-mover",
    "1 to opposite layer"
  ],
  "agws": [
    "5-mover",
    "1 to opposite layer",
    "1 to adjacent layer"
  ],
  "agwt": [
    "5-mover"
  ],
  "agwu": [
    "4-mover",
    "2 to opposite layer"
  ],
  "agxk": [
    "5-mover"
  ],
  "agxl": [
    "5-mover"
  ],
  "agxm": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "agxn": [
    "5-mover"
  ],
  "agxo": [
    "5-mover"
  ],
  "agxs": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "agxt": [
    "5-mover",
    "2 to opposite layer"
  ],
  "agxu": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "ahcl": [
    "5-mover",
    "Opposite layer"
  ],
  "ahcm": [
    "4-mover",
    "Opposite layer"
  ],
  "ahcn": [
    "5-mover",
    "Opposite layer"
  ],
  "ahco": [
    "4-mover",
    "Opposite layer"
  ],
  "ahcs": [
    "5-mover",
    "Opposite layer"
  ],
  "ahct": [
    "5-mover",
    "Opposite layer"
  ],
  "ahcu": [
    "3-mover",
    "Opposite layer"
  ],
  "ahik": [
    "6-mover"
  ],
  "ahil": [
    "6-mover",
    "2 to diagadj layer"
  ],
  "ahim": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "ahin": [
    "6-mover",
    "1 to adjacent layer"
  ],
  "ahio": [
    "6-mover"
  ],
  "ahis": [
    "5-mover"
  ],
  "ahit": [
    "5-mover"
  ],
  "ahiu": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "ahjk": [
    "6-mover"
  ],
  "ahjl": [
    "6-mover"
  ],
  "ahjm": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "ahjn": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "ahjo": [
    "5-mover"
  ],
  "ahjs": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "ahjt": [
    "5-mover"
  ],
  "ahju": [
    "5-mover"
  ],
  "ahpk": [
    "5-mover",
    "1 to opposite layer"
  ],
  "ahpl": [
    "5-mover",
    "2 to opposite layer"
  ],
  "ahpm": [
    "5-mover",
    "1 to opposite layer"
  ],
  "ahpn": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "ahpo": [
    "5-mover",
    "1 to opposite layer"
  ],
  "ahps": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "ahpt": [
    "4-mover",
    "1 to opposite layer"
  ],
  "ahpu": [
    "6-mover",
    "1 to opposite layer"
  ],
  "ahqk": [
    "5-mover"
  ],
  "ahql": [
    "5-mover"
  ],
  "ahqm": [
    "5-mover"
  ],
  "ahqn": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "ahqo": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "ahqs": [
    "5-mover"
  ],
  "ahqt": [
    "5-mover"
  ],
  "ahqu": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "ahrk": [
    "5-mover"
  ],
  "ahrl": [
    "5-mover"
  ],
  "ahrm": [
    "5-mover"
  ],
  "ahrn": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "ahro": [
    "5-mover",
    "2 to opposite layer"
  ],
  "ahrs": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "ahrt": [
    "5-mover",
    "1 to diagadj layer"
  ],
  "ahru": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "ahvk": [
    "5-mover"
  ],
  "ahvl": [
    "5-mover"
  ],
  "ahvm": [
    "5-mover"
  ],
  "ahvn": [
    "5-mover",
    "2 to opposite layer"
  ],
  "ahvo": [
    "5-mover"
  ],
  "ahvs": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "ahvt": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "ahvu": [
    "5-mover"
  ],
  "ahwk": [
    "5-mover",
    "1 to opposite layer"
  ],
  "ahwl": [
    "5-mover",
    "2 to diagadj layer"
  ],
  "ahwm": [
    "5-mover",
    "1 to opposite layer"
  ],
  "ahwn": [
    "4-mover",
    "2 to opposite layer"
  ],
  "ahwo": [
    "5-mover",
    "1 to opposite layer"
  ],
  "ahws": [
    "4-mover",
    "1 to opposite layer"
  ],
  "ahwt": [
    "5-mover"
  ],
  "ahwu": [
    "5-mover",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "ahxk": [
    "5-mover"
  ],
  "ahxl": [
    "6-mover"
  ],
  "ahxm": [
    "5-mover",
    "1 to diagadj layer"
  ],
  "ahxn": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "ahxo": [
    "5-mover"
  ],
  "ahxs": [
    "5-mover"
  ],
  "ahxt": [
    "5-mover"
  ],
  "ahxu": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "akcg": [
    "3-mover",
    "Opposite layer"
  ],
  "akch": [
    "6-mover",
    "Opposite layer"
  ],
  "akcm": [
    "3-mover",
    "Opposite layer"
  ],
  "akcn": [
    "5-mover",
    "Opposite layer"
  ],
  "akco": [
    "3-mover",
    "Opposite layer"
  ],
  "akcs": [
    "2-mover",
    "Opposite layer"
  ],
  "akct": [
    "4-mover",
    "Opposite layer"
  ],
  "akcu": [
    "6-mover",
    "Opposite layer"
  ],
  "akig": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "akih": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "akim": [
    "5-mover"
  ],
  "akin": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "akio": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "akis": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "akit": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "akiu": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "akjg": [
    "5-mover"
  ],
  "akjh": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "akjm": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "akjn": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "akjo": [
    "5-mover"
  ],
  "akjs": [
    "5-mover"
  ],
  "akjt": [
    "5-mover"
  ],
  "akju": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "akpg": [
    "4-mover",
    "1 to opposite layer"
  ],
  "akph": [
    "5-mover"
  ],
  "akpm": [
    "4-mover",
    "1 to opposite layer"
  ],
  "akpn": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "akpo": [
    "4-mover",
    "1 to opposite layer"
  ],
  "akps": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "akpt": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "akpu": [
    "3-mover",
    "1 to opposite layer"
  ],
  "akqg": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "akqh": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "akqm": [
    "5-mover"
  ],
  "akqn": [
    "4-mover",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "akqo": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "akqs": [
    "5-mover",
    "2 to opposite layer"
  ],
  "akqt": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "akqu": [
    "5-mover"
  ],
  "akrg": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "akrh": [
    "4-mover",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "akrm": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "akrn": [
    "5-mover"
  ],
  "akro": [
    "5-mover",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "akrs": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "akrt": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "akru": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "akvg": [
    "4-mover",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "akvh": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "akvm": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "akvn": [
    "4-mover",
    "2 to opposite layer"
  ],
  "akvo": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "akvs": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "akvt": [
    "5-mover",
    "1 to diagadj layer"
  ],
  "akvu": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "akwg": [
    "4-mover",
    "1 to opposite layer"
  ],
  "akwh": [
    "5-mover"
  ],
  "akwm": [
    "4-mover",
    "1 to opposite layer"
  ],
  "akwn": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "akwo": [
    "4-mover",
    "1 to opposite layer"
  ],
  "akws": [
    "5-mover",
    "2 to opposite layer"
  ],
  "akwt": [
    "3-mover",
    "1 to opposite layer"
  ],
  "akwu": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "akxg": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "akxh": [
    "4-mover",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "akxm": [
    "5-mover"
  ],
  "akxn": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "akxo": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "akxs": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "akxt": [
    "4-mover",
    "2 to opposite layer"
  ],
  "akxu": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "alch": [
    "3-mover",
    "Opposite layer"
  ],
  "alcm": [
    "4-mover",
    "Opposite layer"
  ],
  "alcn": [
    "2-mover",
    "Opposite layer"
  ],
  "alco": [
    "6-mover",
    "Opposite layer"
  ],
  "alcs": [
    "5-mover",
    "Opposite layer"
  ],
  "alct": [
    "3-mover",
    "Opposite layer"
  ],
  "alcu": [
    "3-mover",
    "Opposite layer"
  ],
  "alig": [
    "6-mover",
    "2 to adjacent layer"
  ],
  "alih": [
    "5-mover"
  ],
  "alim": [
    "5-mover"
  ],
  "alin": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "alio": [
    "5-mover"
  ],
  "alis": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "alit": [
    "6-mover",
    "2 to adjacent layer"
  ],
  "aliu": [
    "6-mover",
    "2 to adjacent layer"
  ],
  "aljg": [
    "6-mover",
    "2 to adjacent layer"
  ],
  "aljh": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "aljm": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "aljn": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "aljo": [
    "5-mover"
  ],
  "aljs": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "aljt": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "alju": [
    "5-mover"
  ],
  "alpg": [
    "5-mover",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "alph": [
    "4-mover",
    "1 to opposite layer"
  ],
  "alpm": [
    "4-mover",
    "2 to opposite layer"
  ],
  "alpn": [
    "3-mover",
    "1 to opposite layer"
  ],
  "alpo": [
    "6-mover",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "alps": [
    "4-mover",
    "1 to opposite layer"
  ],
  "alpt": [
    "4-mover",
    "1 to opposite layer"
  ],
  "alpu": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "alqg": [
    "5-mover"
  ],
  "alqh": [
    "4-mover",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "alqm": [
    "5-mover",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "alqn": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "alqo": [
    "5-mover",
    "2 to opposite layer"
  ],
  "alqs": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "alqt": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "alqu": [
    "5-mover",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "alrg": [
    "5-mover",
    "2 to opposite layer"
  ],
  "alrh": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "alrm": [
    "5-mover"
  ],
  "alrn": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "alro": [
    "5-mover",
    "2 to diagadj layer",
    "2 to adjacent layer"
  ],
  "alrs": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "alrt": [
    "5-mover"
  ],
  "alru": [
    "4-mover",
    "2 to opposite layer"
  ],
  "alvg": [
    "5-mover"
  ],
  "alvh": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "alvm": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "alvn": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "alvo": [
    "4-mover",
    "2 to opposite layer"
  ],
  "alvs": [
    "5-mover"
  ],
  "alvt": [
    "5-mover",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "alvu": [
    "5-mover"
  ],
  "alwg": [
    "5-mover",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "alwh": [
    "4-mover",
    "1 to opposite layer"
  ],
  "alwm": [
    "5-mover",
    "1 to opposite layer"
  ],
  "alwn": [
    "3-mover",
    "1 to opposite layer"
  ],
  "alwo": [
    "5-mover",
    "2 to opposite layer"
  ],
  "alws": [
    "4-mover",
    "1 to opposite layer"
  ],
  "alwt": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "alwu": [
    "4-mover",
    "1 to opposite layer"
  ],
  "alxg": [
    "5-mover",
    "2 to opposite layer"
  ],
  "alxh": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "alxm": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "alxn": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "alxo": [
    "5-mover"
  ],
  "alxs": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "alxt": [
    "5-mover"
  ],
  "alxu": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "amcs": [
    "5-mover",
    "Opposite layer"
  ],
  "amct": [
    "4-mover",
    "Opposite layer"
  ],
  "amcu": [
    "2-mover",
    "Opposite layer"
  ],
  "amig": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "amih": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "amik": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "amil": [
    "5-mover"
  ],
  "amis": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "amit": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "amiu": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "amjg": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "amjh": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "amjk": [
    "6-mover",
    "1 to adjacent layer"
  ],
  "amjl": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "amjs": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "amjt": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "amju": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "ampg": [
    "3-mover",
    "1 to opposite layer"
  ],
  "amph": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "ampk": [
    "4-mover",
    "2 to opposite layer"
  ],
  "ampl": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "amps": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "ampt": [
    "3-mover",
    "1 to opposite layer"
  ],
  "ampu": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "amqg": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "amqh": [
    "4-mover",
    "2 to opposite layer"
  ],
  "amqk": [
    "5-mover",
    "2 to opposite layer"
  ],
  "amql": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "amqs": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "amqt": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "amqu": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "amrg": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "amrh": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "amrk": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "amrl": [
    "5-mover"
  ],
  "amrs": [
    "5-mover"
  ],
  "amrt": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "amru": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "amvg": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "amvh": [
    "4-mover",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "amvk": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "amvl": [
    "4-mover",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "amvs": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "amvt": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "amvu": [
    "6-mover",
    "1 to adjacent layer"
  ],
  "amwg": [
    "3-mover",
    "1 to opposite layer"
  ],
  "amwh": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "amwk": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "amwl": [
    "6-mover",
    "1 to opposite layer",
    "1 to adjacent layer"
  ],
  "amws": [
    "3-mover",
    "1 to opposite layer"
  ],
  "amwt": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "amwu": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "amxg": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "amxh": [
    "5-mover"
  ],
  "amxk": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "amxl": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "amxs": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "amxt": [
    "5-mover",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "amxu": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "anct": [
    "4-mover",
    "Opposite layer"
  ],
  "ancu": [
    "5-mover",
    "Opposite layer"
  ],
  "anig": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "anih": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "anik": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "anil": [
    "5-mover",
    "1 to diagadj layer"
  ],
  "anis": [
    "5-mover"
  ],
  "anit": [
    "5-mover"
  ],
  "aniu": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "anjg": [
    "5-mover"
  ],
  "anjh": [
    "5-mover"
  ],
  "anjk": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "anjl": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "anjs": [
    "6-mover",
    "1 to diagadj layer",
    "1 to adjacent layer"
  ],
  "anjt": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "anju": [
    "5-mover"
  ],
  "anpg": [
    "5-mover",
    "1 to opposite layer"
  ],
  "anph": [
    "4-mover",
    "1 to opposite layer"
  ],
  "anpk": [
    "5-mover",
    "1 to opposite layer"
  ],
  "anpl": [
    "4-mover",
    "2 to opposite layer"
  ],
  "anps": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "anpt": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "anpu": [
    "5-mover",
    "1 to opposite layer"
  ],
  "anqg": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "anqh": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "anqk": [
    "5-mover"
  ],
  "anql": [
    "5-mover"
  ],
  "anqs": [
    "5-mover",
    "1 to diagadj layer"
  ],
  "anqt": [
    "5-mover",
    "1 to diagadj layer"
  ],
  "anqu": [
    "5-mover"
  ],
  "anrg": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "anrh": [
    "5-mover"
  ],
  "anrk": [
    "5-mover",
    "1 to diagadj layer"
  ],
  "anrl": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "anrs": [
    "6-mover",
    "1 to diagadj layer",
    "1 to adjacent layer"
  ],
  "anrt": [
    "5-mover"
  ],
  "anru": [
    "5-mover"
  ],
  "anvg": [
    "5-mover",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "anvh": [
    "5-mover"
  ],
  "anvk": [
    "5-mover"
  ],
  "anvl": [
    "6-mover",
    "2 to diagadj layer"
  ],
  "anvs": [
    "6-mover",
    "1 to diagadj layer",
    "1 to adjacent layer"
  ],
  "anvt": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "anvu": [
    "5-mover",
    "2 to opposite layer"
  ],
  "anwg": [
    "4-mover",
    "2 to opposite layer"
  ],
  "anwh": [
    "4-mover",
    "1 to opposite layer"
  ],
  "anwk": [
    "5-mover",
    "1 to opposite layer"
  ],
  "anwl": [
    "4-mover",
    "1 to diagadj layer"
  ],
  "anws": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "anwt": [
    "5-mover",
    "1 to opposite layer"
  ],
  "anwu": [
    "4-mover",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "anxg": [
    "5-mover"
  ],
  "anxh": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "anxk": [
    "5-mover"
  ],
  "anxl": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "anxs": [
    "5-mover",
    "1 to diagadj layer",
    "1 to adjacent layer"
  ],
  "anxt": [
    "5-mover",
    "1 to diagadj layer"
  ],
  "anxu": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "aocu": [
    "5-mover",
    "Opposite layer"
  ],
  "aoig": [
    "5-mover"
  ],
  "aoih": [
    "5-mover"
  ],
  "aoik": [
    "5-mover"
  ],
  "aoil": [
    "6-mover"
  ],
  "aois": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "aoit": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "aoiu": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "aojg": [
    "5-mover"
  ],
  "aojh": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "aojk": [
    "6-mover"
  ],
  "aojl": [
    "5-mover"
  ],
  "aojs": [
    "5-mover"
  ],
  "aojt": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "aoju": [
    "5-mover"
  ],
  "aopg": [
    "5-mover",
    "2 to opposite layer"
  ],
  "aoph": [
    "4-mover",
    "1 to opposite layer"
  ],
  "aopk": [
    "5-mover",
    "1 to opposite layer"
  ],
  "aopl": [
    "4-mover",
    "1 to opposite layer"
  ],
  "aops": [
    "4-mover",
    "2 to opposite layer"
  ],
  "aopt": [
    "6-mover",
    "1 to opposite layer"
  ],
  "aopu": [
    "3-mover",
    "1 to opposite layer"
  ],
  "aoqg": [
    "4-mover",
    "2 to opposite layer"
  ],
  "aoqh": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "aoqk": [
    "5-mover"
  ],
  "aoql": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "aoqs": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "aoqt": [
    "5-mover"
  ],
  "aoqu": [
    "4-mover",
    "2 to opposite layer"
  ],
  "aorg": [
    "5-mover"
  ],
  "aorh": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "aork": [
    "5-mover"
  ],
  "aorl": [
    "5-mover"
  ],
  "aors": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "aort": [
    "4-mover",
    "1 to diagadj layer"
  ],
  "aoru": [
    "6-mover",
    "2 to adjacent layer",
    "2 to diagadj layer"
  ],
  "aovg": [
    "5-mover",
    "2 to opposite layer"
  ],
  "aovh": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "aovk": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "aovl": [
    "5-mover"
  ],
  "aovs": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "aovt": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "aovu": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "aowg": [
    "6-mover",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "aowh": [
    "4-mover",
    "1 to opposite layer"
  ],
  "aowk": [
    "5-mover",
    "1 to opposite layer"
  ],
  "aowl": [
    "4-mover",
    "1 to opposite layer"
  ],
  "aows": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "aowt": [
    "3-mover",
    "1 to opposite layer"
  ],
  "aowu": [
    "5-mover"
  ],
  "aoxg": [
    "5-mover",
    "2 to adjacent layer",
    "2 to diagadj layer"
  ],
  "aoxh": [
    "5-mover",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "aoxk": [
    "5-mover",
    "2 to opposite layer"
  ],
  "aoxl": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "aoxs": [
    "4-mover",
    "2 to opposite layer"
  ],
  "aoxt": [
    "5-mover"
  ],
  "aoxu": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "ascm": [
    "4-mover",
    "Opposite layer"
  ],
  "ascn": [
    "4-mover",
    "Opposite layer"
  ],
  "asco": [
    "5-mover",
    "Opposite layer"
  ],
  "asig": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "asih": [
    "5-mover"
  ],
  "asik": [
    "5-mover"
  ],
  "asil": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "asim": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "asin": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "asio": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "asjg": [
    "6-mover",
    "2 to adjacent layer"
  ],
  "asjh": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "asjk": [
    "5-mover"
  ],
  "asjl": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "asjm": [
    "5-mover"
  ],
  "asjn": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "asjo": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "aspg": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "asph": [
    "3-mover",
    "1 to opposite layer"
  ],
  "aspk": [
    "5-mover"
  ],
  "aspl": [
    "5-mover"
  ],
  "aspm": [
    "5-mover",
    "1 to opposite layer"
  ],
  "aspn": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "aspo": [
    "3-mover",
    "1 to opposite layer"
  ],
  "asqg": [
    "5-mover",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "asqh": [
    "5-mover",
    "1 to diagadj layer"
  ],
  "asqk": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "asql": [
    "5-mover",
    "1 to diagadj layer"
  ],
  "asqm": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "asqn": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "asqo": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "asrg": [
    "5-mover"
  ],
  "asrh": [
    "4-mover",
    "2 to opposite layer"
  ],
  "asrk": [
    "5-mover"
  ],
  "asrl": [
    "5-mover",
    "2 to opposite layer"
  ],
  "asrm": [
    "5-mover",
    "1 to diagadj layer"
  ],
  "asrn": [
    "5-mover",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "asro": [
    "5-mover"
  ],
  "asvg": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "asvh": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "asvk": [
    "5-mover"
  ],
  "asvl": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "asvm": [
    "5-mover",
    "1 to diagadj layer"
  ],
  "asvn": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "asvo": [
    "5-mover"
  ],
  "aswg": [
    "4-mover",
    "1 to opposite layer"
  ],
  "aswh": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "aswk": [
    "4-mover",
    "1 to opposite layer"
  ],
  "aswl": [
    "5-mover",
    "1 to opposite layer"
  ],
  "aswm": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "aswn": [
    "3-mover",
    "1 to opposite layer"
  ],
  "aswo": [
    "6-mover",
    "1 to opposite layer"
  ],
  "asxg": [
    "5-mover"
  ],
  "asxh": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "asxk": [
    "5-mover",
    "1 to diagadj layer"
  ],
  "asxl": [
    "5-mover"
  ],
  "asxm": [
    "5-mover"
  ],
  "asxn": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "asxo": [
    "4-mover",
    "1 to diagadj layer"
  ],
  "atcn": [
    "5-mover",
    "Opposite layer"
  ],
  "atco": [
    "2-mover",
    "Opposite layer"
  ],
  "atig": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "atih": [
    "5-mover"
  ],
  "atik": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "atil": [
    "6-mover",
    "1 to adjacent layer"
  ],
  "atim": [
    "6-mover",
    "1 to adjacent layer",
    "1 to diagadj layer"
  ],
  "atin": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "atio": [
    "5-mover"
  ],
  "atjg": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "atjh": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "atjk": [
    "5-mover"
  ],
  "atjl": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "atjm": [
    "5-mover"
  ],
  "atjn": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "atjo": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "atpg": [
    "4-mover",
    "1 to opposite layer"
  ],
  "atph": [
    "5-mover",
    "2 to opposite layer"
  ],
  "atpk": [
    "4-mover",
    "1 to opposite layer"
  ],
  "atpl": [
    "5-mover",
    "1 to opposite layer",
    "1 to adjacent layer"
  ],
  "atpm": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "atpn": [
    "3-mover",
    "1 to opposite layer"
  ],
  "atpo": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "atqg": [
    "5-mover"
  ],
  "atqh": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "atqk": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "atql": [
    "6-mover",
    "1 to adjacent layer"
  ],
  "atqm": [
    "6-mover",
    "1 to adjacent layer",
    "1 to diagadj layer"
  ],
  "atqn": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "atqo": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "atrg": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "atrh": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "atrk": [
    "5-mover"
  ],
  "atrl": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "atrm": [
    "5-mover",
    "1 to adjacent layer",
    "1 to diagadj layer"
  ],
  "atrn": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "atro": [
    "4-mover",
    "2 to opposite layer"
  ],
  "atvg": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "atvh": [
    "5-mover",
    "2 to opposite layer"
  ],
  "atvk": [
    "5-mover"
  ],
  "atvl": [
    "5-mover"
  ],
  "atvm": [
    "5-mover",
    "1 to diagadj layer"
  ],
  "atvn": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "atvo": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "atwg": [
    "4-mover",
    "1 to opposite layer"
  ],
  "atwh": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "atwk": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "atwl": [
    "5-mover",
    "1 to opposite layer"
  ],
  "atwm": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "atwn": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "atwo": [
    "4-mover",
    "2 to opposite layer"
  ],
  "atxg": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "atxh": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "atxk": [
    "5-mover",
    "1 to adjacent layer"
  ],
  "atxl": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "atxm": [
    "6-mover",
    "1 to adjacent layer",
    "1 to diagadj layer"
  ],
  "atxn": [
    "5-mover"
  ],
  "atxo": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "auco": [
    "5-mover",
    "Opposite layer"
  ],
  "auig": [
    "5-mover"
  ],
  "auih": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "auik": [
    "5-mover"
  ],
  "auil": [
    "6-mover",
    "2 to adjacent layer",
    "2 to diagadj layer"
  ],
  "auim": [
    "5-mover"
  ],
  "auin": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "auio": [
    "5-mover"
  ],
  "aujg": [
    "6-mover",
    "2 to adjacent layer"
  ],
  "aujh": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "aujk": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "aujl": [
    "5-mover"
  ],
  "aujm": [
    "6-mover",
    "1 to diagadj layer"
  ],
  "aujn": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "aujo": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "aupg": [
    "4-mover",
    "1 to opposite layer"
  ],
  "auph": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "aupk": [
    "5-mover",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "aupl": [
    "4-mover",
    "2 to opposite layer"
  ],
  "aupm": [
    "4-mover",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "aupn": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "aupo": [
    "5-mover"
  ],
  "auqg": [
    "5-mover"
  ],
  "auqh": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "auqk": [
    "5-mover"
  ],
  "auql": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "auqm": [
    "5-mover",
    "2 to opposite layer"
  ],
  "auqn": [
    "6-mover",
    "1 to adjacent layer"
  ],
  "auqo": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "aurg": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "aurh": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "aurk": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "aurl": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "aurm": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "aurn": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "auro": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "auvg": [
    "5-mover",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "auvh": [
    "5-mover"
  ],
  "auvk": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "auvl": [
    "5-mover",
    "2 to opposite layer"
  ],
  "auvm": [
    "5-mover"
  ],
  "auvn": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "auvo": [
    "4-mover",
    "2 to opposite layer"
  ],
  "auwg": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "auwh": [
    "3-mover",
    "1 to opposite layer"
  ],
  "auwk": [
    "6-mover",
    "1 to opposite layer"
  ],
  "auwl": [
    "5-mover",
    "2 to diagadj layer"
  ],
  "auwm": [
    "5-mover",
    "1 to opposite layer"
  ],
  "auwn": [
    "4-mover",
    "1 to adjacent layer"
  ],
  "auwo": [
    "3-mover",
    "1 to opposite layer"
  ],
  "auxg": [
    "4-mover",
    "2 to opposite layer"
  ],
  "auxh": [
    "5-mover",
    "2 to adjacent layer"
  ],
  "auxk": [
    "4-mover",
    "2 to adjacent layer"
  ],
  "auxl": [
    "5-mover"
  ],
  "auxm": [
    "5-mover"
  ],
  "auxn": [
    "3-mover",
    "1 to adjacent layer"
  ],
  "auxo": [
    "6-mover",
    "2 to adjacent layer",
    "2 to diagadj layer"
  ],
  "egik": [
    "6-mover",
    "No-bar layer"
  ],
  "egil": [
    "6-mover",
    "No-bar layer"
  ],
  "egim": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "egin": [
    "5-mover",
    "No-bar layer"
  ],
  "egio": [
    "5-mover",
    "No-bar layer"
  ],
  "egis": [
    "6-mover",
    "No-bar layer"
  ],
  "egit": [
    "5-mover",
    "No-bar layer"
  ],
  "egiu": [
    "5-mover",
    "No-bar layer"
  ],
  "egjl": [
    "6-mover",
    "No-bar layer"
  ],
  "egjm": [
    "5-mover",
    "No-bar layer"
  ],
  "egjn": [
    "6-mover",
    "No-bar layer"
  ],
  "egjo": [
    "5-mover",
    "No-bar layer"
  ],
  "egjs": [
    "6-mover",
    "No-bar layer"
  ],
  "egjt": [
    "5-mover",
    "No-bar layer"
  ],
  "egju": [
    "6-mover",
    "No-bar layer"
  ],
  "egpl": [
    "7-mover",
    "No-bar layer"
  ],
  "egpm": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "egpn": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "egpo": [
    "6-mover",
    "No-bar layer"
  ],
  "egps": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "egpt": [
    "6-mover",
    "No-bar layer"
  ],
  "egpu": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "egql": [
    "6-mover",
    "No-bar layer"
  ],
  "egqm": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "egqn": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "egqo": [
    "5-mover",
    "No-bar layer"
  ],
  "egqs": [
    "5-mover",
    "No-bar layer"
  ],
  "egqt": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "egqu": [
    "5-mover",
    "No-bar layer"
  ],
  "egrl": [
    "5-mover",
    "No-bar layer"
  ],
  "egrm": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "egrn": [
    "5-mover",
    "No-bar layer"
  ],
  "egro": [
    "5-mover",
    "No-bar layer"
  ],
  "egrs": [
    "6-mover",
    "No-bar layer"
  ],
  "egrt": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "egru": [
    "6-mover",
    "No-bar layer"
  ],
  "egvl": [
    "6-mover",
    "No-bar layer"
  ],
  "egvm": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "egvn": [
    "6-mover",
    "No-bar layer"
  ],
  "egvo": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "egvs": [
    "5-mover",
    "No-bar layer"
  ],
  "egvt": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "egvu": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "egwl": [
    "6-mover",
    "No-bar layer"
  ],
  "egwm": [
    "6-mover",
    "No-bar layer"
  ],
  "egwn": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "egwo": [
    "6-mover",
    "No-bar layer"
  ],
  "egws": [
    "6-mover",
    "No-bar layer"
  ],
  "egwt": [
    "5-mover",
    "No-bar layer"
  ],
  "egwu": [
    "5-mover",
    "No-bar layer"
  ],
  "egxl": [
    "5-mover",
    "No-bar layer"
  ],
  "egxm": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "egxn": [
    "5-mover",
    "No-bar layer"
  ],
  "egxo": [
    "6-mover",
    "No-bar layer"
  ],
  "egxs": [
    "5-mover",
    "No-bar layer"
  ],
  "egxt": [
    "5-mover",
    "No-bar layer"
  ],
  "egxu": [
    "5-mover",
    "No-bar layer"
  ],
  "ehil": [
    "6-mover",
    "No-bar layer"
  ],
  "ehim": [
    "5-mover",
    "No-bar layer"
  ],
  "ehin": [
    "6-mover",
    "No-bar layer"
  ],
  "ehio": [
    "6-mover",
    "No-bar layer"
  ],
  "ehis": [
    "5-mover",
    "No-bar layer"
  ],
  "ehit": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "ehiu": [
    "5-mover",
    "No-bar layer"
  ],
  "ehjl": [
    "6-mover",
    "No-bar layer"
  ],
  "ehjm": [
    "5-mover",
    "No-bar layer"
  ],
  "ehjn": [
    "6-mover",
    "No-bar layer"
  ],
  "ehjo": [
    "6-mover",
    "No-bar layer"
  ],
  "ehjs": [
    "6-mover",
    "No-bar layer"
  ],
  "ehjt": [
    "5-mover",
    "No-bar layer"
  ],
  "ehju": [
    "5-mover",
    "No-bar layer"
  ],
  "ehpl": [
    "6-mover",
    "No-bar layer"
  ],
  "ehpm": [
    "6-mover",
    "No-bar layer"
  ],
  "ehpn": [
    "6-mover",
    "No-bar layer"
  ],
  "ehpo": [
    "6-mover",
    "No-bar layer"
  ],
  "ehps": [
    "5-mover",
    "No-bar layer"
  ],
  "ehpt": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "ehpu": [
    "5-mover",
    "No-bar layer"
  ],
  "ehql": [
    "5-mover",
    "No-bar layer"
  ],
  "ehqm": [
    "6-mover",
    "No-bar layer"
  ],
  "ehqn": [
    "6-mover",
    "No-bar layer"
  ],
  "ehqo": [
    "5-mover",
    "No-bar layer"
  ],
  "ehqs": [
    "5-mover",
    "No-bar layer"
  ],
  "ehqt": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "ehqu": [
    "6-mover",
    "No-bar layer"
  ],
  "ehrl": [
    "6-mover",
    "No-bar layer"
  ],
  "ehrm": [
    "5-mover",
    "No-bar layer"
  ],
  "ehrn": [
    "6-mover",
    "No-bar layer"
  ],
  "ehro": [
    "6-mover",
    "No-bar layer"
  ],
  "ehrs": [
    "6-mover",
    "No-bar layer"
  ],
  "ehrt": [
    "5-mover",
    "No-bar layer"
  ],
  "ehru": [
    "6-mover",
    "No-bar layer"
  ],
  "ehvl": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "ehvm": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "ehvn": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "ehvo": [
    "5-mover",
    "No-bar layer"
  ],
  "ehvs": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "ehvt": [
    "6-mover",
    "No-bar layer"
  ],
  "ehvu": [
    "5-mover",
    "No-bar layer"
  ],
  "ehwl": [
    "5-mover",
    "No-bar layer"
  ],
  "ehwm": [
    "5-mover",
    "No-bar layer"
  ],
  "ehwn": [
    "5-mover",
    "No-bar layer"
  ],
  "ehwo": [
    "6-mover",
    "No-bar layer"
  ],
  "ehws": [
    "6-mover",
    "No-bar layer"
  ],
  "ehwt": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "ehwu": [
    "5-mover",
    "No-bar layer"
  ],
  "ehxl": [
    "5-mover",
    "No-bar layer"
  ],
  "ehxm": [
    "6-mover",
    "No-bar layer"
  ],
  "ehxn": [
    "5-mover",
    "No-bar layer"
  ],
  "ehxo": [
    "6-mover",
    "No-bar layer"
  ],
  "ehxs": [
    "5-mover",
    "No-bar layer"
  ],
  "ehxt": [
    "5-mover",
    "No-bar layer"
  ],
  "ehxu": [
    "6-mover",
    "No-bar layer"
  ],
  "ekig": [
    "7-mover",
    "No-bar layer"
  ],
  "ekih": [
    "7-mover",
    "No-bar layer"
  ],
  "ekim": [
    "6-mover",
    "No-bar layer"
  ],
  "ekin": [
    "6-mover",
    "No-bar layer"
  ],
  "ekio": [
    "6-mover",
    "No-bar layer"
  ],
  "ekis": [
    "6-mover",
    "No-bar layer"
  ],
  "ekit": [
    "6-mover",
    "No-bar layer"
  ],
  "ekiu": [
    "6-mover",
    "No-bar layer"
  ],
  "ekjh": [
    "7-mover",
    "No-bar layer"
  ],
  "ekjm": [
    "6-mover",
    "No-bar layer"
  ],
  "ekjn": [
    "6-mover",
    "No-bar layer"
  ],
  "ekjo": [
    "6-mover",
    "No-bar layer"
  ],
  "ekjs": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "ekjt": [
    "6-mover",
    "No-bar layer"
  ],
  "ekju": [
    "6-mover",
    "No-bar layer"
  ],
  "ekph": [
    "6-mover",
    "No-bar layer"
  ],
  "ekpm": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "ekpn": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "ekpo": [
    "6-mover",
    "No-bar layer"
  ],
  "ekps": [
    "5-mover",
    "No-bar layer"
  ],
  "ekpt": [
    "6-mover",
    "No-bar layer"
  ],
  "ekpu": [
    "5-mover",
    "No-bar layer"
  ],
  "ekqh": [
    "6-mover",
    "No-bar layer"
  ],
  "ekqm": [
    "6-mover",
    "No-bar layer"
  ],
  "ekqn": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "ekqo": [
    "6-mover",
    "No-bar layer"
  ],
  "ekqs": [
    "5-mover",
    "No-bar layer"
  ],
  "ekqt": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "ekqu": [
    "5-mover",
    "No-bar layer"
  ],
  "ekrh": [
    "6-mover",
    "No-bar layer"
  ],
  "ekrm": [
    "6-mover",
    "No-bar layer"
  ],
  "ekrn": [
    "6-mover",
    "No-bar layer"
  ],
  "ekro": [
    "6-mover",
    "No-bar layer"
  ],
  "ekrs": [
    "5-mover",
    "No-bar layer"
  ],
  "ekrt": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "ekru": [
    "6-mover",
    "No-bar layer"
  ],
  "ekvh": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "ekvm": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "ekvn": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "ekvo": [
    "5-mover",
    "No-bar layer"
  ],
  "ekvs": [
    "5-mover",
    "No-bar layer"
  ],
  "ekvt": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "ekvu": [
    "6-mover",
    "No-bar layer"
  ],
  "ekwh": [
    "6-mover",
    "No-bar layer"
  ],
  "ekwm": [
    "5-mover",
    "No-bar layer"
  ],
  "ekwn": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "ekwo": [
    "6-mover",
    "No-bar layer"
  ],
  "ekws": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "ekwt": [
    "5-mover",
    "No-bar layer"
  ],
  "ekwu": [
    "6-mover",
    "No-bar layer"
  ],
  "ekxh": [
    "6-mover",
    "No-bar layer"
  ],
  "ekxm": [
    "5-mover",
    "No-bar layer"
  ],
  "ekxn": [
    "6-mover",
    "No-bar layer"
  ],
  "ekxo": [
    "5-mover",
    "No-bar layer"
  ],
  "ekxs": [
    "5-mover",
    "No-bar layer",
    "2 to diagadj layer"
  ],
  "ekxt": [
    "5-mover",
    "No-bar layer"
  ],
  "ekxu": [
    "5-mover",
    "No-bar layer"
  ],
  "elih": [
    "7-mover",
    "No-bar layer"
  ],
  "elim": [
    "6-mover",
    "No-bar layer"
  ],
  "elin": [
    "6-mover",
    "No-bar layer"
  ],
  "elio": [
    "6-mover",
    "No-bar layer"
  ],
  "elis": [
    "6-mover",
    "No-bar layer"
  ],
  "elit": [
    "6-mover",
    "No-bar layer"
  ],
  "eliu": [
    "6-mover",
    "No-bar layer"
  ],
  "eljh": [
    "7-mover",
    "No-bar layer"
  ],
  "eljm": [
    "6-mover",
    "No-bar layer"
  ],
  "eljn": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "eljo": [
    "6-mover",
    "No-bar layer"
  ],
  "eljs": [
    "6-mover",
    "No-bar layer"
  ],
  "eljt": [
    "6-mover",
    "No-bar layer"
  ],
  "elju": [
    "6-mover",
    "No-bar layer"
  ],
  "elph": [
    "6-mover",
    "No-bar layer"
  ],
  "elpm": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "elpn": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "elpo": [
    "6-mover",
    "No-bar layer"
  ],
  "elps": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "elpt": [
    "6-mover",
    "No-bar layer"
  ],
  "elpu": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "elqh": [
    "6-mover",
    "No-bar layer"
  ],
  "elqm": [
    "5-mover",
    "No-bar layer"
  ],
  "elqn": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "elqo": [
    "6-mover",
    "No-bar layer"
  ],
  "elqs": [
    "6-mover",
    "No-bar layer"
  ],
  "elqt": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "elqu": [
    "5-mover",
    "No-bar layer"
  ],
  "elrh": [
    "6-mover",
    "No-bar layer"
  ],
  "elrm": [
    "5-mover",
    "No-bar layer"
  ],
  "elrn": [
    "5-mover",
    "No-bar layer"
  ],
  "elro": [
    "6-mover",
    "No-bar layer"
  ],
  "elrs": [
    "5-mover",
    "No-bar layer"
  ],
  "elrt": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "elru": [
    "6-mover",
    "No-bar layer"
  ],
  "elvh": [
    "6-mover",
    "No-bar layer"
  ],
  "elvm": [
    "5-mover",
    "No-bar layer"
  ],
  "elvn": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "elvo": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "elvs": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "elvt": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "elvu": [
    "5-mover",
    "No-bar layer"
  ],
  "elwh": [
    "6-mover",
    "No-bar layer"
  ],
  "elwm": [
    "6-mover",
    "No-bar layer"
  ],
  "elwn": [
    "5-mover",
    "No-bar layer"
  ],
  "elwo": [
    "5-mover",
    "No-bar layer"
  ],
  "elws": [
    "5-mover",
    "No-bar layer"
  ],
  "elwt": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "elwu": [
    "5-mover",
    "No-bar layer"
  ],
  "elxh": [
    "6-mover",
    "No-bar layer"
  ],
  "elxm": [
    "5-mover",
    "No-bar layer"
  ],
  "elxn": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "elxo": [
    "5-mover",
    "No-bar layer"
  ],
  "elxs": [
    "6-mover",
    "No-bar layer"
  ],
  "elxt": [
    "6-mover",
    "No-bar layer"
  ],
  "elxu": [
    "6-mover",
    "No-bar layer"
  ],
  "emis": [
    "5-mover",
    "No-bar layer"
  ],
  "emit": [
    "5-mover",
    "No-bar layer"
  ],
  "emiu": [
    "5-mover",
    "No-bar layer"
  ],
  "emjh": [
    "6-mover",
    "No-bar layer"
  ],
  "emjl": [
    "6-mover",
    "No-bar layer"
  ],
  "emjs": [
    "6-mover",
    "No-bar layer"
  ],
  "emjt": [
    "6-mover",
    "No-bar layer"
  ],
  "emju": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "emph": [
    "6-mover",
    "No-bar layer",
    "2 to diagadj layer"
  ],
  "empl": [
    "5-mover",
    "No-bar layer"
  ],
  "emps": [
    "5-mover",
    "No-bar layer"
  ],
  "empt": [
    "5-mover",
    "No-bar layer"
  ],
  "empu": [
    "5-mover",
    "No-bar layer"
  ],
  "emqh": [
    "6-mover",
    "No-bar layer"
  ],
  "emql": [
    "5-mover",
    "No-bar layer"
  ],
  "emqs": [
    "5-mover",
    "No-bar layer",
    "2 to diagadj layer"
  ],
  "emqt": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "emqu": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "emrh": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "emrl": [
    "5-mover",
    "No-bar layer"
  ],
  "emrs": [
    "5-mover",
    "No-bar layer"
  ],
  "emrt": [
    "5-mover",
    "No-bar layer"
  ],
  "emru": [
    "5-mover",
    "No-bar layer"
  ],
  "emvh": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "emvl": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "emvs": [
    "6-mover",
    "No-bar layer",
    "2 to diagadj layer",
    "2 to adjacent layer"
  ],
  "emvt": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "emvu": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "emwh": [
    "6-mover",
    "No-bar layer"
  ],
  "emwl": [
    "6-mover",
    "No-bar layer"
  ],
  "emws": [
    "5-mover",
    "No-bar layer"
  ],
  "emwt": [
    "5-mover",
    "No-bar layer"
  ],
  "emwu": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "emxh": [
    "5-mover",
    "No-bar layer"
  ],
  "emxl": [
    "6-mover",
    "No-bar layer"
  ],
  "emxs": [
    "5-mover",
    "No-bar layer"
  ],
  "emxt": [
    "5-mover",
    "No-bar layer"
  ],
  "emxu": [
    "5-mover",
    "No-bar layer"
  ],
  "enit": [
    "5-mover",
    "No-bar layer"
  ],
  "eniu": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "enjh": [
    "6-mover",
    "No-bar layer"
  ],
  "enjl": [
    "6-mover",
    "No-bar layer"
  ],
  "enjs": [
    "5-mover",
    "No-bar layer"
  ],
  "enjt": [
    "5-mover",
    "No-bar layer"
  ],
  "enju": [
    "6-mover",
    "No-bar layer"
  ],
  "enph": [
    "6-mover",
    "No-bar layer"
  ],
  "enpl": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "enps": [
    "5-mover",
    "No-bar layer"
  ],
  "enpt": [
    "5-mover",
    "No-bar layer"
  ],
  "enpu": [
    "5-mover",
    "No-bar layer"
  ],
  "enqh": [
    "6-mover",
    "No-bar layer",
    "2 to diagadj layer"
  ],
  "enql": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "enqs": [
    "5-mover",
    "No-bar layer"
  ],
  "enqt": [
    "5-mover",
    "No-bar layer"
  ],
  "enqu": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "enrh": [
    "5-mover",
    "No-bar layer"
  ],
  "enrl": [
    "5-mover",
    "No-bar layer"
  ],
  "enrs": [
    "6-mover",
    "No-bar layer"
  ],
  "enrt": [
    "5-mover",
    "No-bar layer"
  ],
  "enru": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "envh": [
    "5-mover",
    "No-bar layer"
  ],
  "envl": [
    "6-mover",
    "No-bar layer"
  ],
  "envs": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "envt": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "envu": [
    "6-mover",
    "No-bar layer"
  ],
  "enwh": [
    "5-mover",
    "No-bar layer"
  ],
  "enwl": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "enws": [
    "5-mover",
    "No-bar layer"
  ],
  "enwt": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "enwu": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "enxh": [
    "6-mover",
    "No-bar layer"
  ],
  "enxl": [
    "5-mover",
    "No-bar layer"
  ],
  "enxs": [
    "6-mover",
    "No-bar layer"
  ],
  "enxt": [
    "6-mover",
    "No-bar layer"
  ],
  "enxu": [
    "5-mover",
    "No-bar layer"
  ],
  "eoiu": [
    "6-mover",
    "No-bar layer"
  ],
  "eojh": [
    "6-mover",
    "No-bar layer"
  ],
  "eojl": [
    "5-mover",
    "No-bar layer"
  ],
  "eojs": [
    "5-mover",
    "No-bar layer"
  ],
  "eojt": [
    "6-mover",
    "No-bar layer"
  ],
  "eoju": [
    "5-mover",
    "No-bar layer"
  ],
  "eoph": [
    "5-mover",
    "No-bar layer"
  ],
  "eopl": [
    "6-mover",
    "No-bar layer"
  ],
  "eops": [
    "5-mover",
    "No-bar layer"
  ],
  "eopt": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "eopu": [
    "5-mover",
    "No-bar layer"
  ],
  "eoqh": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "eoql": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "eoqs": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "eoqt": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "eoqu": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "eorh": [
    "6-mover",
    "No-bar layer"
  ],
  "eorl": [
    "6-mover",
    "No-bar layer"
  ],
  "eors": [
    "5-mover",
    "No-bar layer"
  ],
  "eort": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "eoru": [
    "5-mover",
    "No-bar layer"
  ],
  "eovh": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "eovl": [
    "5-mover",
    "No-bar layer"
  ],
  "eovs": [
    "5-mover",
    "No-bar layer"
  ],
  "eovt": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "eovu": [
    "5-mover",
    "No-bar layer"
  ],
  "eowh": [
    "6-mover",
    "No-bar layer"
  ],
  "eowl": [
    "6-mover",
    "No-bar layer"
  ],
  "eows": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "eowt": [
    "5-mover",
    "No-bar layer"
  ],
  "eowu": [
    "5-mover",
    "No-bar layer"
  ],
  "eoxh": [
    "5-mover",
    "No-bar layer"
  ],
  "eoxl": [
    "5-mover",
    "No-bar layer"
  ],
  "eoxs": [
    "5-mover",
    "No-bar layer"
  ],
  "eoxt": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "eoxu": [
    "6-mover",
    "No-bar layer"
  ],
  "esim": [
    "5-mover",
    "No-bar layer"
  ],
  "esin": [
    "5-mover",
    "No-bar layer"
  ],
  "esio": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "esjh": [
    "6-mover",
    "No-bar layer"
  ],
  "esjl": [
    "6-mover",
    "No-bar layer"
  ],
  "esjm": [
    "5-mover",
    "No-bar layer"
  ],
  "esjn": [
    "5-mover",
    "No-bar layer"
  ],
  "esjo": [
    "6-mover",
    "No-bar layer"
  ],
  "esph": [
    "5-mover",
    "No-bar layer"
  ],
  "espl": [
    "5-mover",
    "No-bar layer"
  ],
  "espm": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "espn": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "espo": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "esqh": [
    "6-mover",
    "No-bar layer"
  ],
  "esql": [
    "6-mover",
    "No-bar layer"
  ],
  "esqm": [
    "5-mover",
    "No-bar layer"
  ],
  "esqn": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "esqo": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "esrh": [
    "6-mover",
    "No-bar layer"
  ],
  "esrl": [
    "5-mover",
    "No-bar layer"
  ],
  "esrm": [
    "5-mover",
    "No-bar layer"
  ],
  "esrn": [
    "5-mover",
    "No-bar layer"
  ],
  "esro": [
    "5-mover",
    "No-bar layer"
  ],
  "esvh": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "esvl": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "esvm": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "esvn": [
    "5-mover",
    "No-bar layer"
  ],
  "esvo": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "eswh": [
    "6-mover",
    "No-bar layer"
  ],
  "eswl": [
    "5-mover",
    "No-bar layer"
  ],
  "eswm": [
    "5-mover",
    "No-bar layer"
  ],
  "eswn": [
    "6-mover",
    "No-bar layer"
  ],
  "eswo": [
    "6-mover",
    "No-bar layer"
  ],
  "esxh": [
    "5-mover",
    "No-bar layer"
  ],
  "esxl": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "esxm": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "esxn": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "esxo": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "etin": [
    "5-mover",
    "No-bar layer"
  ],
  "etio": [
    "6-mover",
    "No-bar layer"
  ],
  "etjh": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "etjl": [
    "7-mover",
    "No-bar layer"
  ],
  "etjm": [
    "6-mover",
    "No-bar layer"
  ],
  "etjn": [
    "6-mover",
    "No-bar layer"
  ],
  "etjo": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "etph": [
    "5-mover",
    "No-bar layer"
  ],
  "etpl": [
    "6-mover",
    "No-bar layer"
  ],
  "etpm": [
    "5-mover",
    "No-bar layer"
  ],
  "etpn": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "etpo": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "etqh": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "etql": [
    "5-mover",
    "No-bar layer"
  ],
  "etqm": [
    "5-mover",
    "No-bar layer"
  ],
  "etqn": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "etqo": [
    "5-mover",
    "No-bar layer"
  ],
  "etrh": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "etrl": [
    "6-mover",
    "No-bar layer"
  ],
  "etrm": [
    "5-mover",
    "No-bar layer"
  ],
  "etrn": [
    "6-mover",
    "No-bar layer",
    "2 to diagadj layer"
  ],
  "etro": [
    "5-mover",
    "No-bar layer"
  ],
  "etvh": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "etvl": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "etvm": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "etvn": [
    "5-mover",
    "No-bar layer"
  ],
  "etvo": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "etwh": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "etwl": [
    "5-mover",
    "No-bar layer"
  ],
  "etwm": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "etwn": [
    "6-mover",
    "No-bar layer"
  ],
  "etwo": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "etxh": [
    "6-mover",
    "No-bar layer"
  ],
  "etxl": [
    "6-mover",
    "No-bar layer"
  ],
  "etxm": [
    "5-mover",
    "No-bar layer"
  ],
  "etxn": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "etxo": [
    "6-mover",
    "No-bar layer"
  ],
  "euio": [
    "6-mover",
    "No-bar layer"
  ],
  "eujh": [
    "6-mover",
    "No-bar layer"
  ],
  "eujl": [
    "5-mover",
    "No-bar layer"
  ],
  "eujm": [
    "6-mover",
    "No-bar layer"
  ],
  "eujn": [
    "5-mover",
    "No-bar layer"
  ],
  "eujo": [
    "5-mover",
    "No-bar layer"
  ],
  "euph": [
    "6-mover",
    "No-bar layer"
  ],
  "eupl": [
    "6-mover",
    "No-bar layer"
  ],
  "eupm": [
    "6-mover",
    "No-bar layer"
  ],
  "eupn": [
    "5-mover",
    "No-bar layer"
  ],
  "eupo": [
    "5-mover",
    "No-bar layer"
  ],
  "euqh": [
    "5-mover",
    "No-bar layer"
  ],
  "euql": [
    "5-mover",
    "No-bar layer"
  ],
  "euqm": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "euqn": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "euqo": [
    "6-mover",
    "No-bar layer"
  ],
  "eurh": [
    "5-mover",
    "No-bar layer"
  ],
  "eurl": [
    "6-mover",
    "No-bar layer"
  ],
  "eurm": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "eurn": [
    "6-mover",
    "No-bar layer"
  ],
  "euro": [
    "5-mover",
    "No-bar layer"
  ],
  "euvh": [
    "6-mover",
    "No-bar layer"
  ],
  "euvl": [
    "5-mover",
    "No-bar layer"
  ],
  "euvm": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "euvn": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "euvo": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "euwh": [
    "5-mover",
    "No-bar layer"
  ],
  "euwl": [
    "5-mover",
    "No-bar layer"
  ],
  "euwm": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "euwn": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer",
    "2 to diagadj layer"
  ],
  "euwo": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "euxh": [
    "6-mover",
    "No-bar layer"
  ],
  "euxl": [
    "6-mover",
    "No-bar layer"
  ],
  "euxm": [
    "5-mover",
    "No-bar layer"
  ],
  "euxn": [
    "6-mover",
    "No-bar layer"
  ],
  "euxo": [
    "5-mover",
    "No-bar layer"
  ],
  "fhjl": [
    "6-mover",
    "No-bar layer"
  ],
  "fhjm": [
    "5-mover",
    "No-bar layer"
  ],
  "fhjn": [
    "6-mover",
    "No-bar layer"
  ],
  "fhjo": [
    "5-mover",
    "No-bar layer"
  ],
  "fhjs": [
    "5-mover",
    "No-bar layer"
  ],
  "fhjt": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fhju": [
    "5-mover",
    "No-bar layer"
  ],
  "fhpm": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fhpn": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fhpo": [
    "5-mover",
    "No-bar layer"
  ],
  "fhps": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fhpt": [
    "6-mover",
    "No-bar layer"
  ],
  "fhpu": [
    "5-mover",
    "No-bar layer"
  ],
  "fhqm": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fhqn": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fhqo": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fhqs": [
    "6-mover",
    "No-bar layer"
  ],
  "fhqt": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fhqu": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fhrm": [
    "5-mover",
    "No-bar layer"
  ],
  "fhrn": [
    "6-mover",
    "No-bar layer"
  ],
  "fhro": [
    "5-mover",
    "No-bar layer"
  ],
  "fhrs": [
    "6-mover",
    "No-bar layer"
  ],
  "fhrt": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fhru": [
    "6-mover",
    "No-bar layer"
  ],
  "fhvm": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fhvn": [
    "6-mover",
    "No-bar layer"
  ],
  "fhvo": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fhvs": [
    "5-mover",
    "No-bar layer"
  ],
  "fhvt": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "fhvu": [
    "5-mover",
    "No-bar layer"
  ],
  "fhwm": [
    "5-mover",
    "No-bar layer"
  ],
  "fhwn": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fhwo": [
    "6-mover",
    "No-bar layer"
  ],
  "fhws": [
    "6-mover",
    "No-bar layer"
  ],
  "fhwt": [
    "5-mover",
    "No-bar layer"
  ],
  "fhwu": [
    "5-mover",
    "No-bar layer"
  ],
  "fhxm": [
    "5-mover",
    "No-bar layer"
  ],
  "fhxn": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fhxo": [
    "6-mover",
    "No-bar layer"
  ],
  "fhxs": [
    "5-mover",
    "No-bar layer"
  ],
  "fhxt": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fhxu": [
    "5-mover",
    "No-bar layer"
  ],
  "fljh": [
    "7-mover",
    "No-bar layer"
  ],
  "fljm": [
    "6-mover",
    "No-bar layer"
  ],
  "fljn": [
    "6-mover",
    "No-bar layer"
  ],
  "fljo": [
    "6-mover",
    "No-bar layer"
  ],
  "fljs": [
    "6-mover",
    "No-bar layer"
  ],
  "fljt": [
    "6-mover",
    "No-bar layer"
  ],
  "flju": [
    "6-mover",
    "No-bar layer"
  ],
  "flpm": [
    "5-mover",
    "No-bar layer"
  ],
  "flpn": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "flpo": [
    "5-mover",
    "No-bar layer"
  ],
  "flps": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "flpt": [
    "6-mover",
    "No-bar layer"
  ],
  "flpu": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "flqm": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "flqn": [
    "5-mover",
    "No-bar layer"
  ],
  "flqo": [
    "5-mover",
    "No-bar layer",
    "2 to diagadj layer"
  ],
  "flqs": [
    "5-mover",
    "No-bar layer"
  ],
  "flqt": [
    "5-mover",
    "No-bar layer"
  ],
  "flqu": [
    "5-mover",
    "No-bar layer"
  ],
  "flrm": [
    "6-mover",
    "No-bar layer"
  ],
  "flrn": [
    "6-mover",
    "No-bar layer"
  ],
  "flro": [
    "5-mover",
    "No-bar layer"
  ],
  "flrs": [
    "5-mover",
    "No-bar layer"
  ],
  "flrt": [
    "5-mover",
    "No-bar layer"
  ],
  "flru": [
    "6-mover",
    "No-bar layer"
  ],
  "flvm": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "flvn": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "flvo": [
    "6-mover",
    "No-bar layer"
  ],
  "flvs": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "flvt": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "flvu": [
    "6-mover",
    "No-bar layer"
  ],
  "flwm": [
    "5-mover",
    "No-bar layer"
  ],
  "flwn": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "flwo": [
    "5-mover",
    "No-bar layer"
  ],
  "flws": [
    "6-mover",
    "No-bar layer"
  ],
  "flwt": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "flwu": [
    "6-mover",
    "No-bar layer"
  ],
  "flxm": [
    "6-mover",
    "No-bar layer"
  ],
  "flxn": [
    "5-mover",
    "No-bar layer"
  ],
  "flxo": [
    "5-mover",
    "No-bar layer"
  ],
  "flxs": [
    "6-mover",
    "No-bar layer"
  ],
  "flxt": [
    "6-mover",
    "No-bar layer"
  ],
  "flxu": [
    "6-mover",
    "No-bar layer"
  ],
  "fmjs": [
    "5-mover",
    "No-bar layer"
  ],
  "fmjt": [
    "5-mover",
    "No-bar layer"
  ],
  "fmju": [
    "6-mover",
    "No-bar layer"
  ],
  "fmps": [
    "6-mover",
    "No-bar layer"
  ],
  "fmpt": [
    "6-mover",
    "No-bar layer"
  ],
  "fmpu": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer",
    "2 to diagadj layer"
  ],
  "fmqs": [
    "5-mover",
    "No-bar layer"
  ],
  "fmqt": [
    "5-mover",
    "No-bar layer"
  ],
  "fmqu": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fmrs": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fmrt": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fmru": [
    "6-mover",
    "No-bar layer"
  ],
  "fmvs": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fmvt": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fmvu": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fmws": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fmwt": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fmwu": [
    "5-mover",
    "No-bar layer"
  ],
  "fmxs": [
    "6-mover",
    "No-bar layer",
    "2 to diagadj layer"
  ],
  "fmxt": [
    "5-mover",
    "No-bar layer"
  ],
  "fmxu": [
    "6-mover",
    "No-bar layer"
  ],
  "fnjt": [
    "5-mover",
    "No-bar layer"
  ],
  "fnju": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fnps": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fnpt": [
    "5-mover",
    "No-bar layer"
  ],
  "fnpu": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fnqs": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fnqt": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fnqu": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fnrs": [
    "5-mover",
    "No-bar layer"
  ],
  "fnrt": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fnru": [
    "5-mover",
    "No-bar layer"
  ],
  "fnvs": [
    "5-mover",
    "No-bar layer"
  ],
  "fnvt": [
    "5-mover",
    "No-bar layer"
  ],
  "fnvu": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fnws": [
    "5-mover",
    "No-bar layer"
  ],
  "fnwt": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fnwu": [
    "6-mover",
    "No-bar layer"
  ],
  "fnxs": [
    "5-mover",
    "No-bar layer"
  ],
  "fnxt": [
    "5-mover",
    "No-bar layer"
  ],
  "fnxu": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "foju": [
    "6-mover",
    "No-bar layer"
  ],
  "fops": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fopt": [
    "6-mover",
    "No-bar layer"
  ],
  "fopu": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "foqs": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "foqt": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "foqu": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fors": [
    "6-mover",
    "No-bar layer"
  ],
  "fort": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "foru": [
    "5-mover",
    "No-bar layer"
  ],
  "fovs": [
    "5-mover",
    "No-bar layer"
  ],
  "fovt": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fovu": [
    "6-mover",
    "No-bar layer"
  ],
  "fows": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fowt": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "fowu": [
    "5-mover",
    "No-bar layer"
  ],
  "foxs": [
    "5-mover",
    "No-bar layer"
  ],
  "foxt": [
    "5-mover",
    "No-bar layer"
  ],
  "foxu": [
    "5-mover",
    "No-bar layer"
  ],
  "fsjm": [
    "5-mover",
    "No-bar layer"
  ],
  "fsjn": [
    "5-mover",
    "No-bar layer"
  ],
  "fsjo": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fspm": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fspn": [
    "5-mover",
    "No-bar layer"
  ],
  "fspo": [
    "5-mover",
    "No-bar layer"
  ],
  "fsqm": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fsqn": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fsqo": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fsrm": [
    "6-mover",
    "No-bar layer"
  ],
  "fsrn": [
    "5-mover",
    "No-bar layer"
  ],
  "fsro": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fsvm": [
    "5-mover",
    "No-bar layer"
  ],
  "fsvn": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fsvo": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fswm": [
    "5-mover",
    "No-bar layer"
  ],
  "fswn": [
    "5-mover",
    "No-bar layer"
  ],
  "fswo": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fsxm": [
    "5-mover",
    "No-bar layer"
  ],
  "fsxn": [
    "5-mover",
    "No-bar layer"
  ],
  "fsxo": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "ftjn": [
    "5-mover",
    "No-bar layer"
  ],
  "ftjo": [
    "5-mover",
    "No-bar layer"
  ],
  "ftpm": [
    "5-mover",
    "No-bar layer"
  ],
  "ftpn": [
    "5-mover",
    "No-bar layer"
  ],
  "ftpo": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "ftqm": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "ftqn": [
    "6-mover",
    "No-bar layer",
    "2 to diagadj layer",
    "2 to adjacent layer"
  ],
  "ftqo": [
    "5-mover",
    "No-bar layer"
  ],
  "ftrm": [
    "6-mover",
    "No-bar layer"
  ],
  "ftrn": [
    "5-mover",
    "No-bar layer"
  ],
  "ftro": [
    "5-mover",
    "No-bar layer"
  ],
  "ftvm": [
    "5-mover",
    "No-bar layer"
  ],
  "ftvn": [
    "5-mover",
    "No-bar layer",
    "2 to diagadj layer"
  ],
  "ftvo": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "ftwm": [
    "5-mover",
    "No-bar layer"
  ],
  "ftwn": [
    "5-mover",
    "No-bar layer"
  ],
  "ftwo": [
    "5-mover",
    "No-bar layer"
  ],
  "ftxm": [
    "6-mover",
    "No-bar layer"
  ],
  "ftxn": [
    "5-mover",
    "No-bar layer"
  ],
  "ftxo": [
    "5-mover",
    "No-bar layer"
  ],
  "fujo": [
    "6-mover",
    "No-bar layer"
  ],
  "fupm": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fupn": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fupo": [
    "5-mover",
    "No-bar layer"
  ],
  "fuqm": [
    "6-mover",
    "No-bar layer"
  ],
  "fuqn": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fuqo": [
    "5-mover",
    "No-bar layer"
  ],
  "furm": [
    "5-mover",
    "No-bar layer"
  ],
  "furn": [
    "5-mover",
    "No-bar layer"
  ],
  "furo": [
    "6-mover",
    "No-bar layer"
  ],
  "fuvm": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fuvn": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fuvo": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "fuwm": [
    "5-mover",
    "No-bar layer"
  ],
  "fuwn": [
    "5-mover",
    "No-bar layer"
  ],
  "fuwo": [
    "5-mover",
    "No-bar layer"
  ],
  "fuxm": [
    "5-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "fuxn": [
    "5-mover",
    "No-bar layer"
  ],
  "fuxo": [
    "5-mover",
    "No-bar layer"
  ],
  "mpsv": [
    "6-mover",
    "No-bar layer",
    "2 to diagadj layer",
    "2 to adjacent layer"
  ],
  "mpsw": [
    "5-mover",
    "No-bar layer"
  ],
  "mpsx": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "mptw": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "mptx": [
    "5-mover",
    "No-bar layer"
  ],
  "mpuw": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "mpux": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "mqsw": [
    "6-mover",
    "No-bar layer"
  ],
  "mqsx": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "mqtw": [
    "5-mover",
    "No-bar layer"
  ],
  "mqtx": [
    "5-mover",
    "No-bar layer"
  ],
  "mquw": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "mqux": [
    "6-mover",
    "No-bar layer"
  ],
  "mrsx": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "mrtw": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "mrtx": [
    "5-mover",
    "No-bar layer"
  ],
  "mruw": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "mrux": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "mvsp": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "mvsq": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "mvsr": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer",
    "2 to opposite layer"
  ],
  "mvtq": [
    "5-mover",
    "No-bar layer"
  ],
  "mvtr": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "mvuq": [
    "5-mover",
    "No-bar layer"
  ],
  "mvur": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "mwsq": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "mwsr": [
    "5-mover",
    "No-bar layer"
  ],
  "mwtq": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "mwtr": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "mwuq": [
    "5-mover",
    "No-bar layer"
  ],
  "mwur": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "mxsr": [
    "6-mover",
    "No-bar layer"
  ],
  "mxtq": [
    "5-mover",
    "No-bar layer"
  ],
  "mxtr": [
    "6-mover",
    "No-bar layer"
  ],
  "mxuq": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "mxur": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "nqtw": [
    "6-mover",
    "No-bar layer",
    "2 to adjacent layer",
    "2 to diagadj layer"
  ],
  "nqtx": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "nqux": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "nrtx": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "nrux": [
    "4-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "nwtq": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "nwtr": [
    "4-mover",
    "No-bar layer",
    "2 to opposite layer",
    "2 to adjacent layer"
  ],
  "nwur": [
    "5-mover",
    "No-bar layer",
    "2 to adjacent layer"
  ],
  "nxtr": [
    "6-mover",
    "No-bar layer"
  ],
  "nxur": [
    "6-mover",
    "No-bar layer",
    "2 to opposite layer"
  ],
  "orux": [
    "7-mover",
    "No-bar layer"
  ],
  "oxur": [
    "5-mover",
    "No-bar layer"
  ]
} as Record<LayerCase, Tag[]>;
