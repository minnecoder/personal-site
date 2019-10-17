import { css } from 'styled-components'

const sizes = {
  desktop: 1024,
  tablet: 770,
  plusphone: 430,
  phone: 375,
}
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})
