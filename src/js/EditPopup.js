import React from "react";
import ReactModal from "react-modal";

ReactModal.defaultStyles.content.height = electron.globalsApi.getDHeight() / 2 + 'px';
ReactModal.defaultStyles.content.width = electron.globalsApi.getDWidth() / 3 + 'px';
ReactModal.defaultStyles.content.top = electron.globalsApi.getDHeight() / 6 + 'px';
ReactModal.defaultStyles.content.left = electron.globalsApi.getDWidth() / 3 + 'px';

export default class EditPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            age: false,
            gender: false,
            skinColor: false,
            box: null,
        }
    }

    show = (box) => {
        console.log(box);
        this.setState({
            show: true,
            age: box.age,
            gender: box.gender,
            skinColor: box.skinColor,
            box: box,
        });
    }

    close = () => {
        this.setState({show: false});
    }

    blend = () => {
        this.setState({show: false});
        // send to server: blend only?
        const b = {
            age: this.state.age,
            gender: this.state.gender,
            skinColor: this.state.skinColor,
            height: this.state.box.height,
            left: this.state.box.left,
            top: this.state.box.top,
            width: this.state.box.width,
        }
        this.props.apply(b);
    }

    blur = () => {
        this.setState({show: false});
        // send to server: blur only?
        const b = {
            height: this.state.box.height,
            left: this.state.box.left,
            top: this.state.box.top,
            width: this.state.box.width,
        }
        this.props.blur(b);
    }

    setAge = () => {
        this.setState({age: !this.state.age});
    }

    setGender = () => {
        this.setState({gender: !this.state.gender});
    }

    setSkinColor = () => {
        this.setState({skinColor: !this.state.skinColor});
    }

    renderOutsideTouchable(onTouch) {
        const view = <div style={{flex: 1, width: "100%"}}/>
        if(!onTouch) return view;

        return (
            <button onClick={onTouch} style={{flex: 1, width: "100%"}}>
                {view}
            </button>
        )
    }

    render() {
        const {show, age, gender, skinColor} = this.state;
        const {onTouchOutside} = this.props;
        const dHeight = electron.globalsApi.getDHeight();

        return(
            <ReactModal onRequestClose={this.close} isOpen={this.state.show} ariaHideApp={false}>
                <div style={{...styles.container, ...{height: dHeight / 3}}}>
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <div style={styles.popup}>
                        <div style={{marginBottom: 30}}>
                            <p style={styles.title}>Edit Face Information</p>
                            <div style={styles.rowView}>
                                <p style={styles.text}>Age Group</p>
                                <button style={styles.info} onClick={this.setAge}>
                                    <p style={styles.touchText}>{age ? "Young" : "Old"}</p>
                                </button>
                            </div>
                            <div style={styles.separator}/>
                            <div style={styles.rowView}>
                                <div style={styles.text}>Gender Group:</div>
                                <button style={styles.info} onClick={this.setGender}>
                                    <p style={styles.touchText}>{gender ? "Male" : "Female"} </p>
                                </button>
                            </div>
                            <div style={styles.separator}/>
                            <div style={styles.rowView}>
                                <div style={styles.text}>Skin Color Group:</div>
                                <button style={styles.info} onClick={this.setSkinColor}>
                                    <p style={styles.touchText}>{skinColor ? "Dark" : "Pale"} </p>
                                </button>
                            </div>
                            <div style={styles.rowView}>
                                <button style={styles.button} onClick={this.blend}>
                                    <p style={styles.buttonText}>BLUR</p>
                                </button>
                                <button style={styles.button} onClick={this.blend}>
                                    <p style={styles.buttonText}>APPLY CHANGES</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactModal>
        );
    }
}


const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: "#000000AA",
    },
    popup: {
        backgroundColor: "white",
        width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 10,
        maxHeight: 10,
    },
    title: {
        color: '#182E44',
        fontSize: 20,
        fontWeight: "500",
        margin: 15,
    },
    text: {
        color: '#182E44',
        fontSize: 18,
        fontWeight: "400",
        margin: 10,
    },
    separator: {
        opacity: 0.2,
        backgroundColor: '#182E44',
        height: 1,
    },
    info : {
        width: 100,
        alignItems:'center',
        //margin: 10,
    },
    touchText: {
        color:'#F92660',
        fontSize: 18,
        fontWeight: "600",
    },
    rowView: {
        alignItems: "stretch",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        width: "45%",
        backgroundColor:'#F92660',
        borderRadius: 20,
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 15,
    },
    buttonText: {
        color: "white",
        //fontSize: 16,
        //margin: 10,
    },
    modalStyle: {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
        },
    }
};