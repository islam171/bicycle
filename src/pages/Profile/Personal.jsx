import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../../store/userSlice";

const Personal = () => {

    const {token, data} = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserData(token))
    }, [dispatch, token])

    return <>
        <div className={"text-lg my-1"}>
            Личный кабинет
        </div>
        <div className={"p-2"}>
            <img src="" alt="" className={"m-3"}/>
            <div>
                <div className={"flex gap-5"}>
                    <span>Имя пользовотеля:</span>
                    <h3>{data.username}</h3>
                </div>
            </div>

        </div>
    </>
}

export default Personal