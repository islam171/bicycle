import {Link} from "react-router-dom";
import {memo} from "react";

const Title = memo(({isVisibleInput}) => {
    return <>
        <Link to={"/"} className={`h-full flex items-center text-5xl ${isVisibleInput && 'hidden'}`}>MONO</Link>
    </>
})

export default Title