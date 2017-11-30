import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="info">
                <div id="about">
                    <h1 className="home-header">ABOUT<img src="./images/lightning.svg" alt="logo" height="50" width="50" className="icon-header" /></h1>
                <hr />
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare elit eu tempus tempor.
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec at volutpat neque. 
                    Ut pellentesque hendrerit nisl, vitae pretium risus tempor imperdiet. Nunc placerat faucibus eros, non pharetra dui pretium vitae. 
                    Phasellus sit amet hendrerit urna, a ultrices mi. Donec ut felis nec sem fermentum suscipit nec vitae sem. Duis eros ante, imperdiet nec metus id, egestas finibus arcu. 
                    Cras aliquam est quis lacus viverra, eu tristique orci commodo. Curabitur urna mi, aliquet ut elementum in, eleifend sit amet purus.
                </p>
                </div>
            </div>
            <div className="info">
                <div id="pricing">
                <h1 className="home-header">PRICING<img src="./images/notes.svg" alt="pricing" height="50" width="50" className="icon-header" /></h1>
            <hr />
            <p className="paragraph">
                Donec sollicitudin, sem nec commodo tempor, nisl magna porttitor massa, rutrum eleifend neque justo eu felis.
                    Sed eget dui in odio sollicitudin feugiat at quis augue. Ut rutrum gravida rutrum. Phasellus vehicula purus velit, ut accumsan justo luctus quis.
                    Cras et laoreet lectus. Praesent dignissim enim eu laoreet facilisis.
                    Suspendisse sollicitudin, metus vel placerat sodales, arcu risus gravida odio, feugiat laoreet magna magna et odio.
                    Proin laoreet dui lacus, in commodo purus tempor bibendum.
                </p>
                </div>
            </div>
            <div className="info">
                <div id="faq">
                <h1 className="home-header">FAQ<img src="./images/mailbox.svg" alt="questions" height="50" width="50" className="icon-header" /></h1>
                <hr />
                <p className="paragraph">
                    Maecenas vulputate magna a consequat pretium. Nam gravida tempor maximus. Aliquam at est ut tortor fringilla semper.
                    Nullam luctus faucibus imperdiet. Sed ullamcorper odio non odio lacinia, at malesuada dolor ultrices.
                    Curabitur auctor ullamcorper varius. Praesent massa turpis, ultricies id nulla vitae, commodo ornare mauris.
                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    Fusce rutrum, magna nec lobortis tristique, orci orci dignissim ipsum, sed facilisis sapien orci eu felis.
                    Donec fringilla aliquam eros, ut condimentum dui. Integer hendrerit ante purus, sed sollicitudin lectus gravida a.
                    Proin tempor viverra facilisis. In luctus ut nunc sed ornare. Phasellus laoreet velit tellus, et luctus purus vehicula a.
                    Phasellus tempus, sapien eget tincidunt faucibus, felis quam commodo erat, sed tristique odio felis non ligula.
                </p>
                </div>
            </div>
            </div>
        )
    }
}

export default About;