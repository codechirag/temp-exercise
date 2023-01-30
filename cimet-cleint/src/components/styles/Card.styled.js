import styled from "styled-components";
const primary = '#002e71';
const secondary = '#00609d';
const lightGray = '#f5f5f5';

export const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
    color: #535353;
    p,h1,h2,h3,h4,h5,ul,li{
        margin: 0;
        padding: 0;
    }
`

export const Card = styled.div`
    border: 1px solid #c8c8c8;
    border-radius: 4px;
    margin-bottom: 30px;
    position: relative;
    font-size: 13px;
    .chip-wrap{
        position: absolute;
    top: -11px;
    left: 15px;
    }
`;
export const Button = styled.button`
    background-color: ${({ bgColor }) => bgColor};
    padding: 0 20px;
    line-height: 30px;
    color: #fff;
    border-radius: ${({ radius }) => radius};
    font-weight: bold;
    letter-spacing: 0.5px;
    border: none;
    cursor: pointer;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    flex-wrap: wrap;
    .header-text{
        margin-top: 10px;
    }
    .filter-icon{
        top: 2px;
        position: relative;
        right: 3px;
    }
`
export const Count = styled.span`
    background-color: #ffffff;
    border-radius: 50%;
    color: #696262;
    width: 15px;
    height: 15px;
    display: inline-block;
    vertical-align: middle;
    line-height: 1.3;
`
export const Chip = styled.span`
    background-color: ${lightGray};
    border-radius: 5px;
    padding: 0 10px;
    display: inline-block;
    margin-right: 10px;

    .chipIcon{
        margin-right: 5px;
    }
`

export const LinkBox = styled.div`
    text-align: center;
    &>*{
        margin-top: 5px;
        display: inline-block;
    }
`
export const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0;

    @media (max-width: 767px){
        flex-direction: column;
        >*{
            margin-bottom: 20px;
        }
    }
`
export const CompareBox = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    svg{
        color: ${primary};
        margin: 0 8px;
        font-size: 10px;
    }
    .price-compare{
        background-color: ${lightGray};
        border-radius: 5px;
        padding: 10px 10px 15px;
        max-width: 160px;
        margin-bottom: 5px;
    }
    .benefits{
        max-width: 310px;
        text-align: center;
        span{
            display: inline-block;
        }
    }
    
`
export const PriceBox = styled.div`
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #dddddd;
    max-width: 150px;
    width: 100%;
    align-self: baseline;
    p{
        background: ${secondary};
        margin: 0;
        color: #fff;
        padding: 5px 5px 10px;
        line-height: 1;
        font-size: 12px;
        svg{
            font-size: 10px;
            position: relative;
            top: 1px;
        }
    }
    .prices{
        padding: 10px;
        background-color: #cae7ea;
        .bill-amount{
            color: ${primary};
            font-weight: bold;
            font-size: 20px;
        }
        .bill-amount-monthly{
            font-size: 14px;
            font-weight: bold;
            color: ${secondary};
        }
    }
    @media (max-width: 767px){
        margin: 0 auto;
    }

`
export const CardBody = styled.div`
    margin-top: 10px;
    padding: 0 20px 20px;
` 
export const CardBottom = styled.div`
    background-color: ${lightGray};
    padding: 20px;
    .tc{
        &>p:before {
        content: '^';
        }
    }   
    .features{
        margin-bottom: 10px;
        p{
            display: inline-block;
        }
        span{
            margin-right: 10px;
        }
        svg{
            margin-right: 8px;
            font-size: 10px;
            color: ${primary} ;
        }
    }
`