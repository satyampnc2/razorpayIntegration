import React,{useState,useContext} from 'react'
import AlertContext from '../Context/AlertContext/alertContext'
import Axios from 'axios'
import Alert from './Alert'
const Payment = () => {
    const [payment, setPayment] = useState({
        amount :''
    })
    const alertContext = useContext(AlertContext);
    const {alert, setAlert} = alertContext;
    const onChange = e => {
        setPayment({[e.target.name] : e.target.value})
    }
    const onSubmit = async e => {
        e.preventDefault();
        if(payment.amount === '') {
            setAlert("Please Enter Valid Amount","danger")
            return;
        }
        const API_URL = 'http://localhost:5000/'
        const orderUrl = `${API_URL}order`;
        const response = await Axios.post(orderUrl,{amount:payment.amount});
        const { data } = response;
        const options = {
        key: "rzp_test_Baj0ZJ8G2mlZZy",
        name: "LEVEL",
        description: "Payment",
        order_id: data.id,
        handler: async (response) => {
            try {
            const paymentId = response.razorpay_payment_id;
            const url = `${API_URL}capture/${paymentId}`;
            const capturedResponse = await Axios.post(url, {amount:payment.amount})
            console.log(JSON.parse(capturedResponse.data));
            setAlert("Payment Successful !!","success")
            } catch (err) {
            setAlert("Oops Server Error Occured :(","danger")
            }
        },
        theme: {
            color: "#686CFD",
        },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    } 
    return (
        <div className="form-container">
            {
                alert !== null && <Alert/>
            }
            <form  onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="text" value={payment.amount} name="amount" onChange={onChange}/>
                </div>
                <input onClick={onSubmit} type="submit" value="Pay" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default Payment
