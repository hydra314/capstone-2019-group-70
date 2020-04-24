import React from "react";

import {
    Badge,
    Button,
    Card,
    CardBody,
} from "reactstrap";

class WillCard extends React.Component {
    format_preview = (text) => {
        return "\"" + text.substring(0, 100) + "...\"";
    }
    
    render() {
        return(
            <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-6">
                    <h6 className="text-dark text-uppercase">
                        {this.props.data['document_title']}
                    </h6>
                    <p className="descption mt-3">
                        {this.format_preview(this.props.data['translated_text'])}
                    </p>
                    <div>
                        <Badge color="primary" pill className="mr-1">
                            {this.props.data['location']}
                        </Badge>
                        <Badge color="dark" pill className="mr-1">
                            {this.props.data['original_language']}
                        </Badge>
                        <Badge color="info" pill className="mr-1">
                            {this.props.data['year_of_publication']}
                        </Badge>
                    </div>
                    <Button  className="mt-4" color="dark" href="/will">
                        Read Will
                    </Button>
                </CardBody>
            </Card>
        );
    }
}

export default WillCard; 