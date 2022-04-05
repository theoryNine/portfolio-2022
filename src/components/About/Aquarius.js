import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Constellation = styled.svg`
    height: 100%;
    stroke: var(--neonPink);
    stroke-width: 3;
    opacity: 0;
    transition: 2s ease-out all;
    transform: translateX(-50px) rotate(20deg);
    transition-delay: 2s transform, 3s opacity;

    path {
        transition: 2s ease-out filter;
        filter: drop-shadow(0 0 10px var(--neonPink));
    }

    &.animate {
        opacity: 1;
        transform: translateX(0) scale(1.3) rotate(20deg);
    }

    &:hover {
        //transform: scale(1) rotate(0);

        path {
            filter: drop-shadow(0 0 35px var(--neonPink));
        }
    }
`

const ConstellationWrapper = styled.div`
    height: 100%;
    overflow: visible;
`

const Aquarius = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    },[])

    return(
        <ConstellationWrapper>
            <Constellation viewBox="0 0 1000 1000" className={animate === true ? 'animate' : ''}>
                <path id="XMLID_1_" d="M820.1494141,94.855835c0,24.7731934-20.0826416,44.855896-44.855835,44.855896
                    c-14.0728149,0-26.6262207-6.4854736-34.8501587-16.6251831L535.7272949,261.4460449
                    c2.175415,4.2687988,3.4099731,9.09729,3.4099731,14.21698c0,17.3221436-14.0423584,31.364502-31.364502,31.364502
                    c-9.9536133,0-18.817749-4.6420898-24.5634766-11.873291L297.9638062,407.9421997
                    c2.9844971,6.0055542,4.6712036,12.7697144,4.6712036,19.9309692c0,6.5883789-1.4321289,12.838501-3.9833984,18.4738159
                    L453.00177,532.8861694c5.7114868-7.7408447,14.8934326-12.7644653,25.2514648-12.7644653
                    c13.7216187,0,25.3773193,8.8150635,29.6331787,21.0883179l94.6765137-20.1767578
                    c-0.2226563-1.8115234-0.350708-3.6522827-0.350708-5.5239868c0-24.7731934,20.0826416-44.855835,44.855835-44.855835
                    c24.7732544,0,44.855896,20.0826416,44.855896,44.855835s-20.0826416,44.855896-44.855896,44.855896
                    c-20.2130737,0-37.298584-13.3718872-42.9055176-31.7504883l-94.6679077,20.1749268
                    c0.0758057,0.8895874,0.1231079,1.7873535,0.1231079,2.6965942c0,17.3221436-14.0423584,31.364502-31.364502,31.364502
                    s-31.364563-14.0423584-31.364563-31.364502c0-4.1912231,0.8284912-8.1871948,2.3202515-11.84198l-154.3446045-86.5369873
                    c-7.0802612,10.3851929-18.4094849,17.6317749-31.4852905,19.2614136l2.6029053,67.2462158
                    c16.0722656,1.3551025,28.6966553,14.8208618,28.6966553,31.2435303c0,17.3221436-14.0423584,31.364502-31.364502,31.364502
                    c-12.2080078,0-22.7790527-6.9793701-27.9615479-17.1613159l-6.9536133,2.5079346
                    c0.1942749,1.1661987,0.3004761,2.3621826,0.3004761,3.5835571c0,11.3099976-8.6712036,20.5898438-19.727356,21.5668335
                    l-1.6771851,18.4485474c9.1497192,2.5322266,15.8696289,10.9130859,15.8696289,20.8687134
                    c0,6.0455933-2.4796143,11.5100098-6.4743042,15.4388428l151.7909546,223.244812
                    c4.2879028-2.2003174,9.1439819-3.4498901,14.2947998-3.4498901c1.239502,0,2.4596558,0.079895,3.6616211,0.2197266
                    l20.2406006-82.3874512c-7.5491943-3.3837891-12.8109131-10.9584351-12.8109131-19.7669067
                    c0-11.9608154,9.696167-21.6569824,21.6569824-21.6569824c9.3458252,0,17.3088989,5.9200439,20.3441162,14.2145996
                    l88.9967651-15.3549194c0.105957-11.8699341,9.7570801-21.4605713,21.6520386-21.4605713
                    c11.9608154,0,21.6569824,9.696167,21.6569824,21.6569824c0,2.8778076-0.5661621,5.6220093-1.5852661,8.1340942
                    l29.5044556,18.7000732c3.9570923-4.289978,9.6237793-6.9793091,15.9202881-6.9793091
                    c11.9608154,0,21.6569824,9.696167,21.6569824,21.6569824c0,3.6878052-0.9242554,7.1588745-2.5499878,10.1983032
                    l46.0678101,36.506897c8.1779175-8.6596069,19.7577515-14.0722656,32.6087036-14.0722656
                    c24.7731934,0,44.855835,20.0826416,44.855835,44.855835c0,24.7732544-20.0826416,44.855896-44.855835,44.855896
                    c-24.7732544,0-44.855896-20.0826416-44.855896-44.855896c0-9.1356201,2.737854-17.6286011,7.4281006-24.7165527
                    l-46.0661621-36.5056152c-3.8137817,3.3529053-8.8123779,5.3903809-14.2895508,5.3903809
                    c-11.9608154,0-21.6569214-9.696167-21.6569214-21.6569824c0-2.8779297,0.5662842-5.6223145,1.5854492-8.1345215
                    l-29.5043945-18.7000122c-3.9571533,4.2901611-9.6239014,6.9796753-15.9205933,6.9796753
                    c-9.3459473,0-17.3092041-5.920166-20.3442993-14.2148438l-88.9966431,15.3547974
                    c-0.1057129,11.8700562-9.756958,21.4609375-21.6519775,21.4609375c-0.4436035,0-0.8828735-0.0175171-1.3198242-0.0438232
                    l-20.2398071,82.3841553c11.7952881,4.506897,20.1758423,15.9226685,20.1758423,29.3018799
                    c0,17.3221436-14.0423584,31.364502-31.364502,31.364502s-31.364502-14.0423584-31.364502-31.364502
                    c0-9.387207,4.1292725-17.8051758,10.6642456-23.5531616L210.2835083,671.8356934
                    c-2.6832886,1.1912231-5.6508789,1.8583984-8.7759399,1.8583984c-11.9608154,0-21.6569824-9.696106-21.6569824-21.6569214
                    c0-11.3099365,8.6710815-20.5896606,19.7271729-21.5667725l1.6772461-18.4486694
                    c-9.1495972-2.5322876-15.8695068-10.913147-15.8695068-20.8686523c0-11.9608154,9.696167-21.6569214,21.6569824-21.6569214
                    c7.996582,0,14.9758301,4.3372803,18.7271118,10.7844238l6.9541016-2.5080566
                    c-0.5009766-2.2255249-0.7741089-4.5372925-0.7741089-6.9141235c0-15.5933838,11.3814087-28.5230713,26.2890015-30.949707
                    l-2.602478-67.2338867c-23.7775879-1.1188965-42.7128296-20.7471924-42.7128296-44.8016357
                    c0-24.7732544,20.0826416-44.855896,44.855896-44.855896c14.8372192,0,27.9862671,7.2081909,36.1516113,18.309021
                    l185.2440796-112.7871094c-1.7722168-3.9296265-2.7666016-8.2854614-2.7666016-12.8761597
                    c0-17.3221436,14.0423584-31.364502,31.364502-31.364502c9.4187012,0,17.8612671,4.1573486,23.6104736,10.7304688
                    l204.7168579-138.3599854c-3.6020508-6.4580688-5.6624146-13.8934326-5.6624146-21.8131714
                    C730.4376831,70.0826416,750.5203247,50,775.2935791,50C800.0667725,50,820.1494141,70.0826416,820.1494141,94.855835z"/>
            </Constellation>
        </ConstellationWrapper>
    )
}

export default Aquarius;