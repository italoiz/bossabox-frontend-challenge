import styled from 'styled-components';

// import { Container as Header } from '../components/Header/styles';
import { Form as SearchBar } from '../components/SearchBar/styles';
import { Container as ToolCard } from '../components/ToolCard/styles';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 50px 30px;
  margin: 0 auto;
  height: 100%;
`;

export const ActionBarContainer = styled.section`
  margin: 30px 0px 20px 0px;
  display: flex;

  ${SearchBar} {
    flex: 1;
  }
`;

export const Tools = styled.section`
  display: flex;
  flex-direction: column;

  > ${ToolCard} {
    margin-bottom: 12px;
  }
`;
