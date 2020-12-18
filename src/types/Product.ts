export interface RawProduct {
  id: string
  name: string
  specFieldName1: string
  specFieldName2: string
  specFieldName3: string
  specFieldName4: string
  specFieldName5: string
  specFieldValue1: string
  specFieldValue2: string
  specFieldValue3: string
  specFieldValue4: string
  specFieldValue5: string
  brochure: {
    file: { url: string }
  }
}

export interface Product {
  id: string
  name: string
  specFieldName1: string
  specFieldName2: string
  specFieldName3: string
  specFieldName4: string
  specFieldName5: string
  specFieldValue1: string
  specFieldValue2: string
  specFieldValue3: string
  specFieldValue4: string
  specFieldValue5: string
  brochureUrl: string
}
