const Nest=(props)=>{
    const {obj}=props

let answer=obj.map((e,i)=>{
    return(
        <div>
                 <li key={i}>{e.skills[0].name}</li>
                 <li>{e.skills[1].name}</li>
        </div>
    )
})
return(
    <div className="list">
    <ul>
        {answer}
    </ul>
    </div>
)
}
export default Nest;