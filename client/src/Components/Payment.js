import React,{useState,useContext} from 'react'
import AlertContext from '../Context/AlertContext/alertContext'
import Axios from 'axios'
import Alert from './Alert'

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const Payment = () => {
    const [payment, setPayment] = useState({
        amount :''
    })
    const alertContext = useContext(AlertContext);
    const {alert, setAlert} = alertContext;
    const onChange = e => {
        setPayment({[e.target.name] : e.target.value})
    }
//     const onSubmit = async e => {
//         e.preventDefault();
//         if(payment.amount === '') {
//             setAlert("Please Enter Valid Amount","danger")
//             return;
//         }
//         //const API_URL = 'http://localhost:5000/'
//         const orderUrl = `/order`;
//         const response = await Axios.post(orderUrl,{amount:payment.amount});
//         const { data } = response;
//         const options = {
//         key: "rzp_test_Baj0ZJ8G2mlZZy",
//         name: "LEVEL",
//         description: "Payment",
//         order_id: data.id,
//         handler: async (response) => {
//             try {
//             const paymentId = response.razorpay_payment_id;
//             const url = `/capture/${paymentId}`;
//             const capturedResponse = await Axios.post(url, {amount:payment.amount})
//             console.log(JSON.parse(capturedResponse.data));
//             setAlert("Payment Successful !!","success")
//             } catch (err) {
//             setAlert("Oops Server Error Occured :(","danger")
//             }
//         },
//         };
//         const rzp1 = new window.Razorpay(options);
//         console.log("here")
//         rzp1.open();
//     } 
    const displayRazorpay = async (e) => {
        e.preventDefault();
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
		if (!res) {
			setAlert('Razorpay SDK failed to load. Are you online?',"danger")
			return
		}
        if(payment.amount === '') {
            setAlert("Please Enter Valid Amount","danger")
            return;
        }

        try {
            const orderUrl = `/order`;
            const response = await Axios.post(orderUrl,{amount:payment.amount});
            const { data } = response;

            console.log(data)

            const options = {
                key: 'rzp_test_Baj0ZJ8G2mlZZy',
                currency: data.currency,
                amount: data.amount,
                order_id: data.id,
                name: 'Level',
                description: 'Payment',
                handler: (response) => {
                    console.log(response)
                    // console.log(response.razorpay_payment_id)
                    // alert()
                    // alert(response.razorpay_signature)
                    setAlert(`Order_Id -> ${response.razorpay_order_id}`,"success");
                    setAlert(`Payment_Id -> ${response.razorpay_payment_id}`,"success");
                    setAlert(`Payment Successful !!`,"success")
                },
                theme: {
                    color: "#686CFD",
                }
            }
            const paymentObject = new window.Razorpay(options)
		    paymentObject.open()
        } catch(err) {
            setAlert("Oops Server Error Occured :(","danger") 
        }
	}
    return (
        <div className="form-container">
            {
                alert !== null && <Alert/>
            }
            <form  onSubmit={displayRazorpay}>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="text" value={payment.amount} name="amount" onChange={onChange}/>
                </div>
                <input onClick={displayRazorpay} type="submit" value="Pay" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default Payment
