import { PropsWithChildren } from "react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <Container>
      <Title>Pomodoro</Title>
      {children}
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const Title = styled.h1`
  color: white;
  font-size: 90px;
  margin-bottom: 20px;
`;
