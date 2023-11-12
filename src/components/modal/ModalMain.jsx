import UpdateModal from "./updateModal";
import {useSelector} from "react-redux";

const ModalMain = () => {


    return <>
        <div className={"w-full h-full "}>
            <div className={"fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}>
                {/*{isOpenUpdateModal && <UpdateModal/>}*/}
            </div>
        </div>
    </>
}

export default ModalMain