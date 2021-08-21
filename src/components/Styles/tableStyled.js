import styled from 'styled-components'
import { Snackbar } from '@material-ui/core';
import TableLoader from '../ReactContentLoader/ReactLoader';

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
    td{ font-size: 0.8rem;}
    td a { font-size: 0.8rem; }
    td img{ width: 23px;}
    th { font-size: 0.8rem; }

}
  @media (min-width: 992px) {
    td  {font-size: 1rem;}
    td a { font-size: 1rem; }
    td img{ width: 30px;}
    th { font-size: 1rem; }
}
  @media (min-width: 1200px) {
    td  {font-size: 1.1rem;}
    td a { font-size: 1.1rem; }
    td img{ width: 34px;}
    th { font-size: 1.1em; }
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

  @media (max-width: 429px) {
    td {font-size: 0.34rem; }
    td a { font-size: 0.34rem; }
    td img{ width: 10px;}
    th { font-size: 0.34rem; }

}

  @media (min-width: 578px) {
    td {font-size: 0.5rem; }
    td a { font-size: 0.5rem; }
    td img{ width: 15px;}
    th { font-size: 0.5rem; }

}
  @media (min-width: 579px) {
    td{ font-size: 0.8rem;}
    td a { font-size: 0.8rem; }
    td img{ width: 20px;}
    th { font-size: 0.8rem; }

}
  @media (min-width: 992px) {
    td  {font-size: 0.9rem;}
    td a { font-size: 0.9rem; }
    td img{ width: 26px;}
    th { font-size: 0.9rem; }
}
  @media (min-width: 1200px) {
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
  const tableLoaderResponsive = styled(TableLoader)`
    @media (max-width: 400px){
      width: 300px;
      height: 135px;
    }
    @media (min-width: 400px){
      width: 400px;
      height: 220px;
    }

  
  
  `


export {Table, CheckColor, TableViews, StyledSnackbar, tableLoaderResponsive}