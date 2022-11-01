import React from "react";
import ReactToPrint from "react-to-print";
import { Container } from "reactstrap";
import Overview from '../components/Report';

class ExportedPdfComponent extends React.Component{
    render(){
        return(
            <div>
                <Overview ref={(response) => (this.componentRef = response)}/>
                <Container>
                <ReactToPrint
                content={() => this.componentRef}
                trigger={() => <button className="btn btn-primary">Print to PDF</button>}
                />
                </Container>



            </div>
        );
    }

}

export default ExportedPdfComponent;