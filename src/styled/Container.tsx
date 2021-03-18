import styled from 'styled-components'

const Container = styled.div<any>`
    display: block;
    width: 100%;
    padding: 20px;
    @media all and (max-width: 578px){  
        padding: 20px 0;
    }
`

export default Container;