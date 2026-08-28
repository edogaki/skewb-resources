import type { LayerCase } from "#/utils/layers-catalog/layerCases.gen";

export const caseTags = [
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
  "No-bar layer"
] as const;

export type CaseTag = (typeof caseTags)[number];

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
    "Diagadj layer"
  ],
  "adin": [
    "5-mover",
    "Diagadj layer"
  ],
  "adio": [
    "5-mover",
    "Diagadj layer"
  ],
  "adis": [
    "4-mover",
    "Diagadj layer"
  ],
  "adit": [
    "4-mover",
    "Diagadj layer"
  ],
  "adiu": [
    "5-mover",
    "Diagadj layer"
  ],
  "adjg": [
    "6-mover",
    "Diagadj layer"
  ],
  "adjh": [
    "5-mover",
    "Diagadj layer"
  ],
  "adjm": [
    "5-mover",
    "Diagadj layer"
  ],
  "adjn": [
    "5-mover",
    "Diagadj layer"
  ],
  "adjo": [
    "5-mover",
    "Diagadj layer"
  ],
  "adjs": [
    "5-mover",
    "Diagadj layer"
  ],
  "adjt": [
    "5-mover",
    "Diagadj layer"
  ],
  "adju": [
    "5-mover",
    "Diagadj layer"
  ],
  "adpg": [
    "5-mover",
    "Diagadj layer"
  ],
  "adph": [
    "4-mover",
    "Diagadj layer"
  ],
  "adpm": [
    "5-mover",
    "Diagadj layer"
  ],
  "adpn": [
    "3-mover",
    "Diagadj layer"
  ],
  "adpo": [
    "6-mover",
    "Diagadj layer"
  ],
  "adps": [
    "5-mover",
    "Diagadj layer"
  ],
  "adpt": [
    "4-mover",
    "Diagadj layer"
  ],
  "adpu": [
    "5-mover",
    "Diagadj layer"
  ],
  "adqg": [
    "5-mover",
    "Diagadj layer"
  ],
  "adqh": [
    "4-mover",
    "Diagadj layer"
  ],
  "adqm": [
    "5-mover",
    "Diagadj layer"
  ],
  "adqn": [
    "4-mover",
    "Diagadj layer"
  ],
  "adqo": [
    "4-mover",
    "Diagadj layer"
  ],
  "adqs": [
    "5-mover",
    "Diagadj layer"
  ],
  "adqt": [
    "5-mover",
    "Diagadj layer"
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
    "Diagadj layer"
  ],
  "adrm": [
    "5-mover",
    "Diagadj layer"
  ],
  "adrn": [
    "5-mover",
    "Diagadj layer"
  ],
  "adro": [
    "6-mover",
    "Diagadj layer"
  ],
  "adrs": [
    "5-mover",
    "Diagadj layer"
  ],
  "adrt": [
    "5-mover",
    "Diagadj layer"
  ],
  "adru": [
    "4-mover",
    "Diagadj layer"
  ],
  "advg": [
    "5-mover",
    "Diagadj layer"
  ],
  "advh": [
    "5-mover",
    "Diagadj layer"
  ],
  "advm": [
    "4-mover",
    "Diagadj layer"
  ],
  "advn": [
    "4-mover",
    "Diagadj layer"
  ],
  "advo": [
    "5-mover",
    "Diagadj layer"
  ],
  "advs": [
    "4-mover",
    "Diagadj layer"
  ],
  "advt": [
    "3-mover",
    "Diagadj layer"
  ],
  "advu": [
    "5-mover",
    "Diagadj layer"
  ],
  "adwg": [
    "5-mover",
    "Diagadj layer"
  ],
  "adwh": [
    "5-mover",
    "Diagadj layer"
  ],
  "adwm": [
    "6-mover",
    "Diagadj layer"
  ],
  "adwn": [
    "4-mover",
    "Diagadj layer"
  ],
  "adwo": [
    "5-mover",
    "Diagadj layer"
  ],
  "adws": [
    "5-mover",
    "Diagadj layer"
  ],
  "adwt": [
    "5-mover",
    "Diagadj layer"
  ],
  "adwu": [
    "5-mover",
    "Diagadj layer"
  ],
  "adxg": [
    "5-mover",
    "Diagadj layer"
  ],
  "adxh": [
    "5-mover",
    "Diagadj layer"
  ],
  "adxm": [
    "5-mover",
    "Diagadj layer"
  ],
  "adxn": [
    "5-mover",
    "Diagadj layer"
  ],
  "adxo": [
    "5-mover",
    "Diagadj layer"
  ],
  "adxs": [
    "4-mover",
    "Diagadj layer"
  ],
  "adxt": [
    "6-mover",
    "Diagadj layer"
  ],
  "adxu": [
    "6-mover",
    "Diagadj layer"
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
    "6-mover"
  ],
  "agin": [
    "5-mover"
  ],
  "agio": [
    "5-mover"
  ],
  "agis": [
    "5-mover"
  ],
  "agit": [
    "5-mover"
  ],
  "agiu": [
    "5-mover"
  ],
  "agjk": [
    "6-mover"
  ],
  "agjl": [
    "6-mover"
  ],
  "agjm": [
    "5-mover"
  ],
  "agjn": [
    "5-mover"
  ],
  "agjo": [
    "6-mover"
  ],
  "agjs": [
    "6-mover"
  ],
  "agjt": [
    "6-mover"
  ],
  "agju": [
    "6-mover"
  ],
  "agpk": [
    "5-mover"
  ],
  "agpl": [
    "5-mover"
  ],
  "agpm": [
    "4-mover"
  ],
  "agpn": [
    "6-mover"
  ],
  "agpo": [
    "4-mover"
  ],
  "agps": [
    "5-mover"
  ],
  "agpt": [
    "5-mover"
  ],
  "agpu": [
    "5-mover"
  ],
  "agqk": [
    "5-mover"
  ],
  "agql": [
    "5-mover"
  ],
  "agqm": [
    "6-mover"
  ],
  "agqn": [
    "4-mover"
  ],
  "agqo": [
    "5-mover"
  ],
  "agqs": [
    "5-mover"
  ],
  "agqt": [
    "5-mover"
  ],
  "agqu": [
    "5-mover"
  ],
  "agrk": [
    "6-mover"
  ],
  "agrl": [
    "5-mover"
  ],
  "agrm": [
    "6-mover"
  ],
  "agrn": [
    "4-mover"
  ],
  "agro": [
    "4-mover"
  ],
  "agrs": [
    "4-mover"
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
    "5-mover"
  ],
  "agvm": [
    "5-mover"
  ],
  "agvn": [
    "5-mover"
  ],
  "agvo": [
    "4-mover"
  ],
  "agvs": [
    "6-mover"
  ],
  "agvt": [
    "5-mover"
  ],
  "agvu": [
    "5-mover"
  ],
  "agwk": [
    "5-mover"
  ],
  "agwl": [
    "5-mover"
  ],
  "agwm": [
    "4-mover"
  ],
  "agwn": [
    "5-mover"
  ],
  "agwo": [
    "4-mover"
  ],
  "agws": [
    "5-mover"
  ],
  "agwt": [
    "5-mover"
  ],
  "agwu": [
    "4-mover"
  ],
  "agxk": [
    "5-mover"
  ],
  "agxl": [
    "5-mover"
  ],
  "agxm": [
    "6-mover"
  ],
  "agxn": [
    "5-mover"
  ],
  "agxo": [
    "5-mover"
  ],
  "agxs": [
    "5-mover"
  ],
  "agxt": [
    "5-mover"
  ],
  "agxu": [
    "5-mover"
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
    "6-mover"
  ],
  "ahim": [
    "6-mover"
  ],
  "ahin": [
    "6-mover"
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
    "5-mover"
  ],
  "ahjk": [
    "6-mover"
  ],
  "ahjl": [
    "6-mover"
  ],
  "ahjm": [
    "6-mover"
  ],
  "ahjn": [
    "5-mover"
  ],
  "ahjo": [
    "5-mover"
  ],
  "ahjs": [
    "5-mover"
  ],
  "ahjt": [
    "5-mover"
  ],
  "ahju": [
    "5-mover"
  ],
  "ahpk": [
    "5-mover"
  ],
  "ahpl": [
    "5-mover"
  ],
  "ahpm": [
    "5-mover"
  ],
  "ahpn": [
    "5-mover"
  ],
  "ahpo": [
    "5-mover"
  ],
  "ahps": [
    "5-mover"
  ],
  "ahpt": [
    "4-mover"
  ],
  "ahpu": [
    "6-mover"
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
    "5-mover"
  ],
  "ahqo": [
    "4-mover"
  ],
  "ahqs": [
    "5-mover"
  ],
  "ahqt": [
    "5-mover"
  ],
  "ahqu": [
    "4-mover"
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
    "5-mover"
  ],
  "ahro": [
    "5-mover"
  ],
  "ahrs": [
    "5-mover"
  ],
  "ahrt": [
    "5-mover"
  ],
  "ahru": [
    "4-mover"
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
    "5-mover"
  ],
  "ahvo": [
    "5-mover"
  ],
  "ahvs": [
    "4-mover"
  ],
  "ahvt": [
    "4-mover"
  ],
  "ahvu": [
    "5-mover"
  ],
  "ahwk": [
    "5-mover"
  ],
  "ahwl": [
    "5-mover"
  ],
  "ahwm": [
    "5-mover"
  ],
  "ahwn": [
    "4-mover"
  ],
  "ahwo": [
    "5-mover"
  ],
  "ahws": [
    "4-mover"
  ],
  "ahwt": [
    "5-mover"
  ],
  "ahwu": [
    "5-mover"
  ],
  "ahxk": [
    "5-mover"
  ],
  "ahxl": [
    "6-mover"
  ],
  "ahxm": [
    "5-mover"
  ],
  "ahxn": [
    "4-mover"
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
    "4-mover"
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
    "5-mover"
  ],
  "akih": [
    "5-mover"
  ],
  "akim": [
    "5-mover"
  ],
  "akin": [
    "5-mover"
  ],
  "akio": [
    "5-mover"
  ],
  "akis": [
    "4-mover"
  ],
  "akit": [
    "4-mover"
  ],
  "akiu": [
    "4-mover"
  ],
  "akjg": [
    "5-mover"
  ],
  "akjh": [
    "5-mover"
  ],
  "akjm": [
    "5-mover"
  ],
  "akjn": [
    "4-mover"
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
    "5-mover"
  ],
  "akpg": [
    "4-mover"
  ],
  "akph": [
    "5-mover"
  ],
  "akpm": [
    "4-mover"
  ],
  "akpn": [
    "4-mover"
  ],
  "akpo": [
    "4-mover"
  ],
  "akps": [
    "3-mover"
  ],
  "akpt": [
    "6-mover"
  ],
  "akpu": [
    "3-mover"
  ],
  "akqg": [
    "4-mover"
  ],
  "akqh": [
    "5-mover"
  ],
  "akqm": [
    "5-mover"
  ],
  "akqn": [
    "4-mover"
  ],
  "akqo": [
    "4-mover"
  ],
  "akqs": [
    "5-mover"
  ],
  "akqt": [
    "5-mover"
  ],
  "akqu": [
    "5-mover"
  ],
  "akrg": [
    "4-mover"
  ],
  "akrh": [
    "4-mover"
  ],
  "akrm": [
    "4-mover"
  ],
  "akrn": [
    "5-mover"
  ],
  "akro": [
    "5-mover"
  ],
  "akrs": [
    "3-mover"
  ],
  "akrt": [
    "4-mover"
  ],
  "akru": [
    "5-mover"
  ],
  "akvg": [
    "4-mover"
  ],
  "akvh": [
    "5-mover"
  ],
  "akvm": [
    "4-mover"
  ],
  "akvn": [
    "4-mover"
  ],
  "akvo": [
    "4-mover"
  ],
  "akvs": [
    "3-mover"
  ],
  "akvt": [
    "5-mover"
  ],
  "akvu": [
    "4-mover"
  ],
  "akwg": [
    "4-mover"
  ],
  "akwh": [
    "5-mover"
  ],
  "akwm": [
    "4-mover"
  ],
  "akwn": [
    "5-mover"
  ],
  "akwo": [
    "4-mover"
  ],
  "akws": [
    "5-mover"
  ],
  "akwt": [
    "3-mover"
  ],
  "akwu": [
    "4-mover"
  ],
  "akxg": [
    "4-mover"
  ],
  "akxh": [
    "4-mover"
  ],
  "akxm": [
    "5-mover"
  ],
  "akxn": [
    "3-mover"
  ],
  "akxo": [
    "5-mover"
  ],
  "akxs": [
    "4-mover"
  ],
  "akxt": [
    "4-mover"
  ],
  "akxu": [
    "4-mover"
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
    "6-mover"
  ],
  "alih": [
    "5-mover"
  ],
  "alim": [
    "5-mover"
  ],
  "alin": [
    "5-mover"
  ],
  "alio": [
    "5-mover"
  ],
  "alis": [
    "5-mover"
  ],
  "alit": [
    "6-mover"
  ],
  "aliu": [
    "6-mover"
  ],
  "aljg": [
    "6-mover"
  ],
  "aljh": [
    "5-mover"
  ],
  "aljm": [
    "6-mover"
  ],
  "aljn": [
    "4-mover"
  ],
  "aljo": [
    "5-mover"
  ],
  "aljs": [
    "5-mover"
  ],
  "aljt": [
    "5-mover"
  ],
  "alju": [
    "5-mover"
  ],
  "alpg": [
    "5-mover"
  ],
  "alph": [
    "4-mover"
  ],
  "alpm": [
    "4-mover"
  ],
  "alpn": [
    "3-mover"
  ],
  "alpo": [
    "6-mover"
  ],
  "alps": [
    "4-mover"
  ],
  "alpt": [
    "4-mover"
  ],
  "alpu": [
    "4-mover"
  ],
  "alqg": [
    "5-mover"
  ],
  "alqh": [
    "4-mover"
  ],
  "alqm": [
    "5-mover"
  ],
  "alqn": [
    "3-mover"
  ],
  "alqo": [
    "5-mover"
  ],
  "alqs": [
    "4-mover"
  ],
  "alqt": [
    "4-mover"
  ],
  "alqu": [
    "5-mover"
  ],
  "alrg": [
    "5-mover"
  ],
  "alrh": [
    "4-mover"
  ],
  "alrm": [
    "5-mover"
  ],
  "alrn": [
    "4-mover"
  ],
  "alro": [
    "5-mover"
  ],
  "alrs": [
    "5-mover"
  ],
  "alrt": [
    "5-mover"
  ],
  "alru": [
    "4-mover"
  ],
  "alvg": [
    "5-mover"
  ],
  "alvh": [
    "4-mover"
  ],
  "alvm": [
    "6-mover"
  ],
  "alvn": [
    "5-mover"
  ],
  "alvo": [
    "4-mover"
  ],
  "alvs": [
    "5-mover"
  ],
  "alvt": [
    "5-mover"
  ],
  "alvu": [
    "5-mover"
  ],
  "alwg": [
    "5-mover"
  ],
  "alwh": [
    "4-mover"
  ],
  "alwm": [
    "5-mover"
  ],
  "alwn": [
    "3-mover"
  ],
  "alwo": [
    "5-mover"
  ],
  "alws": [
    "4-mover"
  ],
  "alwt": [
    "4-mover"
  ],
  "alwu": [
    "4-mover"
  ],
  "alxg": [
    "5-mover"
  ],
  "alxh": [
    "4-mover"
  ],
  "alxm": [
    "6-mover"
  ],
  "alxn": [
    "3-mover"
  ],
  "alxo": [
    "5-mover"
  ],
  "alxs": [
    "5-mover"
  ],
  "alxt": [
    "5-mover"
  ],
  "alxu": [
    "4-mover"
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
    "4-mover"
  ],
  "amih": [
    "4-mover"
  ],
  "amik": [
    "5-mover"
  ],
  "amil": [
    "5-mover"
  ],
  "amis": [
    "4-mover"
  ],
  "amit": [
    "5-mover"
  ],
  "amiu": [
    "4-mover"
  ],
  "amjg": [
    "5-mover"
  ],
  "amjh": [
    "5-mover"
  ],
  "amjk": [
    "6-mover"
  ],
  "amjl": [
    "5-mover"
  ],
  "amjs": [
    "4-mover"
  ],
  "amjt": [
    "4-mover"
  ],
  "amju": [
    "4-mover"
  ],
  "ampg": [
    "3-mover"
  ],
  "amph": [
    "5-mover"
  ],
  "ampk": [
    "4-mover"
  ],
  "ampl": [
    "5-mover"
  ],
  "amps": [
    "4-mover"
  ],
  "ampt": [
    "3-mover"
  ],
  "ampu": [
    "4-mover"
  ],
  "amqg": [
    "5-mover"
  ],
  "amqh": [
    "4-mover"
  ],
  "amqk": [
    "5-mover"
  ],
  "amql": [
    "5-mover"
  ],
  "amqs": [
    "4-mover"
  ],
  "amqt": [
    "4-mover"
  ],
  "amqu": [
    "5-mover"
  ],
  "amrg": [
    "3-mover"
  ],
  "amrh": [
    "3-mover"
  ],
  "amrk": [
    "4-mover"
  ],
  "amrl": [
    "5-mover"
  ],
  "amrs": [
    "5-mover"
  ],
  "amrt": [
    "4-mover"
  ],
  "amru": [
    "3-mover"
  ],
  "amvg": [
    "3-mover"
  ],
  "amvh": [
    "4-mover"
  ],
  "amvk": [
    "5-mover"
  ],
  "amvl": [
    "4-mover"
  ],
  "amvs": [
    "3-mover"
  ],
  "amvt": [
    "4-mover"
  ],
  "amvu": [
    "6-mover"
  ],
  "amwg": [
    "3-mover"
  ],
  "amwh": [
    "4-mover"
  ],
  "amwk": [
    "5-mover"
  ],
  "amwl": [
    "6-mover"
  ],
  "amws": [
    "3-mover"
  ],
  "amwt": [
    "5-mover"
  ],
  "amwu": [
    "3-mover"
  ],
  "amxg": [
    "4-mover"
  ],
  "amxh": [
    "5-mover"
  ],
  "amxk": [
    "5-mover"
  ],
  "amxl": [
    "4-mover"
  ],
  "amxs": [
    "5-mover"
  ],
  "amxt": [
    "5-mover"
  ],
  "amxu": [
    "3-mover"
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
    "6-mover"
  ],
  "anih": [
    "5-mover"
  ],
  "anik": [
    "6-mover"
  ],
  "anil": [
    "5-mover"
  ],
  "anis": [
    "5-mover"
  ],
  "anit": [
    "5-mover"
  ],
  "aniu": [
    "6-mover"
  ],
  "anjg": [
    "5-mover"
  ],
  "anjh": [
    "5-mover"
  ],
  "anjk": [
    "6-mover"
  ],
  "anjl": [
    "6-mover"
  ],
  "anjs": [
    "6-mover"
  ],
  "anjt": [
    "6-mover"
  ],
  "anju": [
    "5-mover"
  ],
  "anpg": [
    "5-mover"
  ],
  "anph": [
    "4-mover"
  ],
  "anpk": [
    "5-mover"
  ],
  "anpl": [
    "4-mover"
  ],
  "anps": [
    "3-mover"
  ],
  "anpt": [
    "5-mover"
  ],
  "anpu": [
    "5-mover"
  ],
  "anqg": [
    "6-mover"
  ],
  "anqh": [
    "4-mover"
  ],
  "anqk": [
    "5-mover"
  ],
  "anql": [
    "5-mover"
  ],
  "anqs": [
    "5-mover"
  ],
  "anqt": [
    "5-mover"
  ],
  "anqu": [
    "5-mover"
  ],
  "anrg": [
    "6-mover"
  ],
  "anrh": [
    "5-mover"
  ],
  "anrk": [
    "5-mover"
  ],
  "anrl": [
    "6-mover"
  ],
  "anrs": [
    "6-mover"
  ],
  "anrt": [
    "5-mover"
  ],
  "anru": [
    "5-mover"
  ],
  "anvg": [
    "5-mover"
  ],
  "anvh": [
    "5-mover"
  ],
  "anvk": [
    "5-mover"
  ],
  "anvl": [
    "6-mover"
  ],
  "anvs": [
    "6-mover"
  ],
  "anvt": [
    "4-mover"
  ],
  "anvu": [
    "5-mover"
  ],
  "anwg": [
    "4-mover"
  ],
  "anwh": [
    "4-mover"
  ],
  "anwk": [
    "5-mover"
  ],
  "anwl": [
    "4-mover"
  ],
  "anws": [
    "4-mover"
  ],
  "anwt": [
    "5-mover"
  ],
  "anwu": [
    "4-mover"
  ],
  "anxg": [
    "5-mover"
  ],
  "anxh": [
    "4-mover"
  ],
  "anxk": [
    "5-mover"
  ],
  "anxl": [
    "6-mover"
  ],
  "anxs": [
    "5-mover"
  ],
  "anxt": [
    "5-mover"
  ],
  "anxu": [
    "5-mover"
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
    "5-mover"
  ],
  "aoit": [
    "5-mover"
  ],
  "aoiu": [
    "4-mover"
  ],
  "aojg": [
    "5-mover"
  ],
  "aojh": [
    "5-mover"
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
    "4-mover"
  ],
  "aoju": [
    "5-mover"
  ],
  "aopg": [
    "5-mover"
  ],
  "aoph": [
    "4-mover"
  ],
  "aopk": [
    "5-mover"
  ],
  "aopl": [
    "4-mover"
  ],
  "aops": [
    "4-mover"
  ],
  "aopt": [
    "6-mover"
  ],
  "aopu": [
    "3-mover"
  ],
  "aoqg": [
    "4-mover"
  ],
  "aoqh": [
    "4-mover"
  ],
  "aoqk": [
    "5-mover"
  ],
  "aoql": [
    "4-mover"
  ],
  "aoqs": [
    "3-mover"
  ],
  "aoqt": [
    "5-mover"
  ],
  "aoqu": [
    "4-mover"
  ],
  "aorg": [
    "5-mover"
  ],
  "aorh": [
    "5-mover"
  ],
  "aork": [
    "5-mover"
  ],
  "aorl": [
    "5-mover"
  ],
  "aors": [
    "4-mover"
  ],
  "aort": [
    "4-mover"
  ],
  "aoru": [
    "6-mover"
  ],
  "aovg": [
    "5-mover"
  ],
  "aovh": [
    "4-mover"
  ],
  "aovk": [
    "4-mover"
  ],
  "aovl": [
    "5-mover"
  ],
  "aovs": [
    "3-mover"
  ],
  "aovt": [
    "6-mover"
  ],
  "aovu": [
    "5-mover"
  ],
  "aowg": [
    "6-mover"
  ],
  "aowh": [
    "4-mover"
  ],
  "aowk": [
    "5-mover"
  ],
  "aowl": [
    "4-mover"
  ],
  "aows": [
    "5-mover"
  ],
  "aowt": [
    "3-mover"
  ],
  "aowu": [
    "5-mover"
  ],
  "aoxg": [
    "5-mover"
  ],
  "aoxh": [
    "5-mover"
  ],
  "aoxk": [
    "5-mover"
  ],
  "aoxl": [
    "4-mover"
  ],
  "aoxs": [
    "4-mover"
  ],
  "aoxt": [
    "5-mover"
  ],
  "aoxu": [
    "4-mover"
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
    "5-mover"
  ],
  "asih": [
    "5-mover"
  ],
  "asik": [
    "5-mover"
  ],
  "asil": [
    "6-mover"
  ],
  "asim": [
    "6-mover"
  ],
  "asin": [
    "4-mover"
  ],
  "asio": [
    "4-mover"
  ],
  "asjg": [
    "6-mover"
  ],
  "asjh": [
    "4-mover"
  ],
  "asjk": [
    "5-mover"
  ],
  "asjl": [
    "5-mover"
  ],
  "asjm": [
    "5-mover"
  ],
  "asjn": [
    "5-mover"
  ],
  "asjo": [
    "5-mover"
  ],
  "aspg": [
    "4-mover"
  ],
  "asph": [
    "3-mover"
  ],
  "aspk": [
    "5-mover"
  ],
  "aspl": [
    "5-mover"
  ],
  "aspm": [
    "5-mover"
  ],
  "aspn": [
    "5-mover"
  ],
  "aspo": [
    "3-mover"
  ],
  "asqg": [
    "5-mover"
  ],
  "asqh": [
    "5-mover"
  ],
  "asqk": [
    "4-mover"
  ],
  "asql": [
    "5-mover"
  ],
  "asqm": [
    "4-mover"
  ],
  "asqn": [
    "4-mover"
  ],
  "asqo": [
    "6-mover"
  ],
  "asrg": [
    "5-mover"
  ],
  "asrh": [
    "4-mover"
  ],
  "asrk": [
    "5-mover"
  ],
  "asrl": [
    "5-mover"
  ],
  "asrm": [
    "5-mover"
  ],
  "asrn": [
    "5-mover"
  ],
  "asro": [
    "5-mover"
  ],
  "asvg": [
    "4-mover"
  ],
  "asvh": [
    "5-mover"
  ],
  "asvk": [
    "5-mover"
  ],
  "asvl": [
    "5-mover"
  ],
  "asvm": [
    "5-mover"
  ],
  "asvn": [
    "4-mover"
  ],
  "asvo": [
    "5-mover"
  ],
  "aswg": [
    "4-mover"
  ],
  "aswh": [
    "6-mover"
  ],
  "aswk": [
    "4-mover"
  ],
  "aswl": [
    "5-mover"
  ],
  "aswm": [
    "5-mover"
  ],
  "aswn": [
    "3-mover"
  ],
  "aswo": [
    "6-mover"
  ],
  "asxg": [
    "5-mover"
  ],
  "asxh": [
    "4-mover"
  ],
  "asxk": [
    "5-mover"
  ],
  "asxl": [
    "5-mover"
  ],
  "asxm": [
    "5-mover"
  ],
  "asxn": [
    "4-mover"
  ],
  "asxo": [
    "4-mover"
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
    "5-mover"
  ],
  "atih": [
    "5-mover"
  ],
  "atik": [
    "5-mover"
  ],
  "atil": [
    "6-mover"
  ],
  "atim": [
    "6-mover"
  ],
  "atin": [
    "4-mover"
  ],
  "atio": [
    "5-mover"
  ],
  "atjg": [
    "5-mover"
  ],
  "atjh": [
    "4-mover"
  ],
  "atjk": [
    "5-mover"
  ],
  "atjl": [
    "5-mover"
  ],
  "atjm": [
    "5-mover"
  ],
  "atjn": [
    "4-mover"
  ],
  "atjo": [
    "5-mover"
  ],
  "atpg": [
    "4-mover"
  ],
  "atph": [
    "5-mover"
  ],
  "atpk": [
    "4-mover"
  ],
  "atpl": [
    "5-mover"
  ],
  "atpm": [
    "4-mover"
  ],
  "atpn": [
    "3-mover"
  ],
  "atpo": [
    "5-mover"
  ],
  "atqg": [
    "5-mover"
  ],
  "atqh": [
    "3-mover"
  ],
  "atqk": [
    "4-mover"
  ],
  "atql": [
    "6-mover"
  ],
  "atqm": [
    "6-mover"
  ],
  "atqn": [
    "3-mover"
  ],
  "atqo": [
    "3-mover"
  ],
  "atrg": [
    "5-mover"
  ],
  "atrh": [
    "4-mover"
  ],
  "atrk": [
    "5-mover"
  ],
  "atrl": [
    "5-mover"
  ],
  "atrm": [
    "5-mover"
  ],
  "atrn": [
    "5-mover"
  ],
  "atro": [
    "4-mover"
  ],
  "atvg": [
    "4-mover"
  ],
  "atvh": [
    "5-mover"
  ],
  "atvk": [
    "5-mover"
  ],
  "atvl": [
    "5-mover"
  ],
  "atvm": [
    "5-mover"
  ],
  "atvn": [
    "4-mover"
  ],
  "atvo": [
    "3-mover"
  ],
  "atwg": [
    "4-mover"
  ],
  "atwh": [
    "3-mover"
  ],
  "atwk": [
    "5-mover"
  ],
  "atwl": [
    "5-mover"
  ],
  "atwm": [
    "3-mover"
  ],
  "atwn": [
    "4-mover"
  ],
  "atwo": [
    "4-mover"
  ],
  "atxg": [
    "5-mover"
  ],
  "atxh": [
    "3-mover"
  ],
  "atxk": [
    "5-mover"
  ],
  "atxl": [
    "4-mover"
  ],
  "atxm": [
    "6-mover"
  ],
  "atxn": [
    "5-mover"
  ],
  "atxo": [
    "4-mover"
  ],
  "auco": [
    "5-mover",
    "Opposite layer"
  ],
  "auig": [
    "5-mover"
  ],
  "auih": [
    "5-mover"
  ],
  "auik": [
    "5-mover"
  ],
  "auil": [
    "6-mover"
  ],
  "auim": [
    "5-mover"
  ],
  "auin": [
    "4-mover"
  ],
  "auio": [
    "5-mover"
  ],
  "aujg": [
    "6-mover"
  ],
  "aujh": [
    "4-mover"
  ],
  "aujk": [
    "5-mover"
  ],
  "aujl": [
    "5-mover"
  ],
  "aujm": [
    "6-mover"
  ],
  "aujn": [
    "4-mover"
  ],
  "aujo": [
    "4-mover"
  ],
  "aupg": [
    "4-mover"
  ],
  "auph": [
    "4-mover"
  ],
  "aupk": [
    "5-mover"
  ],
  "aupl": [
    "4-mover"
  ],
  "aupm": [
    "4-mover"
  ],
  "aupn": [
    "3-mover"
  ],
  "aupo": [
    "5-mover"
  ],
  "auqg": [
    "5-mover"
  ],
  "auqh": [
    "4-mover"
  ],
  "auqk": [
    "5-mover"
  ],
  "auql": [
    "5-mover"
  ],
  "auqm": [
    "5-mover"
  ],
  "auqn": [
    "6-mover"
  ],
  "auqo": [
    "5-mover"
  ],
  "aurg": [
    "4-mover"
  ],
  "aurh": [
    "4-mover"
  ],
  "aurk": [
    "4-mover"
  ],
  "aurl": [
    "5-mover"
  ],
  "aurm": [
    "5-mover"
  ],
  "aurn": [
    "3-mover"
  ],
  "auro": [
    "4-mover"
  ],
  "auvg": [
    "5-mover"
  ],
  "auvh": [
    "5-mover"
  ],
  "auvk": [
    "4-mover"
  ],
  "auvl": [
    "5-mover"
  ],
  "auvm": [
    "5-mover"
  ],
  "auvn": [
    "5-mover"
  ],
  "auvo": [
    "4-mover"
  ],
  "auwg": [
    "4-mover"
  ],
  "auwh": [
    "3-mover"
  ],
  "auwk": [
    "6-mover"
  ],
  "auwl": [
    "5-mover"
  ],
  "auwm": [
    "5-mover"
  ],
  "auwn": [
    "4-mover"
  ],
  "auwo": [
    "3-mover"
  ],
  "auxg": [
    "4-mover"
  ],
  "auxh": [
    "5-mover"
  ],
  "auxk": [
    "4-mover"
  ],
  "auxl": [
    "5-mover"
  ],
  "auxm": [
    "5-mover"
  ],
  "auxn": [
    "3-mover"
  ],
  "auxo": [
    "6-mover"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "egpn": [
    "6-mover",
    "No-bar layer"
  ],
  "egpo": [
    "6-mover",
    "No-bar layer"
  ],
  "egps": [
    "6-mover",
    "No-bar layer"
  ],
  "egpt": [
    "6-mover",
    "No-bar layer"
  ],
  "egpu": [
    "6-mover",
    "No-bar layer"
  ],
  "egql": [
    "6-mover",
    "No-bar layer"
  ],
  "egqm": [
    "5-mover",
    "No-bar layer"
  ],
  "egqn": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "egvn": [
    "6-mover",
    "No-bar layer"
  ],
  "egvo": [
    "4-mover",
    "No-bar layer"
  ],
  "egvs": [
    "5-mover",
    "No-bar layer"
  ],
  "egvt": [
    "5-mover",
    "No-bar layer"
  ],
  "egvu": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "ehvm": [
    "4-mover",
    "No-bar layer"
  ],
  "ehvn": [
    "5-mover",
    "No-bar layer"
  ],
  "ehvo": [
    "5-mover",
    "No-bar layer"
  ],
  "ehvs": [
    "4-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "ekpn": [
    "6-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "ekru": [
    "6-mover",
    "No-bar layer"
  ],
  "ekvh": [
    "6-mover",
    "No-bar layer"
  ],
  "ekvm": [
    "5-mover",
    "No-bar layer"
  ],
  "ekvn": [
    "6-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "ekwo": [
    "6-mover",
    "No-bar layer"
  ],
  "ekws": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "elpn": [
    "6-mover",
    "No-bar layer"
  ],
  "elpo": [
    "6-mover",
    "No-bar layer"
  ],
  "elps": [
    "5-mover",
    "No-bar layer"
  ],
  "elpt": [
    "6-mover",
    "No-bar layer"
  ],
  "elpu": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "elvo": [
    "6-mover",
    "No-bar layer"
  ],
  "elvs": [
    "5-mover",
    "No-bar layer"
  ],
  "elvt": [
    "6-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "emph": [
    "6-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "emqt": [
    "5-mover",
    "No-bar layer"
  ],
  "emqu": [
    "6-mover",
    "No-bar layer"
  ],
  "emrh": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "emvl": [
    "4-mover",
    "No-bar layer"
  ],
  "emvs": [
    "6-mover",
    "No-bar layer"
  ],
  "emvt": [
    "4-mover",
    "No-bar layer"
  ],
  "emvu": [
    "4-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "enql": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "envt": [
    "4-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "enws": [
    "5-mover",
    "No-bar layer"
  ],
  "enwt": [
    "4-mover",
    "No-bar layer"
  ],
  "enwu": [
    "4-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "eopu": [
    "5-mover",
    "No-bar layer"
  ],
  "eoqh": [
    "5-mover",
    "No-bar layer"
  ],
  "eoql": [
    "4-mover",
    "No-bar layer"
  ],
  "eoqs": [
    "5-mover",
    "No-bar layer"
  ],
  "eoqt": [
    "5-mover",
    "No-bar layer"
  ],
  "eoqu": [
    "4-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "eoru": [
    "5-mover",
    "No-bar layer"
  ],
  "eovh": [
    "6-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "espn": [
    "5-mover",
    "No-bar layer"
  ],
  "espo": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "esqo": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "esvl": [
    "5-mover",
    "No-bar layer"
  ],
  "esvm": [
    "4-mover",
    "No-bar layer"
  ],
  "esvn": [
    "5-mover",
    "No-bar layer"
  ],
  "esvo": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "esxm": [
    "5-mover",
    "No-bar layer"
  ],
  "esxn": [
    "4-mover",
    "No-bar layer"
  ],
  "esxo": [
    "4-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "etpo": [
    "6-mover",
    "No-bar layer"
  ],
  "etqh": [
    "6-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "etqo": [
    "5-mover",
    "No-bar layer"
  ],
  "etrh": [
    "6-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "etro": [
    "5-mover",
    "No-bar layer"
  ],
  "etvh": [
    "5-mover",
    "No-bar layer"
  ],
  "etvl": [
    "5-mover",
    "No-bar layer"
  ],
  "etvm": [
    "4-mover",
    "No-bar layer"
  ],
  "etvn": [
    "5-mover",
    "No-bar layer"
  ],
  "etvo": [
    "4-mover",
    "No-bar layer"
  ],
  "etwh": [
    "6-mover",
    "No-bar layer"
  ],
  "etwl": [
    "5-mover",
    "No-bar layer"
  ],
  "etwm": [
    "5-mover",
    "No-bar layer"
  ],
  "etwn": [
    "6-mover",
    "No-bar layer"
  ],
  "etwo": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "euqn": [
    "4-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "euvn": [
    "4-mover",
    "No-bar layer"
  ],
  "euvo": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "euwn": [
    "5-mover",
    "No-bar layer"
  ],
  "euwo": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "fhju": [
    "5-mover",
    "No-bar layer"
  ],
  "fhpm": [
    "5-mover",
    "No-bar layer"
  ],
  "fhpn": [
    "6-mover",
    "No-bar layer"
  ],
  "fhpo": [
    "5-mover",
    "No-bar layer"
  ],
  "fhps": [
    "6-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "fhqn": [
    "5-mover",
    "No-bar layer"
  ],
  "fhqo": [
    "5-mover",
    "No-bar layer"
  ],
  "fhqs": [
    "6-mover",
    "No-bar layer"
  ],
  "fhqt": [
    "4-mover",
    "No-bar layer"
  ],
  "fhqu": [
    "4-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "fhru": [
    "6-mover",
    "No-bar layer"
  ],
  "fhvm": [
    "6-mover",
    "No-bar layer"
  ],
  "fhvn": [
    "6-mover",
    "No-bar layer"
  ],
  "fhvo": [
    "4-mover",
    "No-bar layer"
  ],
  "fhvs": [
    "5-mover",
    "No-bar layer"
  ],
  "fhvt": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "flpo": [
    "5-mover",
    "No-bar layer"
  ],
  "flps": [
    "6-mover",
    "No-bar layer"
  ],
  "flpt": [
    "6-mover",
    "No-bar layer"
  ],
  "flpu": [
    "6-mover",
    "No-bar layer"
  ],
  "flqm": [
    "5-mover",
    "No-bar layer"
  ],
  "flqn": [
    "5-mover",
    "No-bar layer"
  ],
  "flqo": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "flvn": [
    "6-mover",
    "No-bar layer"
  ],
  "flvo": [
    "6-mover",
    "No-bar layer"
  ],
  "flvs": [
    "6-mover",
    "No-bar layer"
  ],
  "flvt": [
    "6-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "fmrs": [
    "5-mover",
    "No-bar layer"
  ],
  "fmrt": [
    "4-mover",
    "No-bar layer"
  ],
  "fmru": [
    "6-mover",
    "No-bar layer"
  ],
  "fmvs": [
    "5-mover",
    "No-bar layer"
  ],
  "fmvt": [
    "5-mover",
    "No-bar layer"
  ],
  "fmvu": [
    "4-mover",
    "No-bar layer"
  ],
  "fmws": [
    "5-mover",
    "No-bar layer"
  ],
  "fmwt": [
    "5-mover",
    "No-bar layer"
  ],
  "fmwu": [
    "5-mover",
    "No-bar layer"
  ],
  "fmxs": [
    "6-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "fnps": [
    "5-mover",
    "No-bar layer"
  ],
  "fnpt": [
    "5-mover",
    "No-bar layer"
  ],
  "fnpu": [
    "4-mover",
    "No-bar layer"
  ],
  "fnqs": [
    "4-mover",
    "No-bar layer"
  ],
  "fnqt": [
    "4-mover",
    "No-bar layer"
  ],
  "fnqu": [
    "6-mover",
    "No-bar layer"
  ],
  "fnrs": [
    "5-mover",
    "No-bar layer"
  ],
  "fnrt": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "fnws": [
    "5-mover",
    "No-bar layer"
  ],
  "fnwt": [
    "4-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "foju": [
    "6-mover",
    "No-bar layer"
  ],
  "fops": [
    "5-mover",
    "No-bar layer"
  ],
  "fopt": [
    "6-mover",
    "No-bar layer"
  ],
  "fopu": [
    "5-mover",
    "No-bar layer"
  ],
  "foqs": [
    "4-mover",
    "No-bar layer"
  ],
  "foqt": [
    "5-mover",
    "No-bar layer"
  ],
  "foqu": [
    "5-mover",
    "No-bar layer"
  ],
  "fors": [
    "6-mover",
    "No-bar layer"
  ],
  "fort": [
    "4-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "fovu": [
    "6-mover",
    "No-bar layer"
  ],
  "fows": [
    "6-mover",
    "No-bar layer"
  ],
  "fowt": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "fspm": [
    "4-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "fsqn": [
    "4-mover",
    "No-bar layer"
  ],
  "fsqo": [
    "4-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "fsvm": [
    "5-mover",
    "No-bar layer"
  ],
  "fsvn": [
    "5-mover",
    "No-bar layer"
  ],
  "fsvo": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "ftqm": [
    "4-mover",
    "No-bar layer"
  ],
  "ftqn": [
    "6-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "ftvo": [
    "5-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "fupn": [
    "6-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "fuvn": [
    "6-mover",
    "No-bar layer"
  ],
  "fuvo": [
    "4-mover",
    "No-bar layer"
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
    "No-bar layer"
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
    "No-bar layer"
  ],
  "mpsw": [
    "5-mover",
    "No-bar layer"
  ],
  "mpsx": [
    "5-mover",
    "No-bar layer"
  ],
  "mptw": [
    "4-mover",
    "No-bar layer"
  ],
  "mptx": [
    "5-mover",
    "No-bar layer"
  ],
  "mpuw": [
    "4-mover",
    "No-bar layer"
  ],
  "mpux": [
    "4-mover",
    "No-bar layer"
  ],
  "mqsw": [
    "6-mover",
    "No-bar layer"
  ],
  "mqsx": [
    "4-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "mqux": [
    "6-mover",
    "No-bar layer"
  ],
  "mrsx": [
    "4-mover",
    "No-bar layer"
  ],
  "mrtw": [
    "4-mover",
    "No-bar layer"
  ],
  "mrtx": [
    "5-mover",
    "No-bar layer"
  ],
  "mruw": [
    "6-mover",
    "No-bar layer"
  ],
  "mrux": [
    "4-mover",
    "No-bar layer"
  ],
  "mvsp": [
    "5-mover",
    "No-bar layer"
  ],
  "mvsq": [
    "4-mover",
    "No-bar layer"
  ],
  "mvsr": [
    "4-mover",
    "No-bar layer"
  ],
  "mvtq": [
    "5-mover",
    "No-bar layer"
  ],
  "mvtr": [
    "5-mover",
    "No-bar layer"
  ],
  "mvuq": [
    "5-mover",
    "No-bar layer"
  ],
  "mvur": [
    "5-mover",
    "No-bar layer"
  ],
  "mwsq": [
    "5-mover",
    "No-bar layer"
  ],
  "mwsr": [
    "5-mover",
    "No-bar layer"
  ],
  "mwtq": [
    "4-mover",
    "No-bar layer"
  ],
  "mwtr": [
    "5-mover",
    "No-bar layer"
  ],
  "mwuq": [
    "5-mover",
    "No-bar layer"
  ],
  "mwur": [
    "4-mover",
    "No-bar layer"
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
    "No-bar layer"
  ],
  "mxur": [
    "6-mover",
    "No-bar layer"
  ],
  "nqtw": [
    "6-mover",
    "No-bar layer"
  ],
  "nqtx": [
    "5-mover",
    "No-bar layer"
  ],
  "nqux": [
    "4-mover",
    "No-bar layer"
  ],
  "nrtx": [
    "4-mover",
    "No-bar layer"
  ],
  "nrux": [
    "4-mover",
    "No-bar layer"
  ],
  "nwtq": [
    "5-mover",
    "No-bar layer"
  ],
  "nwtr": [
    "4-mover",
    "No-bar layer"
  ],
  "nwur": [
    "5-mover",
    "No-bar layer"
  ],
  "nxtr": [
    "6-mover",
    "No-bar layer"
  ],
  "nxur": [
    "6-mover",
    "No-bar layer"
  ],
  "orux": [
    "7-mover",
    "No-bar layer"
  ],
  "oxur": [
    "5-mover",
    "No-bar layer"
  ]
} as Record<LayerCase, CaseTag[]>;
