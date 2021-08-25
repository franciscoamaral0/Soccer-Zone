
import styled from 'styled-components'
import backgroundImg from '../../images/backgroundImg.jpeg'


const Container = styled.div`
  {props.className};
  background-image: url(${backgroundImg});
  padding: 48px;
  @media only screen and (min-width: 290px) and (max-width: 550px) {
    padding: 8px;
    footer{
      margin-top: 20px;
      flex-direction: column
    }
    footer div div a svg {
      font-size: 22px
    }
    footer div h3{
      font-size: 17px
    }
    footer div h5{
      font-size: 16px
    }
  }
  @media only screen and (min-width: 550px) and (max-width: 720px) {
    footer{
      margin-top: 20px;
      flex-direction: column
      }
    footer div div a svg {
        font-size: 30px
      }
      footer div h3{
        font-size: 22px
      }
      footer div h5{
        font-size: 19px
      }
  }
`




const Section = styled.div`
  {props.className};
  padding: 48px;
  @media only screen and (min-width: 300px) and (max-width: 600px) {
    padding: 20px;
    img{
        height:70px
      }
  }
  @media only screen and (min-width: 601px) {
    padding: 38px;
    img{
        height:100px
      }
  }
`

const Paragraph = styled.p`
{props.className};
font-family: 'Roboto';
  @media only screen and (min-width: 430px) and (max-width: 600px) {
    font-size: 15px; 
  }
  @media only screen and (min-width: 601px) {
    font-size: 20px;
  }
`

const NotFoundStyledH1 = styled.h1`
 {props.className}
  background-image: url(${backgroundImg});
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 350px;
  @media only screen and (min-width: 300px) and (max-width: 429px) {
    font-size: 125px

}

  @media only screen and (min-width: 430px) and (max-width: 600px) {
    font-size: 200px

}
  @media only screen and (min-width: 601px) {
    font-size: 250px

}
  @media only screen and (min-width: 992px) {
    font-size: 300px
}
  @media only screen and (min-width: 1200px) {
    font-size: 350px
}
  
`





export {Section, Paragraph, Container, NotFoundStyledH1}








