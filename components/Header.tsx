import { useRouter } from "next/router";

const Header: React.FC<{ categories: any }> = ({ categories }) => {
    const router = useRouter()
   
    const to = (item) => {
       router.push( `/cate/${item.id}`)
    }

    const toHome = (e)=>{
        e.preventDefault()
        router.push('/')
    }

    return <div className="h-16  flex items-center  w-full bg-primary">
        {/* logo */}
        <div className="ml-4 ">
            <div className="text-4xl text-white	cursor-pointer" onClick={toHome}> MWBLOG </div>
        </div>

        {/* menu */}
        <div className="flex">
            {
                categories.map((item, index) => {
                    return (<div className="text-xl text-white	ml-4 cursor-pointer" key={index} onClick={() => to(item)}> {item.name} </div>)
                })
            }

        </div>
    </div>
}

export default Header;