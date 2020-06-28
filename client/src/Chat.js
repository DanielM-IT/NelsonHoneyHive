import React, { Component } from 'react'

// Create my class component to contain the fetched chatbot.
class Chat extends Component {

    // On beginning the components lifecycle it fetches the bot from Kommunicate using the below funtion 
    // and will return it instead of the normal body in the render method.
    componentDidMount() {
        (function (d, m) {
            var kommunicateSettings = { "appId": "339d96a11d2b0b7e6cafb22f60783b993", "popupWidget": true, "automaticChatOpenOnNavigation": true };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }

    render() {
        return (
            <div></div>
        )
    }
}

// Export the component for use in the rest of the application.
export default Chat