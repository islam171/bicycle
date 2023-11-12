import {useEffect} from "react";
import {getOrders} from "../../store/orderSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Story = ({token}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrders(token))
    }, [token, dispatch])

    const {orders} = useSelector(state => state.order)

    return <>
        <div className={"text-lg my-1"}>
            История заказов
        </div>
        <div>
            {orders && orders.map((order) => <div key={order._id} className={"border p-2"}>
                <div className={"flex gap-5"}>
                    <div>Номер заказа</div>
                    <Link to={`/order/${order._id}`}>{order._id}</Link>
                </div>
                <div className={"flex gap-5"}>
                    <div>Дата</div>
                    <div>{order.createdAt}</div>
                </div>
            </div>)}
        </div>
    </>
}

export default Story