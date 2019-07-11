import styled from 'styled-components';

export const Container = styled.article`
  padding: 15px 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 930px;
`;

export const Header = styled.header`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-between;
`;

export const Title = styled.a`
  font-size: 20px;
  /* color: rgba(85, 26, 139); */
  color: #3a0071;
  text-decoration: underline;
`;

export const Description = styled.p`
  font-size: 15px;
`;

export const Tags = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
  font-size: 13px;
  font-weight: bold;
  margin-right: 7px;
  margin-bottom: 4px;

  &::before {
    content: '#';
  }
`;

export const RemoveButton = styled.button.attrs({
  type: 'button',
})`
  cursor: pointer;
  font-size: 13px;
  padding: 4px 8px;
  background: rgba(204, 28, 28, 1);
  color: #ffffff;
  font-weight: bold;
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;

  > span {
    margin-right: 3px;
  }
`;
