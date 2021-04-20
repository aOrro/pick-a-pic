import styled from 'styled-components';

export const HeaderMenu = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 55%;
  border-bottom: 1px solid lightgrey;
`;

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background: #efefef;
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
  list-style: none;
  width: 100px;
`;

export const Logo = styled.img`
  width: 40%;
`;

export const Icon = styled.img`
  width: 20px;
`;
