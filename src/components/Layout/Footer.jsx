import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = ({onClick}) => {
    return <div className={""} onClick={onClick}>
        <div className={"flex justify-between my-5 max-md:flex-col max-md:items-center max-md:gap-6"}>
            <div className={"text-xl font-light max-md:order-3"}>
                <div className={"max-md:text-center flex max-sm:justify-center items-center gap-2 max-sm:flex-col"}>
                    <div>+7 800 555-10-61</div>
                    <div className={"max-sm:hidden"}>|</div>
                    <div>+7 495 649-83-14</div>
                </div>
                <div className={"max-md:text-center whitespace-pre-wrap"}>г. Москва, Новорязанская ул., 18, стр. 11</div>
            </div>
            <div className={"text-5xl mx-1"}>MONO</div>
            <div className={"flex gap-3 justify-end w-96 max-md:justify-center"}>
                <TelegramIcon/>
                <SignalCellularAltIcon/>
                <SignalCellularAltIcon/>
                <YouTubeIcon/>
                <SignalCellularAltIcon/>
            </div>
        </div>
        <div className={"flex justify-between h-20 max-md:flex-col max-md:items-center max-md:justify-normal "}>
            <div>Интернет-магазин создан на inSales</div>
            <div>Интернет-магазин создан на inSales</div>
        </div>
    </div>
}

export default Footer