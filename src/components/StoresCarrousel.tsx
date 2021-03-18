import { Link } from 'react-router-dom';
import styled from 'styled-components'
import StoreType from '../types/Store'

type StoreProps = {
  data : StoreType
}
type StoresCarrouselProps = {
  stores : Array<StoreType> | []
}

const StoresCarrousel = (props : StoresCarrouselProps) => {
  const { stores } = props;

  return(
    <StyledStoresCarrousel>
      {
        stores.map((store : StoreType) => (
          <Store data={store} key={store.id}/>
        ))
      }
    </StyledStoresCarrousel>
  )
},
Store = (props : StoreProps) => {
    const { data } = props

    return(
      <StyledStoreContainer>
        <StyledStoreCard to={`/store/${data.id}`} background={data.logo}>
          <StyledStoreCardTitle color={'black'}>
            {data.name}
          </StyledStoreCardTitle>
        </StyledStoreCard>
      </StyledStoreContainer>
    )
}

const StyledStoresCarrousel = styled.div<any>`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-y: auto;
  border-color: rgba(0, 0, 0, 0);
  transition: border-color 0.5s linear 0s;

  &:hover{
    border-color: rgba(0, 0, 0, 0.1);
  }

  @media all and (max-width: 578px){
    border-color: rgba(0, 0, 0, 0.1);
  }
  
  &::-webkit-scrollbar {
    width: 0.5rem;
    // height: 0.5rem;
    height: 0rem;
  }

  &::-webkit-scrollbar-thumb {
    border-color: inherit;
  }
  &::-webkit-scrollbar-button{
    border-right-style: inset;
    border-right-width: calc(100vw + 100vh);
    border-color: transparent;
  }
  
  &::-webkit-scrollbar-track, &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border-right-style: inset;
    border-right-width: calc(100vw + 100vh);
    border-color: inherit;
  }
`,
StyledStoreContainer = styled.div<any>`
  padding: 10px;
`,
StyledStoreCard = styled<any>(Link)`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    border-radius: 15px;
    padding: 10px;
    min-width: 20vh;
    max-width: 20vh;
    min-height: 20vh;
    max-height: 20vh;

    text-align: center;
    text-decoration: none;

    background: linear-gradient(to top, rgba(0,0,0,0.25), rgba(0,0,0,0)), url(${(props : any) => props.background}), white;
    background-size: cover;
    background-attachment: scroll;
    background-position: center;
    background-clip: border-box;
    background-repeat: no-repeat;

    box-shadow: 0px .25rem 0.25rem rgba(0,0,0,0.25);
    
    transition: all 0.2s linear;

    outline: 0;
    &:hover, &:focus{
      outline: 0;
      transform: translateY(-5px);
    }

    @media all and (max-width: 578px){
      width: 45vw;
      height: 45vw;
    }
`,
StyledStoreCardTitle = styled.h3`
  margin: 0;
  color: white;
  text-align: center;
  transition: 0.2s all;
  filter: drop-shadow(0 0 5px black);
`

export default StoresCarrousel;