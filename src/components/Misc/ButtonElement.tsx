import styled from 'styled-components'
import { Link } from 'react-scroll'

interface ButtonProps {
  primary: string
  big?: string
  dark: string
  fontBig?: string
}

export const Button = styled(Link)<ButtonProps>`
  border-radius: 10px;
  background: ${({ primary }) => (primary === 'true' ? '#B4CDED' : '#0D1821')};
  white-space: nowrap;
  padding: ${({ big }) => (big === 'true' ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark === 'true' ? '#0D1821' : '#ededed')};
  font-size: ${({ fontBig }) => (fontBig === 'true' ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  line-height: 22px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) =>
      primary === 'true' ? '#ededed' : '#B4CDED'};
  }
`
