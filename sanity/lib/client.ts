import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skxt3pfLPWpRQfe1O8yimtmvcKnXUp2PNEO9KfEOzDGAR40xAOKNyOvIM8fJOWYmjGXlr3HVbJZaBjz7hEQ59122h6lXIzt20015lLoFsYX3hJsjNyAjOiq3cl7dI5eRZxZ81FnxycXukuLuNEAmhhJeOUYwUNDTdCcXpj2qoelOxJbvdJwr",
})
