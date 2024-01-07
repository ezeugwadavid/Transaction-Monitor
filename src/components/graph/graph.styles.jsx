import styled from 'styled-components';
export const GraphContainer = styled.div`
border-radius: 2px;
border: 1px solid #EEF8FD;
background: #FFF;
margin-left: 10px;
margin-top: 20px;

.graph-header-section{
padding: 20px 20px;
display: flex;
justify-content: space-between;
}

.left-section{
    color: #4F4F4F;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.right-section{
    display: flex;
}

.date-range{
    display: flex;
    border: 1px solid #DDE0E3;
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    color: #7F8FA4;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 30px;
    cursor: pointer;
}

.range{
    margin-right: 20px;
}

.controls{
    display: flex;
    margin: auto 0px;
    cursor: pointer;
}

.left-direction{
    margin-right: 20px;
}

.area{
    height: 245px !important;
    padding-left: 10px;
}


`;
