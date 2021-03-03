const HeloFun=(props) => {
    let cookieStatus=Cookies.get("userCookiesAcceptance")==undefined? true : false;
    console.log(status);    
    const [name, setname] = React.useState("Cookies manager");
    const [authorName, setauthorName] = React.useState("Haseeb ali");
    const [visibility, setVisibility] = React.useState(cookieStatus);
    const headingStyle={
        fontWeight:'bold',
    }
    const cookieContainer={
        display:'flex',        
    }
    const hanleAcceptCookie=()=>{
        Cookies.set('userCookiesAcceptance', true);
        setVisibility(false);
    }
    const hanleDeclineCookie=()=>{
        Cookies.set('userCookiesAcceptance', false);
        setVisibility(false);
    }
    return visibility? (
                <div class="cookie-container">
                    <i class="fa fa-times" aria-hidden="true" onClick={hanleDeclineCookie}></i>
                     <img src="wp-content/plugins/cookies-plugin/assets/17a340ec97098d9f07dfe408fcfb6a84_160327902.svg"></img>
                     <div>
                     <p class="m-0 fw-border title" style={headingStyle}>Cookie's!</p>
                     </div>
                     <div class="cookies-message">
                         <p>
                            Cookies let us give you better experience and improve our product we won't turn until you accept.
                         </p>
                         <button type="button" class="accept-btn" onClick={hanleAcceptCookie}>Accept</button>
                     </div>
                </div>
                
    ) :''
}

