import React from "react"

// export default function IntroSection(){
//     return (
//         <section>
//             <h1 className="centered">Унивеситет</h1>
//             <h3 className="centered" style={{color: "#666"}}>унивеситет разработки и веб</h3>
//         </section>
//     )
// }

const e = React.createElement
export default function IntroSection(){
    return (
        e(
            'section',
        null, [ 
            e('h1',{className:"centered", style : {color: "#666"}, key: 1} ,'Унивеситет'),
            e('h3',{className:"centered", key: 2},'унивеситет разработки и веб')
        ])
    )
}