import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styled, { keyframes, css } from 'styled-components'

const navItemFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
`
const Logo = styled.a`
  width: 70px;
`
const NavItems = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 40%;
  @media (min-width: ${props => props.theme.breakpoint.lg}) {
    width: 60%;
  }
  @media (max-width: ${props => props.theme.breakpoint.md}) {
    position: absolute;
    right: 0px;
    height: 92vh;
    top: 8vh;
    background-color: ${props => props.theme.header.bg};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    transform: ${props => (props.open ? 'translateX(0%)' : 'translateX(100%)')};
    transition: transform 0.5s ease-in;
  }
`
const NavItem = styled.li`
  color: ${props => props.theme.header.color};
  list-style: none;
  cursor: pointer;
  @media (max-width: ${props => props.theme.breakpoint.md}) {
    opacity: 0;
    animation: ${props =>
      props.open
        ? css`${navItemFade} 0.5s ease forwards ${props.delay / 5 + 0.4}s;`
        : ''};
  }
`
const StyledLink = styled(Link)`
  color: ${props => props.theme.header.color};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 1.2rem;
  transition: 0.3s;
  &:hover {
    color: ${props => props.theme.color.primary};
  }
`
const Burger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: ${props => props.theme.breakpoint.md}) {
    display: block;
  }
`
const Line = styled.div`
  width: 25px;
  height: 2px;
  background-color: rgb(226, 226, 226);
  margin: 5px;
  transition: all 0.3s ease;
  ${Burger}:hover & {
    background-color: ${props => props.theme.color.primary};
  }
`
const Line1 = styled(Line)`
  transform: ${props =>
    props.open ? 'rotate(-45deg) translate(-5px, 5px)' : ''};
`
const Line2 = styled(Line)`
  opacity: ${props => (props.open ? '0' : '1')};
`
const Line3 = styled(Line)`
  transform: ${props =>
    props.open ? 'rotate(45deg) translate(-5px, -5px)' : ''};
`

const HeaderClassic = ({ site }) => {
  const [open, setOpen] = useState(false)
  const [item, setItem] = useState('')

  return (
    <StyledNav>
      <Logo href='/'>
        <Img fluid={site.logo} />
      </Logo>
      <NavItems open={open}>
        {site.pages.map((page, i) => {
          return (
            <NavItem key={i} open={open} delay={i}>
              <StyledLink to={page.slug} onClick={() => setItem(page.name)}>
                {page.title}
              </StyledLink>
            </NavItem>
          )
        })}
      </NavItems>
      <Burger onClick={() => setOpen(!open)}>
        <Line1 open={open} />
        <Line2 open={open} />
        <Line3 open={open} />
      </Burger>
    </StyledNav>
  )
}

export default HeaderClassic

HeaderClassic.propTypes = {
  site: PropTypes.object.isRequired,
}
