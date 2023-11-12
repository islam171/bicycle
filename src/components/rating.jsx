import StarIcon from "@mui/icons-material/Star";

const Rating = () => {
    return <>
        <div className={"mb-4"}>
            <div className={"flex"}>
                <div>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                </div>
                (0)
            </div>
        </div>
    </>
}

export default Rating