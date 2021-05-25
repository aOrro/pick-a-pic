import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background: #efefef;
  z-index: 1;
`;

export const HeaderMenu = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 55%;
  border-bottom: 1px solid lightgrey;
`;

export const NavLinks = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: auto 0;
  width: 20%;
`;

export const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 100px;
`;

export const Logo = styled.img`
  width: 80px;
  margin-right: 120px;
`;
