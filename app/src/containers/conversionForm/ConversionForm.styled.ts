import styled from '@emotion/styled'
import { BREAKPOINTS } from 'utils/style'

export const Fieldset = styled.fieldset`
  display: contents;
`

export const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;

  @media ${BREAKPOINTS.MD.max} {
    grid-template-columns: 1fr;
  }
`

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`
