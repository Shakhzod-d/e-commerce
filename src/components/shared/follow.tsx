import { useState } from "react"
import EmailIcon from '@mui/icons-material/Email';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Follow = () => {
    const [email, setEmail] = useState('')
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log({
            email: email
        })
        setEmail('')
    }
    return (
        <div className="bg-[#55C380] py-2 flex md:flex-col justify-center items-end md:items-start text-white">
            <div className="mr-5 md:mr-0">
                <div className="flex items-center mb-3 xm:flex-col">
                    <EmailIcon className='w-[22px] h-[22px] mr-2 text-white'/>
                    <h3 className="font-semibold text-2xl">Подпишитесь на рассылку</h3>
                </div>
                <h3 className="text-xl font-normal max-w-[500px] text-start">Мы будем сообщать вам только
                о крутых акциях и присылать полезные статьи</h3>
            </div>
            <div className="mt-5 max-w-[420px] w-full">
                <form action="" onSubmit={handleSubmit} className="flex flex-col items-start">
                    <input 
                        placeholder='Ваш емаил'
                        type="text" 
                        className="p-1 mb-3 w-full border-b-[1px] border-white outline-none bg-transparent input"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="flex">
                        <button className="py-1 px-2 bg-green-200 uppercase text-lg font-normal text-green-600">подписаться</button>
                        <div className="px-1 text-green-700 text-xl font-semibold bg-white"><NavigateNextIcon/></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Follow