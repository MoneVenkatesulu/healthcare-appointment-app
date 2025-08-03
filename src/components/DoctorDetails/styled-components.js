import Styled from 'styled-components';

const StatusElement = Styled.p`
    color: ${props => props.$isavailable ? "#10ba2fff" : '#7b7b7bff' };
    font-size: 12px;
`

export default StatusElement;