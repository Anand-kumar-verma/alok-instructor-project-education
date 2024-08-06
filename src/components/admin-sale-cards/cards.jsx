import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cards = ({data}) => {
    const navigate = useNavigate();
    let cards = data || [];
    const handleClick = (id)=>{
        console.log(`${id}`);
        navigate(`/admin-dashboard/dashboard/sale/${id}`)
    }
    return (
        <div className="justify-start w-full items-start flex-wrap xl:flex-nowrap gap-4 inline-flex">
            {cards.map(card => {
                return (
                    <div key={card.index} className="min-w-[220px] xl:w-full grow shrink basis-0 rounded-xl drop-shadow justify-start items-start gap-4 bg-white flex">
                        <div className="grow shrink basis-0 bg-white rounded-xl flex-col justify-start items-start inline-flex">
                            <div className="w-full h-[164px] px-6 pt-6 pb-4 bg-white rounded-xl shadow flex-col justify-start items-start gap-6 flex">
                                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                                    <div className={`w-6 h-6 relative ${card.iconColor}`}><i className={card.icon}></i></div>
                                    <div className="grow shrink basis-0 text-zinc-900 text-base font-medium leading-normal">{card.text}</div>
                                </div>
                                <div className="self-stretch h-[72px] flex-col justify-center items-start gap-1 flex">
                                    <div className="text-zinc-900 text-[40px] font-semibold leading-[48px]">{card.money}</div>
                                    <div className="h-5 relative flex gap-2">
                                        <div className={`${card.percentColor} flex items-center`}>
                                            <div className={` text-sm font-semibold leading-tight`}><i className={card.trend}></i></div>
                                            <div className="">
                                                <div className="text-sm font-semibold leading-tight" >{card.percent}</div>
                                            </div>
                                        </div>
                                        <div className=" text-zinc-500 text-xs font-medium leading-[18px]">from last month</div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={()=>handleClick(card.id)} className="w-full px-6 py-4 justify-between items-center gap-4 inline-flex cursor-pointer">
                                <div className="grow shrink basis-0 text-[#52B6DF] text-sm font-semibold leading-tight">View detail</div>
                                <i class="fa-solid fa-chevron-right text-[#52B6DF]"></i>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards