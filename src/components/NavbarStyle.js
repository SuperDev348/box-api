import styled from 'styled-components';

export const Styles = styled.div`
    .nav{
        color: #fff;
        background-color: #ee6e73;
        width: 100%;
        height: 56px;
        line-height: 56px;
        position: relative;
        .logo{
            position: absolute;
            padding: 0px 20px;
            left: 10px;
        }
        .item-block{
            float: right;
            display: flex;
            width: 200px;
            justify-content: space-around;
            .nav-item{
                display: block;
                padding: 0 15px;
                cursor: pointer;
                &:hover{
                    text-decoration: underline;
                    color: #4a3c3c;
                }
            }
            .active{
                text-decoration: underline;
                color: #4a3c3c;
            }
        }
        
    }
`;