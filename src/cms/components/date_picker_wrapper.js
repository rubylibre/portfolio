import React, { Component } from 'react';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

export default class DatePickerWrapper extends Component {

    constructor(props) {
        super(...props);
    }

    onChange(event, date) {
        if (this.props.onChange) {
            this.props.onChange(date);
        }
    }

    render() {
        return <DatePicker {...this.props} onChange={this.onChange.bind(this)}/>
    }
}