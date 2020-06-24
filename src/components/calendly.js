import React from "react"

class Calendly extends React.Component {
    componentDidMount () {
        //TODO: Provavelmente existe um jeito melhor de fazer isso usando o react dom, pesquisar.
        const script = document.createElement("script");
        
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        
        script.async = true;
        
        document.body.appendChild(script);
    
    }

    render() {
        
        const calendlyStyle = {
            "minWidth":"320px",
            "height":"630px",
        }
        return (
            <div className="calendly">
                <div className="calendly-inline-widget" data-url="https://calendly.com/metricasboss/bate-papo" style={calendlyStyle}></div>
            </div>
        )
    }
}

export default Calendly