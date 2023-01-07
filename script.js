const cardLayout = document.querySelector(".cardLayout");

const populate = (data) => {
    cardLayout.innerHTML += 
    `<div class="offerCard">
        <div class="cardImage">
            <img src=${data.backgroundImg} alt="Something">
        </div>
        <div class="offerCardDescription">
            <div class="cardLogo">
                <img src=${data.logos} alt="logo">
            </div>
            <p class="offerHeader">${data.title}</p>
            <p class="offerValid">Valid till</p>
            <p class="offerTilldataAndTime">${data.validity} </p>
        </div>
   </div>`
}

const masterData=[
    {
        id:1,
        backgroundImg:"https://in.bmscdn.com/offers/offerlisting/play-credit-card---monthly-offer-rblplmn222.jpg?28112022145018",
        logo:"https://in.bmscdn.com/offers/tnclogo/play-credit-card---monthly-offer-rblplmn222.jpg?28112022145018",
        title:"PlayCrediCard - Monthly",
        validity:"31 Mar 2023 23:59",
        type: "credit"
   },
    {
        id:2,
        backgroundImg:"https://in.bmscdn.com/offers/offerlisting/icici-bank-complimentary-offer-iciccom520.jpg?23122022162821",
        logo:"https://in.bmscdn.com/offers/tnclogo/icici-bank-25percent-discount-offer-icicicc520.jpg?23122022162822",
        title:"ICICI BANK COMPLIMENTARY TICKET OFFERS",
        validity:"31 Mar 2023 23:59",
        type: "credit"
   },
    {
        id:3,
        backgroundImg:"https://in.bmscdn.com/offers/offerlisting/play-credit-card---welcome-offer-rblplwl222.jpg?21092022165016",
        logo:"https://in.bmscdn.com/offers/tnclogo/play-credit-card---welcome-offer-rblplwl222.jpg?21092022165017",
        title:"PlayCrediCard - WELCOME OFFER",
        validity:"31 Mar 2023 23:59",
        type: "credit"
   },
    {
        id: 4,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/rupay-credit-card-offer-rpaycc0922.jpg?16122022151713",
        logo: "https://in.bmscdn.com/offers/tnclogo/rupay-credit-card-offer-rpaycc1121.jpg?16122022151713",
        title: "RUPAY CREDIT CARD OFFER",
        validity: "31 Mar 2023 23:59",
        type: "credit"
    },
    {
        id: 5,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/au-credit-card-offer-aucc1221.jpg?27122022120036",
        logo: "https://in.bmscdn.com/offers/tnclogo/au-bank-credit-card-offer-aucc1221.jpg?27122022120036",
        title: "AU CREDIT CARD OFFER",
        validity: "31 Mar 2023 23:59",
        type: "credit"
    },
    {
        id: 6,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/rblmon1216.jpg?16122022153348",
        logo: "https://in.bmscdn.com/offers/tnclogo/rblmon1216.jpg?16122022153348",
        title: "RBL BANK POPCORN, FUN+, MOVIES & MORE AND BLOCKBUSTER MONTHLY OFFER",
        validity: "31 Mar 2023 23:59",
        type: "credit"
    },
    {
        id: 7,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/yes-private-credit-card-offer-yespr0917.jpg?18072022122514",
        logo: "https://in.bmscdn.com/offers/tnclogo/yes-private-credit-card-offer-yespr0917.jpg?18072022122514",
        title: "YES PRIVATE CREDIT CARD OFFER",
        validity: "31 Mar 2023 23:59",
        type: "credit"
    },
    {
        id: 8,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/federal-bank-credit-card-offer-fedcc0722.jpg?29122022143939",
        logo: "https://in.bmscdn.com/offers/tnclogo/federal-bank-credit-card-offer-fedcc0722.jpg?29122022143939",
        title: "FEDERAL BANK CREDIT CARD",
        validity: "31 Mar 2023 23:59",
        type: "credit"
    },
    {
        id: 9,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/idfc-first-bank-private-credit-card-offer-idfccc0921.jpg?11072022123115",
        logo: "https://in.bmscdn.com/offers/tnclogo/idfc%C2%A0visa%C2%A0infinite%C2%A0card-offer-idfccc0921.jpg?11072022123115",
        title: "IDFC FIRST BANK CREDI CARD OFFER",
        validity: "31 Mar 2023 23:59",
        type: "credit"
    },
    {
        id: 10,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/hdfc-bank-timescard-offer-htc0314.jpg?29122022144545",
        logo: "https://in.bmscdn.com/offers/tnclogo/htc0314.jpg?29122022144545",
        title: "HDFC BANK TIMES CREDIT CARD OFFER",
        validity: "31 Mar 2023 23:59",
        type: "credit"
    },
    {
        id: 11,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/indusind-bank-pioneer-heritage-metal-credit-card-offer-indus1120.jpg?27092022104005",
        logo: "https://in.bmscdn.com/offers/tnclogo/indus0313.jpg?27092022104005",
        title: "INDUSIND BANK PIONEER HERITAGE METAL CREDIT CARD OFFER",
        validity: "31 Mar 2023 23:59",
        type: "credit"
    },
    {
        id: 12,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/inr-500-off-on-nature%60s-basket-sbi-card-elite-sbinb0422.jpg?30112022111028",
        logo: "https://in.bmscdn.com/offers/tnclogo/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg?30112022111028",
        title: "NATURE'S BASKET SBI CREDIT CARD ELITE",
        validity: "31 Mar 2023 23:59",
        type: "credit"
    },
    {
        id: 13,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/yes-first-and-yes-premia-credit-card-25-off-yes0516.jpg?10082022121934",
        logo: "https://in.bmscdn.com/offers/tnclogo/yes0516.jpg?10082022121934",
        title: "YES FIRST AND YES PREMIA CREDIT CARD 25% OFF",
        validity: "31 Mar 2023 23:59",
        type: "credit"
    },
    {
        id: 14,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/axis-bank-edebit-card-offer-axsvrdc420.jpg?31032022151939",
        logo: "https://in.bmscdn.com/offers/tnclogo/gsc-debit-card-offer-gsc1118.jpg?19122022181052",
        title: "AXIS BANK E-DEBIT CARD OFFER",
        validity: "31 Mar 2023 23:59",
        type: "debit"
    },
    {
        id: 15,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/kotak-bank-everyday-rupay-debit-card-kotak0922.jpg?07092022125552",
        logo: "https://in.bmscdn.com/offers/tnclogo/kotak-bank-debit-card-offer-kotak0922.jpg?07092022125552",
        title: "KOTAK BANK EVERYDAY RUPEE DEBIT CARD",
        validity: "31 Mar 2023 23:59",
        type:"debit"
    },
    {
        id: 16,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/visa-infinite-program-vip0116.jpg?29122022113117",
        logo: "https://in.bmscdn.com/offers/tnclogo/vip0116.jpg?29122022113117",
        title: "VISA INFINITE PROGRAM",
        validity: "31 Mar 2023 23:59",
        type: "debit"
    },
    {
        id: 17,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/visa-blockbuster-weekends-offer-vsbogo1111.jpg?29122022113036",
        logo: "https://in.bmscdn.com/offers/tnclogo/vsbogo1111.jpg?29122022113036",
        title: "VISA BLOCKBUSTOR WEEKENDS OFFER",
        validity: "31 Mar 2023 23:59",
        type: "debit"
    },
    {
        id: 18,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/standard-chartered-bank-debit-and-credit-card-offer-stanc0422.jpg?02012023173829",
        logo: "https://in.bmscdn.com/offers/tnclogo/standard-chartered-bank-debit-and-credit-card-offer-stanc0422.jpg?02012023173829",
        title: "STANDARD CHARTERED BANK DEBIT AND CREDIT CARD",
        validity: "31 Mar 2023 23:59",
        type: "debit"
    },
    {
        id: 19,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/dbs0514.jpg?30082022105050",
        logo: "https://in.bmscdn.com/offers/tnclogo/dbs0514.jpg?30082022105050",
        title: "DBS TREASURES OFFER",
        validity: "31 Mar 2023 23:59",
        type: "debit"
    },
    {
        id: 20,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/visin0511.jpg?15122022181547",
        logo: "https://in.bmscdn.com/offers/tnclogo/visin0511.jpg?15122022181547",
        title: "INDUSIND DEBIT CARD OFFER",
        validity: "31 Mar 2023 23:59",
        type: "debit"
    },
    {
        id: 21,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/jupiter-cashback-offer-juspay0722.jpg?05122022151049",
        logo: "https://in.bmscdn.com/offers/tnclogo/jupiter-cashback-offer-juspay0722.jpg?05122022151049",
        title: "JUPITER CASHBACK OFFER",
        validity: "31 Mar 2023 23:59",
        type: "debit"
    },
    {
        id: 22,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/rbl-bank-debit-card-offer-rbldc0422.jpg?28112022151234",
        logo: "https://in.bmscdn.com/offers/tnclogo/rbl-bank-debit-card-offer-rbldc0422.jpg?28112022151234",
        title: "RBL BANK PINNACLE DEBIT CARD",
        validity: "31 Mar 2023 23:59",
        type: "debit"
    },
    {
        id: 23,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/au-small-finance-bank-limited-debit-card-offer-auroyl1219.jpg?02012023180611",
        logo: "https://in.bmscdn.com/offers/tnclogo/au-bank-royal-debit-card-offer-auroyl1219.jpg?02012023180611",
        title: "AU SMALL FINANCE DEBIT CARD BANK",
        validity: "31 Mar 2023 23:59",
        type: "debit"
    },
    {
        id: 24,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/1-get-1-debit-card-offer-eqts1117.jpg?02112022130212",
        logo: "https://in.bmscdn.com/offers/tnclogo/equitas-buy-1-get-1-debit-card-offer-eqts1117.jpg?02112022130212",
        title: "EQUITAS DEBIT CARD FREE MOVIE TICKET OFFER",
        validity: "31 Mar 2023 23:59",
        type: "debit"
    },
    {
        id: 25,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/icici-debit-card-offer-icicor0813.jpg?13092022174126",
        logo: "https://in.bmscdn.com/offers/tnclogo/icicor0813.jpg?13092022174126",
        title: "ICICI DEBIT CARD OFFER",
        validity: "31 Mar 2023 23:59",
        type: "debit"
    },
    {
        id: 26,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/axis-delight-debit-card-offer-axisdl1120.jpg?31032022152116",
        logo: "https://in.bmscdn.com/offers/tnclogo/axis-delight-debit-card-offer-axisdl1120.jpg?31032022152116",
        title: "AXIS DELIGHT DEBIT CARD",
        validity: "31 Mar 2023 23:59",
        type: "debit"
    },
    {
        id: 27,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/buy-2-tickets-and-get-10percent-off-bms100.jpg?18112022122109",
        logo: "https://in.bmscdn.com/offers/tnclogo/buy-2-tickets-and-get-10percent-off-bms100.jpg?18112022122109",
        title: "BUY 2 TICKETS AND GET 10 TICKETS",
        validity: "31 Mar 2023 23:59",
        type: "bookmyshow"
    },
    {
        id: 28,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/get-rs-100-off-on-your-tickets-bmsoffer.jpg?23082022120238",
        logo: "https://in.bmscdn.com/offers/tnclogo/chandigarh-kare-aashiqui-movie-voucher-cka200.jpg?23082022120238",
        title: "GET RS. 100 OFF ON YOUR TICKETS",
        validity: "31 Mar 2023 23:59",
        type: "bookmyshow"
    },
    {
        id: 29,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/discountcpns.jpg?08102022151416",
        logo: "https://in.bmscdn.com/offers/tnclogo/discountcpns.jpg?08102022151416",
        title: "AVAIL DISCOUNTS AND OFFER",
        validity: "31 Mar 2023 23:59",
        type: "bookmyshow"
    },
    {
        id: 30,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/mobikwik-cashback-offer-mbkcb1222.jpg?02012023103900",
        logo: "https://in.bmscdn.com/offers/tnclogo/mobikwik-cashback-offer-mbkcb0322.jpg?02012023103900",
        title: "MOBIKWIK CASHBACK OFFER",
        validity: "31 Mar 2023 23:59",
        type: "wallet"
    },
    {
        id: 32,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/sbisimclik.jpg?04012017151159",
        logo: "https://in.bmscdn.com/offers/tnclogo/sbisimclik.jpg?04012017151200",
        title: "SIMPLYCLICK SBI CARDS REWARDS",
        validity: "31 Mar 2023 23:59",
        type: "rewards"
    },
    {
        id: 33,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/rewards-point-redemption-rewardpoints.jpg?15022021162949",
        logo: "https://in.bmscdn.com/offers/tnclogo/rewards-point-redemption-rewardpoints.jpg?15022021162949",
        title: "REWARDS POINT REDEMPTION",
        validity: "31 Mar 2023 23:59",
        type: "rewards"
    },
    {
        id: 34,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/twid---pay-with-rewards-twidpay1222.jpg?31122022162404",
        logo: "https://in.bmscdn.com/offers/tnclogo/twid---pay-with-rewards-twidpay1022.jpg?31122022162405",
        title: "PAY WITH REWARDS",
        validity: "31 Mar 2023 23:59",
        type: "rewards"
    },
    {
        id: 35,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/payback-points-payback.jpg?23062022134154",
        logo: "https://in.bmscdn.com/offers/tnclogo/payback.jpg?23062022134154",
        title: "PAYBACK POINTS",
        validity: "31 Mar 2023 23:59",
        type: "rewards"
    },
    {
        id: 36,
        backgroundImg: "https://in.bmscdn.com/offers/offerlisting/pvr-privilege-points-pvrprivilege.jpg?01112022102909",
        logo: "https://in.bmscdn.com/offers/tnclogo/earn-and-redeem-pvr-privilege-points-everytime-book-tickets-on-bookmyshow-for-pvr-cinemas-pvrprivilege.jpg?01112022102909",
        title: "PVR PRIVILEDGE POINTS",
        validity: "31 Mar 2023 23:59",
        type: "rewards"
    },
]

masterData.forEach(data => {
    populate(data);
});

// Filtering data according to the masterData

const credit = document.getElementById("credit");
credit.addEventListener("click", ()=> {
    cardLayout.innerHTML = ``;
    masterData.forEach(data => {
        if(data.type === "credit") populate(data);
    });
});
const debit = document.getElementById("debit");
debit.addEventListener("click", ()=> {
    cardLayout.innerHTML = ``;
    masterData.forEach(data => {
        if(data.type === "debit") populate(data);
    });
});
const bookmyshow = document.getElementById("bookmyshow");
bookmyshow.addEventListener("click", ()=> {
    cardLayout.innerHTML = ``;
    masterData.forEach(data => {
        if(data.type === "bookmyshow") populate(data);
    });
});
const wallet = document.getElementById("wallet");
wallet.addEventListener("click", ()=> {
    cardLayout.innerHTML = ``;
    masterData.forEach(data => {
        if(data.type === "wallet") populate(data);
    });
});
const rewards = document.getElementById("rewards");
rewards.addEventListener("click", ()=> {
    cardLayout.innerHTML = ``;
    masterData.forEach(data => {
        if(data.type === "rewards") populate(data);
    });
});
const cinema = document.getElementById("cinema");
cinema.addEventListener("click", ()=> {
    cardLayout.innerHTML = `<div class="FiltersWrapper">
    <p>HAPPY NEW YEAR PRIYA</p></div>`;
    masterData.forEach(data => {
        if(data.type === "cinema") populate(data);
    });
});


const masterDatajson = JSON.stringify(masterData);
const jsondiv = document.querySelector(".json");
jsondiv.textContent = masterDatajson;
// console.log(masterDatajson);