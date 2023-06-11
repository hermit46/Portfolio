import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

interface BackgroundProps {
  height: string
}

export const Background = styled.div<BackgroundProps>`
  width: 100%;
  height: ${({ height }) => height};
  opacity: 100%;
  background: transparent;
  position: absolute;
  display: flex;
  padding: 0 40px 0 40px;
  justify-content: center;
  z-index: 9;
  align-items: center;
  @media screen and (max-width: 1020px) {
    height: 1194px;
    align-items: flex-start;
  }
  @media screen and (max-width: 768px) {
    height: 1615px;
    align-items: flex-start;
  }
  @media screen and (max-width: 480px) {
    height: 1596px;
    align-items: flex-start;
  }
`

export const ModalWrapper = styled.div`
  width: 728px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #ededed;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 20;
  border-radius: 10px;
  padding: 0px 0px;
  overflow: scroll;
  @media screen and (max-width: 1020px) {
    top: 150px;
    bottom: 150px;
    position: sticky;
    margin: 200px 0px 200px 0px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 200px 0px 200px 0px;
    width: 480px;
    top: 120px;
  }
  @media screen and (max-width: 480px) {
    width: 360px;
  }
  @media screen and (max-width: 768px) {
    max-height: 500px;
  }
`

export const ModalImg = styled.img`
  padding: 20px 0;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 45px;
  -o-object-fit: cover;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    margin: 20px auto -40px auto;
    width: 40%;
    border-radius: 10%;
  }
  @media screen and (max-width: 480px) {
    width: 60%;
  }
  width: 75%;
  border-radius: 8%;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  margin-right: 40px;
  margin-top: 100px;
  margin-bottom: 20px;
  p {
    margin-bottom: 1rem;
    text-align: center;
  }

  a {
    margin-bottom: 30px;
    padding: 10px 24px;
    background: #0d1821;
    color: #ededed;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    &:hover {
      transition: all 0.2s ease-in-out;
      background-color: #344966;
    }
  }
  @media screen and (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`

export const CloseModalButton = styled(AiOutlineClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`
