import styled from 'styled-components'
import { Snackbar } from '@material-ui/core';


const Table = styled.table`
  text-align:center;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 3px solid #ddd;
  width: 100%;
  td, th{
    border: 1px solid #ddd;
    padding: 8px;
  }
  th{
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #4CAF50;
    color: white;
  }
  tr:nth-child(even){
    background-color: #f2f2f2;
  }
  tr:hover{
    background-color: #ddd;
  }
  @media (max-width: 400px) {
    td {font-size: 0.5rem; }
    td a { font-size: 0.5rem; }
    td img{ width: 15px;}
    th { font-size: 0.5rem; }
}
  @media (min-width: 401px) {
    td{ font-size: 0.7rem;}
    td a { font-size: 0.7rem; }
    td img{ width: 23px;}
    th { font-size: 0.7rem; }
}
  @media (min-width: 992px) {
    td  {font-size: 0.85rem;}
    td a { font-size: 0.8rem; }
    td img{ width: 30px;}
    th { font-size: 0.8rem; }
}
  @media (min-width: 1200px) {
    td  {font-size: 1rem;}
    td a { font-size: 1rem; }
    td img{ width: 34px;}
    th { font-size: 1em; }
}
`;


const TableViews = styled.table`
  text-align:center;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 3px solid #ddd;
  width: 100%;
  td, th{
    border: 1px solid #ddd;
    padding: 8px;
  }
  th{
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #4CAF50;
    color: white;
  }
  tr:nth-child(even){
    background-color: #f2f2f2;
  }
  tr:hover{
    background-color: #ddd;
  }

  @media only screen and (min-width: 300px) and (max-width: 429px) {
    td {font-size: 0.43rem;}
    td a { font-size: 0.43rem;}
    td img{ width: 17px;}
    th { font-size: 0.43rem;}

}

  @media only screen and (min-width: 430px) and (max-width: 600px) {
    td {font-size: 0.65rem; }
    td a { font-size: 0.65rem; }
    td img{ width: 20px;}
    th { font-size: 0.65rem; }

}
  @media only screen and (min-width: 601px) {
    td{ font-size: 0.8rem;}
    td a { font-size: 0.8rem; }
    td img{ width: 24px;}
    th { font-size: 0.8rem; }

}
  @media only screen and (min-width: 992px) {
    td  {font-size: 0.9rem;}
    td a { font-size: 0.9rem; }
    td img{ width: 28px;}
    th { font-size: 0.9rem; }
}
  @media only screen and (min-width: 1200px) {
    td  {font-size: 1rem;}
    td a { font-size: 1rem; }
    td img{ width: 32px;}
    th { font-size: 1em; }
}
`;


const CheckColor = styled.span`
color: ${props=> props.result === 'v' ? 'green' : props.result === 'e' ? 'gray' : 'red'}
` 

const StyledSnackbar = styled(Snackbar)`
  top: 320px;
  right: 94px;
  display: inline;

  `
  

  


export {Table, CheckColor, TableViews, StyledSnackbar}