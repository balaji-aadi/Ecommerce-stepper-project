const CHECKOUT_STEPS = [
    {
        name : "Customer Info",
        Component : () => <div className="details_component">Provide your contact details.</div>
    },
    {
        name : "Shipping Info",
        Component : () => <div className="details_component">Enter your shipping address.</div>
    },
    {
        name : "Payment",
        Component : () => <div className="details_component">Complete payment for your order.</div>
    },
    {
        name : "Delivered",
        Component : () => <div className="details_component">Your order has been delivered.</div>
    },

]

export default CHECKOUT_STEPS