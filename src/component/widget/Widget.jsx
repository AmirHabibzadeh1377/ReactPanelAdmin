import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const Widget = ({ type }) => {

    let data ={};
    switch (type) {
        case "user":
            data = {
                title: "تعداد کاربران",
                counter: 2145,
                link: "نمایش تمام کاربران",
                icon: <PersonOutlineOutlinedIcon className="icon" style={{
                    color:"crimson",
                    backgroundColor:"rgba(255,0,0,.2)"
                }} />,
                isMoney :false,
                percentage :20
            };
            break;
        case "order":
            data = {
                title: "تعداد سفارشات این ماه",
                counter: 300,
                link: "نمایش تمام فاکتور ها",
                icon: <ShoppingCartOutlinedIcon className='icon'
                style={{
                    color:"goldenrod",
                    backgroundColor:"rgba(218,165,32,.2)"
                }} />,
                isMoney:false,
                percentage:23
            };
            break;
        case "earning":
            data = {
                title: "خالص درآمد ماه جاری شرکت",
                counter: 500000000,
                link: "نمایش جزئیات درآمدی شرکت",
                icon: <MonetizationOnOutlinedIcon className='icon'
                style={{
                    color:"green",
                    backgroundColor:"rgba(0,0,128,.2)"
                }} />,
                isMoney:true,
                percentage:50
            };
            break;
        case "balance":
            data = {
                title: "موجودی حساب شرکت",
                counter: 2000000000,
                link: "نمایش ریز موجودی حساب شرکت",
                icon: <AccountBalanceWalletOutlinedIcon className='icon' 
                style={{
                    color:"purple",
                    backgroundColor:"rgba(128,0,128,.2)"
                }}/>,
                isMoney:true,
                percentage:10
            };
            break;
        default:
            break;

    }
    return (
        <div className='widget'>
            <div className='right'>
                <span className='title'>{data.title}:</span>
                <span className='counter'>{data.counter} <span className='moneyUnit'>{data.isMoney && "تومان"}</span> </span>
                <span className='link'>{data.link}</span>
            </div>
            <div className='left'>
                <div className='percentage positive'>
                    {data.percentage}%
                    <KeyboardArrowUpOutlinedIcon />
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget
