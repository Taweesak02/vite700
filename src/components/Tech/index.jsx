const Tech = ({isHighLight,data}) => {
    return (
        <div className="flex gap-x-4 text-sm ">
            {
                data.map((e,i) => (
                    <div key={`${e}-tech-${i}`} className={` px-2 py-1 rounded-xl text-gray-300 ${isHighLight ? "bg-primarySubcontent" : " bg-slate-500"} hover:bg-primaryTitle hover:scale-110 transition-all`}>{e}</div>
                    )
                )
            }  
        </div>
    )

}

export default Tech