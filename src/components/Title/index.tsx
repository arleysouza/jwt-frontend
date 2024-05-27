import styled from "styled-components";

export default function Title({children}:any){
    return <Sld>{children}</Sld>;
}

const Sld = styled.div`
    display: flex;
    font-size: 120%;
    color: #fff;
    margin: 10px 0px;
`;