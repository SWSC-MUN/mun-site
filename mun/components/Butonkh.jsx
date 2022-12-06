// it may look weird but this component must be in javascript
// because of the khalti library



import KhaltiCheckout from "khalti-checkout-web";
import { useEffect } from "react";

// this funtion takes a function as a prop from the parent component
export default function Butonkh(props) {
    const config = {
        // Public key 
        // todo : cnaging this to our live public key 
        "publicKey": "test_public_key_6a0c9b9b9b9b4d1a9b9b9b9b",
        "productIdentity": "42690",
        "productName": "MUN 2023",
        "productUrl": "https://mun.southwestern.edu.np",
        // our handlers
        "eventHandler": {
            onSuccess(payload) {
                props.f(payload);
            },
            onError(error) {
                console.log(error);
            },
            onClose() {
                console.log('widget is closing');
            }
        },
        "paymentPreference": ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"],
    };


    let checkout;

    // This useEffect may look a bit weird but it's the only way to make it work
    // it fucking drove me crazy trying 
    // another way is dynamically importing it in the onClick handler
    // but that's too fucking retarded
    // but hey, it workss

    useEffect(() => {
        checkout = new KhaltiCheckout(config);
    }, []);

    const handlePayment = () => {
        // It's in paisa. So, 350000 = 3500 NPR
        checkout.show({ amount: 350000 });
    }
    return (
        <div onClick={handlePayment} className="bg-[#7e56c2] hover:bg-purple-700 cursor-pointer p-4 rounded-lg border-solid border-orange-500">
            Pay with Khalti
        </div>
    )
}