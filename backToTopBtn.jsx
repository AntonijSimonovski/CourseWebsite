import Button from '@restart/ui/esm/Button';
import React from 'react';

class BackToTopBtn extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isShown: false
        }
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
          scrollComponent.toggleShow();
        });
    }

    toggleShow = () => {
        if(window.pageYOffset > 300) this.setState({isShown: true});
        else this.setState({isShown: false});
    }

    backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() { 
        const {isShown} = this.state;
        return (
            <div className="backToTopBtn">
                {
                    isShown && (
                    <Button onClick={() => this.backToTop()} className="backToTopBtn">
                        <span className="glyphicon glyphicon-chevron-up"></span>
                    </Button>)
                }
            </div>
        );
    }
}
 
export default BackToTopBtn;