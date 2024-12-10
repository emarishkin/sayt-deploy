import { useState } from "react"



export function Header(){
    
    const [tabA,setTabA] = useState(false)
    const [tab,setTab] = useState(false)
    const [time,setTime] = useState(new Date())
    setInterval(()=>setTime(new Date()),1000)

    
     
    return(
    <section>
          <div className="header">
            <img src="./public/звезда.webp" alt="звезда" />
            <div>
             <p>Текущее время:{time.toLocaleTimeString()}</p>
            </div>
            <button className={`button ${tab?'active':''}`} onClick={()=>setTab(true)}>меню</button>
          </div>
          {tab && (
            <div className="modal">
            <img src="./public/война.jpg" alt="война" />
            <a className="variorA" onClick={()=>setTabA(true)} href="#">Выбрать войну</a>
              {tabA && (
                <div className="modalInModal">
                <a href="#">Великая Отечественная Война</a>
                <a href="#">Гражданская Война</a>
                <a href="#">Война в Украине</a>
                <button className="button-modalA" onClick={()=>setTabA(false)}>Назад</button>
               </div>
              )}
            <button className="button" onClick={()=>setTab(false)}>Закрыть</button>
         </div>
          )}
    </section>
    )
}