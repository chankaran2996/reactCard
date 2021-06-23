const plans = [
    {
        plan : "FREE",
        Fee : 0,
        user : "Single User",
        storage : "5GB Storage",
        feature_flags : [1,1,0,0,0,0],
        public_Project : 1,  /* 1 , 0 - represents flag */
        Community_Access : 1,
        Private_Project : 0,
        Phone_Support : 0,
        SubDomain : 0,
        Status_Report : 0
    },
    {
        plan : "PLUS",
        Fee : 9,
        user : "5 Users",
        storage : "50GB Storage",
        feature_flags : [1,1,1,1,1,0],
        public_Project : 1,  /* 1 , 0 - represents flag */
        Community_Access : 1,
        Private_Project : 1,
        Phone_Support : 1,
        SubDomain : 1,
        Status_Report : 0
    },
    {
        plan : "PRO",
        Fee : 49,
        user : "Unlimited Users",
        storage : "150GB Storage",
        feature_flags : [1,1,1,1,1,1],
        public_Project : 1,  /* 1 , 0 - represents flag */
        Community_Access : 1,
        Private_Project : 1,
        Phone_Support : 1,
        SubDomain : 1,
        Status_Report : 1
    }
]

const features = ["Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"]

export {plans,features}