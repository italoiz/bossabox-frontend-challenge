import styled from 'styled-components';

import { Form as SearchBar } from '../../components/SearchBar/styles';
import { Container as ToolCard } from '../../components/ToolCard/styles';

export const ActionBarContainer = styled.section`
  margin: 30px 0px 20px 0px;
  display: flex;

  ${SearchBar} {
    flex: 1;
    margin: 0px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;

    > button {
      margin-bottom: 10px;
    }
  }
`;

export const Tools = styled.section`
  display: flex;
  flex-direction: column;

  > ${ToolCard} {
    margin-bottom: 12px;
  }
`;
