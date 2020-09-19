import React from 'react';
import { Image } from 'react-bootstrap';

import NavBar from './NavbarComponent';

function Home() {
    return(
        <React.Fragment>
            <NavBar/>
            <Image width="100%" src={require('../img/FrontCover.png')} href="https://www.amazon.com/This-ME-Rachel-Chardea-Brown/dp/B089M432P5/ref=sxts_sxwds-bia-wc-p13n2_0?cv_ct_cx=this+is+me+from+a+to+z&dchild=1&keywords=this+is+me+from+a+to+z&pd_rd_i=B089M432P5&pd_rd_r=10c1610e-677a-4e50-ba1f-40f6f6411b1b&pd_rd_w=VSPyp&pd_rd_wg=ZAzbE&pf_rd_p=42e41e42-79c0-42f8-8a91-d71b944e9fa8&pf_rd_r=BD6CDMVWM37XGSPR6QP7&psc=1&qid=1600429379&sr=1-2-791c2399-d602-4248-afbb-8a79de2d236f"/>
        </React.Fragment>
    );
}

export default Home;