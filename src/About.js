function Myabout()
{
    return <h1>this is first page</h1>
}
export default Myabout



export function Contactus()
{
    return <h2>this is heading two</h2>
}

export function Mypage()
{
    const name = "kumar";
    const y = true;
    const age = 100;
    const abc = "default value";

    return(
        <div className="page">
            <h1 className="heading">this is page heading</h1>
            <p>slddfh j sdhfjsdfn</p>
            <section style={{color:'red',fontSize:80,backgroundColor:'orange'}}>about page section</section>
            <p>this is variable based {name}</p>
            <p>this is variable based {900+800+700}</p>
            <p>this is condition dist {y===true? "yes" : "no"}</p>          
            <p>Age: {age>=800? "first condition" : age>=500? "second condition" : age>=200? "third" : <h1>Fail</h1>}</p> 
            <input type="text" placeholder="username" value={abc}/>
        </div>
    )
}
