import React, { useEffect } from 'react';
import { navigate } from 'hookrouter';
import gsap from 'gsap';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #010021;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Banana = styled.svg`
    display: block;
    overflow: visible;
`;

const Body = styled.path`
    fill: #ffff00;
    fill-opacity: 0;
    stroke: #ffff00;
    stroke-width: 0.25;
    stroke-dasharray: 380;
    stroke-dashoffset: 380;
    filter: url(#glow);
`;

const Eye = styled.circle`
    fill: #ffff00;
    filter: url(#glow);
`;

export default function BananaAnimation() {
    useEffect(() => {
        const tl = gsap.timeline({onComplete: () => {
            navigate('/masking');
        }});
        tl.to("#Shape", { duration: 4.5, strokeDashoffset: 0 })
        .to("#Shape", { duration: 1, fillOpacity: 1 })
        .to("#glowFilter", { duration: 0.5, attr: { stdDeviation: 0.2 } })
        .to("#banana", { duration: 2, x: 500, y: -400, rotation: 1080, width: 100, height: 100 });
    }, []);

    return (
        <Container>
            <Banana id="banana" height="400" viewBox="0 0 54 60" width="400" xmlns="http://www.w3.org/2000/svg"><filter id="glow"><feGaussianBlur stdDeviation="0" id="glowFilter"/></filter><g id="Page-1" fill="none" fill-rule="evenodd"><g id="004---Banana-Warrior" fill="rgb(255,255,0)" fillRule="nonzero" transform="translate(-1 -1)"><Body id="Shape" d="m2.39 45.17c1.33257164 1.9702629 3.02973707 3.6674284 5 5 1.94424959 1.3521461 4.1153036 2.3445311 6.41 2.93-1.3243358 1.1342937-2.0298076 2.831139-1.9 4.57.1666635 1.7103402 1.5281835 3.0592535 3.24 3.21.5363044.0798724 1.0777805.1199817 1.62.12 1.316865.0154752 2.6231912-.2362647 3.84-.74 1.3059033-.4790062 2.2072541-1.6821137 2.3-3.07.0133655-.9929268-.3430792-1.9553274-1-2.7-.2970101-.3677785-.6322215-.7029899-1-1 .41-.05.81-.1 1.22-.18h.1l.47-.11c4.4884069-1.1898331 8.5352763-3.6561656 11.65-7.1 1.0347697 1.918597 1.7124358 4.009197 2 6.17-1.3023209.4062149-2.4612499 1.176521-3.34 2.22-.6569208.7446726-1.0133655 1.7070732-1 2.7.0994017 1.3885112 1.0033557 2.58987 2.31 3.07 1.2164872.5048068 2.5230354.7565896 3.84.74.5422007-.0005227 1.0836399-.0406294 1.62-.12 1.7097159-.1514381 3.0679456-1.5012577 3.23-3.21.1918624-2.2714347-1.0765999-4.4149754-3.16-5.34-.4745069-.1771392-.9739686-.2783814-1.48-.3-.3633186-2.6441742-1.2397348-5.1918954-2.58-7.5.23-.29.48-.57.71-.87.62-.82 1.2-1.65 1.72-2.47 1.7469132-2.7128563 3.0940713-5.6631326 4-8.76h.35c1.1924667-.0026069 2.36875-.2761611 3.44-.8v20.37c0 1.6568542 1.3431458 3 3 3s3-1.3431458 3-3v-20.38c1.3343346-1.4918314 1.3343346-3.7481686 0-5.24v-14.67c1.0597472-.1297568 2.0437364-.6164612 2.79-1.38.3052426-.40900296.2535221-.98223896-.12-1.33-2.79-2.55-4.67-7.32-4.74-7.37-.1508496-.38168001-.5195914-.63244048-.93-.63244048s-.7791504.25076047-.93.63244048c0 .05-2 4.82-4.74 7.34-.3913839.35125639-.4438292.94563656-.12 1.36.7462636.7635388 1.7302528 1.2502432 2.79 1.38v14.67c-.6385843.7240405-.993762 1.654606-1 2.62.0028384.2860943.0363636.5710584.1.85-.7656921.3678856-1.6007752.5689873-2.45.59 2.41-11.6-3.34-20.44-5.65-23.44-.1581917-.21615414-.2295584-.48377918-.2-.75l.4-2.88c.1207775-.57594977-.0182263-1.17586089-.38-1.64-.3787835-.46081468-.9434894-.72849993-1.54-.73h-3.06c-.5965106.00150007-1.1612165.26918532-1.54.73-.3847474.46481019-.539083 1.07847798-.42 1.67l.6 3.15c-2.86 2-4.33 5.36-5.18 7.7-.42 1.16-.82 2.33-1.22 3.49l-.27-.27-2.53-2.53c-.2443899-.2853762-.6281184-.4096819-.993419-.3218101-.3653005.0878718-.6505193.3730906-.7383911.7383911-.0878718.3653006.0364339.7490291.3218101.993419l.92.93c-2.0143812.9395933-3.2651999 2.999301-3.17 5.22-.0900782 2.0810739.9906314 4.0379302 2.8 5.07-.34.72-.69 1.38-1.05 2-1.2964783-.1325913-2.5145364-.6837011-3.47-1.57.1395711-.2512494.2534794-.5159187.34-.79.5176303-1.3855746.2284008-2.9437031-.7520095-4.051202-.9804102-1.107499-2.4919553-1.5835762-3.9300832-1.2378215-1.4381279.3457546-2.56807327 1.4568989-2.9379073 2.8890235-.65218732 2.1037483.5190342 4.3389039 2.62 5 .3888909.1190422.7932973.1797032 1.2.18.6452241.0020621 1.2808796-.1559927 1.85-.46.08 0 .14-.09.22-.14 1.016105.9754894 2.2717544 1.6654066 3.64 2-.6696447.8553769-1.445943 1.6215934-2.31 2.28-3.5216587 2.4123215-7.59293886 3.9012271-11.84 4.33-2.01479207.2154185-3.50375722 1.9775074-3.38 4-.01648635 1.2078762.49038005 2.3638234 1.39 3.17zm38.61 12.28c-.0667789.8100756-.7372756 1.4373145-1.55 1.45-1.4700205.2363623-2.9766065.0704996-4.36-.48-.587957-.192292-1.0123904-.7062847-1.09-1.32.0067508-.4983474.1993258-.9762188.54-1.34.7601143-.9160489 1.8254339-1.5268322 3-1.72.1524005-.0224768.3060072-.0358339.46-.04.3619013-.0011213.7210193.0632489 1.06.19 1.2549639.5849514 2.0244363 1.8779822 1.94 3.26zm10-28.45c0 1.1045695-.8954305 2-2 2s-2-.8954305-2-2 .8954305-2 2-2 2 .8954305 2 2zm-2 24c-.5522847 0-1-.4477153-1-1v-19.14c.6535893.1867429 1.3464107.1867429 2 0v19.14c0 .5522847-.4477153 1-1 1zm0-48.62c.9106937 1.85063143 2.0532053 3.57784006 3.4 5.14-1.0963001.35864397-2.2472608.5211325-3.4.48-1.1527392.0411325-2.3036999-.12135603-3.4-.48 1.3467947-1.56215994 2.4893063-3.28936857 3.4-5.14zm0 7.62h1v13.14c-.6535893-.1867429-1.3464107-.1867429-2 0v-13.14zm-36.79 15.91c-.5115269-.1615931-.936695-.521905-1.18-1-.3159236-.6182759-.2885824-1.3561645.0722303-1.9493651.3608128-.5932006 1.0034655-.9568274 1.6977697-.9606349.2033239.0005131.4054738.0308356.6.09.5115269.1615931.936695.521905 1.18 1 .2451837.4723873.2919693 1.023018.13 1.53-.330548 1.0504829-1.4481258 1.6360937-2.5 1.31zm7.59 30.51c-1.3869233.5503665-2.8966806.7161979-4.37.48-.8107529-.0131303-1.4781298-.6415046-1.54-1.45-.0942211-1.3732681.6586917-2.665108 1.9-3.26.3389807-.1267511.6980987-.1911213 1.06-.19 1.3667632.0619183 2.6428157.7017624 3.51 1.76.3406742.3637812.5332492.8416526.54 1.34-.07199.619406-.50373 1.137494-1.1 1.32zm9.2-39.35c1.16.31 2 1.73 2 3.43 0 1.9-1.15 3.5-2.5 3.5-.9532803-.0912487-1.769761-.7211052-2.1-1.62-.2693135-.5898409-.4058604-1.2316114-.4-1.88-.0018616-.5698092.1103421-1.1342278.33-1.66zm-6.5-.07c.1557456.0029898.310415.0265265.46.07l1.37 1.36c-.4627921 1.4069507-.4381328 2.9287819.07 4.32-.3701413.7211756-1.0912135 1.1955651-1.9 1.25h-.21c-1.29-.17-2.29-1.7-2.29-3.5s1.15-3.5 2.5-3.5zm-5.11 16.25c.5922981-.436822 1.1475176-.9218029 1.66-1.45 2.86-.17 5.13.19 6.39 1 .1620683.1219083.3573718.1916596.56.2.4403997.0009866.8296015-.2862564.9584701-.7073807.1288687-.4211244-.0329363-.8769815-.3984701-1.1226193-1.7839243-.9972581-3.8076285-1.4850227-5.85-1.41.8152253-1.1871742 1.5214339-2.4456313 2.11-3.76 1.0358708-.1039718 1.9936874-.5971759 2.68-1.38.7546332.8743837 1.8452327 1.3869655 3 1.41 2.5-.03 4.5-2.5 4.5-5.53.0587003-1.8162448-.7416404-3.5540216-2.16-4.69l2.25-1.51c.3452864-.1719763.5608706-.5272149.5540119-.912898-.0068586-.3856832-.2349371-.733032-.5861198-.8926229s-.7628432-.1029639-1.0578921.1455209l-5.63 3.78c.4-1.17.8-2.33 1.22-3.49.76-2.08 2.05-5 4.47-6.75.6410821-.448823.9614959-1.23032.82-2l-.66-3.18 3.05.06-.41 2.94c-.1083332.79690648.1078367 1.60394078.6 2.24 2.12 2.76 7.54 11.06 5.19 21.93-.7164033-.2228715-1.3918608-.5606003-2-1-.2858125-.2143594-.6642734-.2599565-.9928203-.1196153s-.5572656.4452995-.6000001.8c-.0427344.3547006.1070079.705256.3928204.9196153.8432864.5780018 1.7756608 1.0137855 2.76 1.29-.8443937 2.8247205-2.0796916 5.5174679-3.67 8-.49.77-1 1.55-1.62 2.33l-.26.31c-.4414614-.6457202-.9223766-1.2635626-1.44-1.85-.3708372-.386084-.9799503-.4116464-1.3818318-.0579907s-.4539702.9610757-.1181682 1.3779907c.5822305.6673693 1.120052 1.3722161 1.61 2.11-2.8967247 3.3494641-6.72664 5.758829-11 6.92l-.53.12c-6.0365435 1.1773709-12.24731041-.9080793-16.35-5.49.59806837-.1860119 1.13400359-.5317766 1.55-1 2.44664133 1.0057307 5.0647364 1.5286706 7.71 1.54 5.5290713.0011592 10.7879323-2.3912214 14.42-6.56 4.22-4.81 6.79-11.26 7.87-19.75.1725189-1.3460401.2393898-2.7035211.2-4.06 0-.5522847-.4477153-1-1-1s-1 .4477153-1 1c.0274558 1.2731955-.0393936 2.5466765-.2 3.81-1 8.08-3.43 14.19-7.37 18.63-4.9153678 5.6129381-12.8714484 7.4498863-19.75 4.56.07704656-.3278366.11729526-.6632424.12-1-.00036475-.8700349-.26161565-1.7199712-.75-2.44 3.6506393-.6906751 7.1093133-2.1607821 10.14-4.31zm-12.89 4.75c.81 0 1.5.92 1.5 2s-.69 2-1.5 2-1.5-.92-1.5-2 .69-2 1.5-2z"/><Eye id="Oval" cx="22" cy="23" r="1"/><Eye id="Oval" cx="28" cy="23" r="1"/></g></g></Banana>
        </Container>
    );
}