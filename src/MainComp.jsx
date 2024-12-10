import {vars} from './data'
import { MainVarInfo } from './mainComponents/MainVarInfo'
import { Game } from './mainComponents/Game'
import { questions } from './questions'
import { Result } from './mainComponents/Result'
import { useState } from 'react'
import { itogi } from './itogi'

import { ButtonBottomItogs } from './mainComponents/ButtonBottomItogs'

export function MainComp(){
    const [content,setContent]= useState(1)
    const [step,setStep] = useState(0)
    const [correct,setCorrect] =useState(0)
    const question=questions[step]
    


    function ClickItogi(type){
        return setContent(type)
        
    }
    
    const clickVAriant= (index)=>{
        console.log(step,index)
        setStep(step+1)

        if(index===question.correct){
            setCorrect(correct+1)
        }
    }

    return (
     <div>
        <section className='top'>
            <div className='main'>
                <div className='main-info'>
                    <p className='info-text'>Информация</p>
                    {vars.map((element) => {
                        return <MainVarInfo key={element.title} {...element} />
                     })}
                     {/* <MainVarInfo {...vars[0]} /> 
                     <MainVarInfo {...vars[1]} /> 
                     <MainVarInfo {...vars[2]} />  */}
                </div>
                <div className='quiz'>
                    {step!=questions.length?<Game question={question} clickVAriant={clickVAriant}/>:<Result correct={correct}/>}
                    
                </div>
            </div>
        </section>
        <section className='bottom'>
            <div className='main-bottom'>
                <h2>Итоги</h2>
                <div className='buttons-itog'>
                    <ButtonBottomItogs onClick={()=>ClickItogi('first')}>Итог Великой Отечественной Войны</ButtonBottomItogs>
                    <ButtonBottomItogs onClick={()=>ClickItogi('second')}>Итог Гражданской войны</ButtonBottomItogs>
                    <ButtonBottomItogs onClick={()=>ClickItogi('thitd')}>Итог войны на Украине</ButtonBottomItogs>
                    <div className='itogi-box'>
                        {itogi[content]}
                    </div>
                </div>
            </div>
        </section>
        <section className='bottom-2'>
            <div className='images-bottom-main'>
               <img src="./public/1.jpg" alt="" />
               <img src="./public/2.jpg" alt="" />
               <img src="./public/3.jpg" alt="" />
               <img src="./public/4.webp" alt="" />
               
            </div>
        </section>
     </div>  
    )
}