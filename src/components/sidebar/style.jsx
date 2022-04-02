import styled from '@emotion/styled'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  top: ${(props) => (props.isOpen ? 0 : '-100%')};
  top: 0;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
`
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`
export const SidebarWrapper = styled.div``
export const SidebarMenu = styled.ul``
export const SidebarLink = styled.li``
