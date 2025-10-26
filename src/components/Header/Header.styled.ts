import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Headers = styled.header`
position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #4682b4;
    display: flex;
    align-items: center;
    &.active{
     color: #ffffff33;
    }
`

export const Container = styled.div`
max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const Link = styled(NavLink)`
 text-decoration: none;
padding: 10px;
    color: #fff;
    

    &.active{
    color: #ffffff33;
    transition: all 0.3s ease;
    } 
`
export const ToggleButton = styled.button`
 position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
     background-color: ${props => props.theme.color.backgroundSecondary};
  color: ${props => props.theme.color.text};
  border: 1px solid ${props => props.theme.color.border};
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.color.backgroundPrimary};
    color: white;
  }

`