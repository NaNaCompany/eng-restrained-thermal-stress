export const tool = {
  "id": "E035",
  "title": "완전 구속 열응력 계산기",
  "inputs_text": "영률 E [Pa], 선팽창계수 α [1/K], 온도 변화 ΔT [K]",
  "formula": "σ = −E α ΔT",
  "output_text": "인장 양수 기준 열응력 σ [Pa]",
  "assumptions": "E>0. 균일 온도변화·1축 완전 구속·선형 탄성·작은 변형에 한정한다. 가열 시 압축 부호이며 좌굴·항복·크리프·부분 구속은 포함하지 않는다.",
  "purpose": "구속 열응력 계산 / 열팽창을 막은 봉재 검산",
  "sources": [
    {
      "label": "OpenStax · Thermal Expansion",
      "url": "https://openstax.org/books/university-physics-volume-2/pages/1-3-thermal-expansion"
    }
  ],
  "slug": "eng-restrained-thermal-stress",
  "category": "재료",
  "result_label": "인장 양수 기준 열응력 σ",
  "result_dimension": "pressure",
  "fields": [
    {
      "key": "e",
      "label": "영률 E",
      "dimension": "pressure",
      "example": 200000000000.0,
      "constraint": "positive",
      "display_unit": "GPa",
      "display_value": "200"
    },
    {
      "key": "alpha",
      "label": "선팽창계수 α",
      "dimension": "expansion",
      "example": 1.2e-05,
      "constraint": "signed",
      "display_unit": "microK",
      "display_value": "12"
    },
    {
      "key": "dt",
      "label": "온도 변화 ΔT",
      "dimension": "deltaT",
      "example": 50,
      "constraint": "signed",
      "display_unit": "Kdiff",
      "display_value": "50"
    }
  ],
  "site": "https://nanalab.kr/eng-restrained-thermal-stress/",
  "repository": "https://github.com/NaNaCompany/eng-restrained-thermal-stress",
  "condition": "",
  "output_unit": "MPa"
};
